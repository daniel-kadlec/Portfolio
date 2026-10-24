"use client";

import Link from "next/link";
import Button from "../components/Button"
import {useLanguage} from "@/utils/LanguageContext";

export default function NotFound() {
    const { dict } = useLanguage();

    return (
        <section className="section min-h-screen flex flex-col items-center justify-center text-center gap-6">
            <h1 className="text-h1 !text-[92px] !text-green-secondary dark:!text-green-primary">
                404
            </h1>

            <p className="text-body-large mb-4">
                {dict.error.Description}
            </p>

            <Link
                href="/"
            >
                <Button>
                    {dict.error.Button}
                </Button>
            </Link>
        </section>
    );
}
