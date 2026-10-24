'use client'

import Input from "@/components/Input";
import {useLanguage} from "@/utils/LanguageContext";
import Button from "@/components/Button";

export default function ContactForm() {

    const { dict } = useLanguage();
    return (
        <form
            name="contactform"
            id="contactform"
            className="flex flex-col gap-4 w-full lg:w-1/2 text flex-1"
        >

            <div className="flex-col xl:flex-row flex justify-between gap-3">
                <Input
                    name="name"
                    placeholder={dict.contact.contact_form_name}
                    className="w-full border-2 border-gray-100 dark:border-gray-700"
                />
                <Input
                    name="email"
                    placeholder={dict.contact.contact_form_email}
                    className="w-full border-2 border-gray-100 dark:border-gray-700"
                />
            </div>

            <Input
                name="subject"
                placeholder={dict.contact.contact_form_subject}
                className="w-full border-2 border-gray-100 dark:border-gray-700"
            />

            <textarea
                name="message"
                placeholder={dict.contact.contact_form_message}
                className="flex-1 min-h-[10rem] bg-gray-200 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-700 text placeholder-gray-400 p-4 rounded-[8px] resize-none transition-all duration-500"
            />

            <Button
                type="button">
                <span className={'inline-flex justify-center items-center z-10'}>
                    {dict.contact.contact_form_button}
                </span></Button>
        </form>
    );
}
