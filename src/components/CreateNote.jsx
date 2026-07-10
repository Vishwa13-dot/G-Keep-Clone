import { useState } from "react";
import { useFormik } from "formik";
import {
    Pin,
    Bell,
    Palette,
    MoreVertical,
    Calendar,
    Clock,
    X,
} from "lucide-react";

import { noteSchema } from "../utils/validation";
import ColorPalette from "./ColorPalette";

function CreateNote({ notes, setNotes, labels }) {
    const [expand, setExpand] = useState(false);

    const [color, setColor] = useState("#ffffff");

    const [pin, setPin] = useState(false);

    const [labelId, setLabelId] = useState("");

    const [showPalette, setShowPalette] = useState(false);

    // Reminder Popup
    const [showReminder, setShowReminder] = useState(false);

    // Reminder Data
    const [reminderDate, setReminderDate] = useState("");

    const [reminderTime, setReminderTime] = useState("");

    const [reminderLabel, setReminderLabel] = useState("");

    const formik = useFormik({
        initialValues: {
            title: "",
            note: "",
        },

        validationSchema: noteSchema,

        onSubmit: (values, { resetForm }) => {
            if (
                values.title.trim() === "" &&
                values.note.trim() === ""
            ) {
                resetForm();
                setExpand(false);
                setColor("#ffffff");
                setPin(false);

                setReminderDate("");
                setReminderTime("");
                setReminderLabel("");

                return;
            }

            const newNote = {
                id: Date.now(),

                title: values.title,

                note: values.note,

                color,

                pin,

                labelId,

                reminder:
                    reminderDate !== ""
                        ? {
                            date: reminderDate,
                            time: reminderTime,
                            label: reminderLabel,
                        }
                        : null,

                archive: false,

                trash: false,
            };

            const updated = [newNote, ...notes];

            setNotes(updated);

            resetForm();

            setExpand(false);

            setColor("#ffffff");

            setPin(false);

            setLabelId("");

            setReminderDate("");

            setReminderTime("");

            setReminderLabel("");
        },
    });

    const handleClose = () => {
        if (
            formik.values.title.trim() === "" &&
            formik.values.note.trim() === ""
        ) {
            formik.resetForm();

            setExpand(false);

            setColor("#ffffff");

            setPin(false);

            setLabelId("");

            setReminderDate("");

            setReminderTime("");

            setReminderLabel("");

            return;
        }

        formik.submitForm();
    };

    const setToday = () => {
        const today = new Date();

        const date = today.toISOString().split("T")[0];

        setReminderDate(date);

        setReminderTime("18:00");

        setReminderLabel("Later Today");

        setShowReminder(false);
    };

    const setTomorrow = () => {
        const tomorrow = new Date();

        tomorrow.setDate(tomorrow.getDate() + 1);

        const date = tomorrow.toISOString().split("T")[0];

        setReminderDate(date);

        setReminderTime("08:00");

        setReminderLabel("Tomorrow");

        setShowReminder(false);
    };

    const setNextWeek = () => {
        const next = new Date();

        next.setDate(next.getDate() + 7);

        const date = next.toISOString().split("T")[0];

        setReminderDate(date);

        setReminderTime("08:00");

        setReminderLabel("Next Week");

        setShowReminder(false);
    };

    return (
        <div className="flex justify-center mt-10 px-4">
            <form
                style={{ backgroundColor: color }}
                className="w-full max-w-md sm:max-w-xl mx-auto rounded-xl border border-gray-300 shadow-md"
            >
                <div className="p-4">

                    {expand && (
                        <div className="mb-3 flex items-center justify-between">
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                className="w-full bg-transparent text-lg font-medium outline-none text-gray-800 placeholder-gray-500"
                            />

                            <button
                                type="button"
                                onClick={() => setPin(!pin)}
                                className="rounded-full p-2 hover:bg-gray-100"
                            >
                                <Pin
                                    size={20}
                                    className={
                                        pin
                                            ? "fill-gray-700 text-gray-700"
                                            : "text-gray-500"
                                    }
                                />
                            </button>
                        </div>
                    )}

                    <textarea
                        name="note"
                        placeholder="Take a note..."
                        value={formik.values.note}
                        onChange={formik.handleChange}
                        onClick={() => setExpand(true)}
                        rows={expand ? 5 : 1}
                        className="w-full resize-none bg-transparent outline-none text-gray-700 placeholder-gray-500"
                    />

                    {reminderDate && (

                        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm">

                            <Bell
                                size={15}
                                className="text-yellow-600"
                            />

                            <span>

                                {reminderLabel}

                                {" "}

                                {reminderDate}

                                {" "}

                                {reminderTime}

                            </span>

                            <button
                                type="button"
                                onClick={() => {
                                    setReminderDate("");
                                    setReminderTime("");
                                    setReminderLabel("");
                                }}
                            >

                                <X
                                    size={15}
                                />

                            </button>

                        </div>

                    )}

                    {expand && (
                        <>
                            {labels.length > 0 && (
                                <div className="mb-4">
                                    <select
                                        value={labelId}
                                        onChange={(e) => setLabelId(Number(e.target.value))}
                                        className="w-full rounded-lg border border-gray-300 p-2 outline-none"
                                    >
                                        <option value="">
                                            No Label
                                        </option>

                                        {labels.map((label) => (
                                            <option
                                                key={label.id}
                                                value={label.id}
                                            >
                                                {label.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                                <div className="flex flex-wrap items-center gap-1">
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => setShowReminder(!showReminder)}
                                            className="rounded-full p-2 hover:bg-gray-100"
                                            title="Reminder"
                                        >
                                            <Bell
                                                size={18}
                                                className={
                                                    reminderDate
                                                        ? "text-yellow-600"
                                                        : "text-gray-600"
                                                }
                                                fill={reminderDate ? "currentColor" : "none"}
                                            />
                                        </button>

                                        {showReminder && (

                                            <div className="absolute left-0 top-12 z-50 w-64 sm:w-72 rounded-xl border border-gray-200 bg-white shadow-xl">

                                                <div className="border-b p-4 font-medium">
                                                    Add Reminder
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={setToday}
                                                    className="flex w-full items-center justify-between px-4 py-3 hover:bg-gray-100"
                                                >
                                                    <span>Later Today</span>

                                                    <span className="text-sm text-gray-500">
                                                        6:00 PM
                                                    </span>
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={setTomorrow}
                                                    className="flex w-full items-center justify-between px-4 py-3 hover:bg-gray-100"
                                                >
                                                    <span>Tomorrow</span>

                                                    <span className="text-sm text-gray-500">
                                                        8:00 AM
                                                    </span>
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={setNextWeek}
                                                    className="flex w-full items-center justify-between px-4 py-3 hover:bg-gray-100"
                                                >
                                                    <span>Next Week</span>

                                                    <span className="text-sm text-gray-500">
                                                        Monday
                                                    </span>
                                                </button>

                                                <div className="border-t p-4">

                                                    <div className="flex items-center gap-2">

                                                        <Calendar size={18} />

                                                        <input
                                                            type="date"
                                                            value={reminderDate}
                                                            onChange={(e) => {
                                                                setReminderDate(e.target.value);
                                                                setReminderLabel("Custom");
                                                            }}
                                                            className="w-full rounded border p-2"
                                                        />

                                                    </div>

                                                    <div className="mt-3 flex items-center gap-2">

                                                        <Clock size={18} />

                                                        <input
                                                            type="time"
                                                            value={reminderTime}
                                                            onChange={(e) => setReminderTime(e.target.value)}
                                                            className="w-full rounded border p-2"
                                                        />

                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={() => setShowReminder(false)}
                                                        className="mt-4 w-full rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600"
                                                    >
                                                        Save Reminder
                                                    </button>

                                                </div>

                                            </div>

                                        )}

                                    </div>

                                    <div className="relative">

                                        <button
                                            type="button"
                                            onClick={() => setShowPalette(!showPalette)}
                                            className="rounded-full p-2 hover:bg-gray-100"
                                            title="Background options"
                                        >
                                            <Palette
                                                size={18}
                                                className="text-gray-600"
                                            />
                                        </button>

                                        {showPalette && (

                                            <div className="absolute top-full left-0 mt-2 z-50 w-64 sm:w-72 rounded-xl border border-gray-200 bg-white p-3 shadow-xl">                                            <ColorPalette
                                                color={color}
                                                setColor={setColor}
                                                closePalette={() => setShowPalette(false)}
                                            />

                                            </div>

                                        )}

                                    </div>
                                 

                                </div>

                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="rounded-md px-4 sm:px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                                >
                                    Close
                                </button>

                            </div>
                        </>
                    )}

                </div>
            </form >
        </div >
    );
}

export default CreateNote;