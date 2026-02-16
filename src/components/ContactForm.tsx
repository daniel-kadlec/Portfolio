'use client'

import { motion } from "framer-motion";
import Input from "@/components/Input";
import React, { useState } from "react";
import {useLanguage} from "@/utils/LanguageContext";
import Button from "@/components/Button";

interface ContactFormProps {
    showToast: (message: string, success: boolean | null) => void;
}

export default function ContactForm({showToast }: ContactFormProps) {

    const { dict } = useLanguage();

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false,
        subject: false,
    });

    function validateEmail(email: string) {
        const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
        return regex.test(email);
    }

    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;

        const data = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
            email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
            subject: (form.elements.namedItem("subject") as HTMLInputElement).value.trim(),
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
        };

        const newErrors = {
            name: data.name === "",
            email: data.email === "" || !validateEmail(data.email),
            message: data.message === "",
            subject: data.subject === "",
        };

        setErrors(newErrors);
        if (Object.values(newErrors).some(Boolean)) {
            const msg:string =
                data.email && !validateEmail(data.email)
                    ? dict.contact.toast_invalid_email
                    : dict.contact.toast_missing_fields;
            showToast(msg, false);
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                showToast(dict.contact.toast_success, true);
                form.reset();
            } else {
                showToast(result.error || dict.contact.toast_error, false);
            }
        } catch {
            showToast(dict.contact.toast_unexpected, false);
        } finally {
            setLoading(false);
        }
    }

    function handleInputChange(field: keyof typeof errors) {
        setErrors((prev) => ({ ...prev, [field]: false }));
    }
    const container = {
        hidden: { opacity: 0, y: 40, scale: 0.97, filter: "blur(20px)" },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: "easeOut" as const
            }
        },
    };


    return (
        <motion.form
            name="contactform"
            id="contactform"
            onSubmit={submitForm}
            className="flex flex-col gap-4 w-full lg:w-1/2 text flex-1"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true, amount: 0.5 }}
        >

            <motion.div className="flex-col xl:flex-row flex justify-between gap-3">
                <Input
                    name="name"
                    placeholder={dict.contact.contact_form_name}
                    className={`w-full border-2 ${
                        errors.name ? "!border-red-error" : "border-gray-100 dark:border-gray-700"
                    }`}
                    onChange={() => handleInputChange("name")}
                />
                <Input
                    name="email"
                    placeholder={dict.contact.contact_form_email}
                    className={`w-full border-2 ${
                        errors.email ? "!border-red-error" : "border-gray-100 dark:border-gray-700"
                    }`}
                    onChange={() => handleInputChange("email")}
                />
            </motion.div>

            <Input
                name="subject"
                placeholder={dict.contact.contact_form_subject}
                className={`w-full border-2 ${
                    errors.subject ? "!border-red-error" : "border-gray-100 dark:border-gray-700"
                }`}
                onChange={() => handleInputChange("subject")}
            />

            <motion.textarea
                name="message"
                placeholder={dict.contact.contact_form_message}
                className={`flex-1 min-h-[10rem] bg-gray-200 dark:bg-gray-900 border-2 ${
                    errors.message ? "border-red-error" : "border-gray-100 dark:border-gray-700"
                } text placeholder-gray-400 p-4 rounded-[8px] resize-none transition-all duration-500`}
                onChange={() => handleInputChange("message")}
            />

            <Button
                type="submit"
                disabled={loading}>
                <span className={'inline-flex justify-center items-center z-10'}>
                    {loading ? (
                        <div className="spinner !w-6 !h-6 !border-4" />
                    ) : (
                        dict.contact.contact_form_button
                    )}
                </span></Button>
        </motion.form>
    );
}