"use client";

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
import { FormRequestSchema, submitForm } from "./action";

export default function Section5() {
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
        <div className="flex flex-col gap-y-6 p-10 px-16 items-center w-full bg-white text-[#903936]">
            <div className="flex flex-col gap-y-4 w-full">
                <h1 className="text-4xl font-bold text-left">
                    Punya Pertanyaan?
                </h1>
                <p className="text-left text-xl">
                    Hubungi kami 
                </p>
            </div>
            <div className="flex flex-col gap-y-4 w-full">
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
                                            <Input placeholder="Name" {...field} />
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
                                            placeholder="Please tell us your message here"
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
    )
}