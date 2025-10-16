"use client";

import React, { useState } from 'react'
import { deleteContent, type Lang, defaultLang } from '@/constants/deleteContent'
import LanguageToggle from '@/components/ui/LanguageToggle'

function LanguageToggleProvider() {
    const [lang, setLang] = useState<Lang>(defaultLang)
    const c = deleteContent[lang]

    return (
        <>
                <div className="mt-4 flex items-center gap-3">
                <label className="text-sm font-medium">Language:</label>
                <LanguageToggle lang={lang} onChange={setLang} />
                </div>

            <section className="mt-6 bg-[#FAFAFA] p-6 rounded-md border">
                <h2 className="text-2xl font-semibold">{c.policyTitle}</h2>
                <p className="mt-2 text-base">{c.policyBody}</p>
            </section>

            <section className="mt-4 bg-[#FAFAFA] p-6 rounded-md border">
                <h3 className="text-xl font-semibold">{c.deletedTitle}</h3>
                <p className="mt-2 text-base">When a user requests deletion, the following data will be removed:</p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-base ml-4">
                    {c.deletedList.map((d) => (
                        <li key={d}>{d}</li>
                    ))}
                </ul>
            </section>

            <section className="mt-4 bg-[#FAFAFA] p-6 rounded-md border">
                <h3 className="text-xl font-semibold">{c.retainedTitle}</h3>
                <p className="mt-2 text-base">Certain non-personal or aggregated data may be retained for the following purposes:</p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-base ml-4">
                    {c.retainedList.map((d) => (
                        <li key={d}>{d}</li>
                    ))}
                </ul>
                <p className="mt-2 text-sm text-muted-foreground">{c.retainedNote}</p>
            </section>

            <section className="mt-4 bg-[#FAFAFA] p-6 rounded-md border">
                <h3 className="text-xl font-semibold">{c.contactTitle}</h3>
                <p className="mt-2 text-base">{c.contactBody}</p>
                <p className="mt-2 text-base">📧 <a className="text-main-blue underline" href="mailto:modbispropertiofficial@gmail.com">modbispropertiofficial@gmail.com</a></p>
            </section>

            <section className="mt-4 bg-[#FAFAFA] p-6 rounded-md border">
                <h3 className="text-xl font-semibold">{c.howTitle}</h3>
                <ol className="mt-2 list-decimal list-inside space-y-2 text-base">
                    {c.howList.map((h) => (
                        <li key={h.title}>
                            <strong>{h.title}:</strong>
                            <div className="ml-4">{h.body}</div>
                        </li>
                    ))}
                </ol>
                <p className="mt-3 text-sm text-muted-foreground">Once your request has been verified, we will permanently delete your account and all associated data within 30 days.</p>
            </section>
        </>
    )
}
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { FormRequestSchema, submitForm } from "../(Sections)/(Section5)/action";

export default function DeleteRequestPage() {
    const form = useForm<z.infer<typeof FormRequestSchema>>({
        resolver: zodResolver(FormRequestSchema),
        defaultValues: {
            email: "",
            name: "",
            message: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof FormRequestSchema>) => {
        const response = await submitForm(data);

        toast(response.message);
    };


    return (
        <div className="flex flex-col gap-y-6 p-10 px-16 items-center w-full justify-center bg-white text-[#903936] min-h-[calc(100vh-400px)]">
            <div className="w-full max-w-[1150px] h-full">
                <div className="flex flex-col gap-y-4 w-full">
                    <h1 className="text-4xl font-bold text-left">
                        Request Penghapusan Akun
                    </h1>
                    <p className="text-left text-xl">
                        Silahkan baca kebijakan penghapusan data dan akun pada halaman ini sebelum mengirimkan permohonan.
                    </p>

                    {/* Language toggle */}
                    <LanguageToggleProvider />
                </div>
                <div className="flex flex-col gap-y-4 w-full mt-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-y-4">
                            <div className="w-full flex flex-row gap-x-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Nama" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Alasan permohonan penghapusan akun"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-fit bg-[#903936] text-white">Kirim</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}