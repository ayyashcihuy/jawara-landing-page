import { BACKEND_URL } from "@/app/global";
import { z } from "zod";

export const FormRequestSchema = z.object({
    email: z.email().min(2, {
        message: "email must be at least 2 characters.",
    }),
    name: z.string().min(2, {
        message: "name must be at least 2 characters.",
    }),
    message: z.string().min(2, {
        message: "message must be at least 2 characters.",
    }),
});

export const submitForm = async (data: z.infer<typeof FormRequestSchema>) => {
    const url = BACKEND_URL + "/api/v1/web/request";

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        return {
            status: "success",
            message: "Thank you for your message! Our team will get back to you soon.",
        }
    }

    switch (response.status) {
        case 400:
            return {
                status: "error",
                message: "Please check your input fields.",
            }
        case 401:
            return {
                status: "error",
                message: "Please check your credentials.",
            }
        case 404:
            return {
                status: "error",
                message: "Page not found.",
            }
        default:
            return {
                status: "error",
                message: "An error occurred.",
            }
    }
}