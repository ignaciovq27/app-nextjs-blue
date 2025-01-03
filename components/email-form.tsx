"use client"

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

//ICONS
import { Mail } from "lucide-react"
import AlertDialogCustom from "./alert-dialog"

const formSchema = z.object({
    userEmail: z.string().email({
        message: "Please enter a valid email address.",
    }),
})

export function EmailForm() {
    // 0. State to manage dialog
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userEmail: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values.userEmail)
        // Show dialog
        setIsDialogOpen(true);

        // toast({
        //     className: "bg-white my-2", // Modificar el diseño de toast
        //     title: `¡Suscrito al newsletter con éxito!`,
        //     // description: `${values.userEmail}`, // Mostrar el valor ingresado
        //     description: "Revisa tu correo con la nueva información.", // Mostrar el valor ingresado

        //     action: (
        //         <ToastAction className=" text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 hover:from-cyan-400 hover:via-blue-400 hover:to-blue-500" altText="Goto schedule to undo">Cerrar</ToastAction>
        //     ),
        // })
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="userEmail"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ingresa tu dirección de correo:</FormLabel>
                                <FormControl>
                                    <Input placeholder="micorreo@email.cl" {...field} />
                                </FormControl>
                                <FormDescription>
                                    ¡Prepárate para revisar tu correo cada semana!
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="w-full text-md shadow-[0_14px_20px_rgba(59,130,246,0.6),0_1px_3px_rgba(59,130,246,0.3)] bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 text-white hover:from-cyan-400 hover:via-blue-400 hover:to-blue-500 active:bg-blue-900"
                    > Subscribirse al newsletter <Mail /></Button>
                </form>
            </Form>

            {/* Alert Dialog */}
            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} >
                <AlertDialogContent className="w-5/6 rounded-lg">
                    <AlertDialogHeader>
                        <AlertDialogTitle>¡Te has suscrito al newsletter con éxito!</AlertDialogTitle>
                        <AlertDialogDescription>
                            Revisa tu correo con la nueva información.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <Button className=" text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 hover:from-cyan-400 hover:via-blue-400 hover:to-blue-500" onClick={() => setIsDialogOpen(false)}>Cerrar</Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default EmailForm
