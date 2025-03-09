"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [number, setNumber] = useState("");

    const sendMail = async () => {
       // Prevent default form submission
        try {
            const response = await axios("/api/sendmail",{
                method : "POST",
                data : {
                    name ,
                    email, 
                    message ,
                     number
                }
            });
            console.log(response.data);
            setEmail("");
            setName("");
            setMessage("");

            setNumber("");
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    return (
        <form onSubmit={(e)=> e.preventDefault() }  className="w-[90%] mt-14 max-w-2xl mx-auto p-6 rounded-md shadow-md space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="w-full" />
                <Input value={number} onChange={(e) => setNumber(e.target.value)} type="tel" placeholder="Phone Number" className="w-full" />
            </div>
            <Input value={email} type="email" placeholder="Email" className="w-full" onChange={(e) => setEmail(e.target.value)} />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="w-full h-32 p-2 border rounded-md bg-transparent"></textarea>
            <div onClick={sendMail} className="flex justify-center">
                <button  type="submit" className="w-1/2">Submit</button>
            </div>
        </form>
    );
};

export default ContactForm;
