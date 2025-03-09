"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { sendmail } from "@/action/Mail";

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
            <Input value={email} type="email" name="email" placeholder="Email" className="w-full" onChange={(e) => setEmail(e.target.value)} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input value={name} name="name" onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="w-full" />
            </div>
                <Input value={number} name="number" onChange={(e) => setNumber(e.target.value)} type="text" placeholder="Phone Number" className="w-full" />
            <textarea value={message} name="message" onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="w-full h-32 p-2 border rounded-md bg-transparent"></textarea>
                <button onClick={sendMail}  type="submit" className="w-1/2 hover:cursor-pointer">Submit</button>
            <div  className="flex justify-center">
            </div>
        </form>
    );
};

export default ContactForm;
