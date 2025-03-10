"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { sendmail } from "@/action/Mail";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";

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
        <form onSubmit={(e)=> e.preventDefault() }  className="w-[90%] mt-20 max-w-2xl mx-auto p-6 rounded-md shadow-md space-y-4">
           
             <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="max-w-md mx-auto mt-12 p-6 rounded-lg text-center">
                          <div
                            className="inline-flex items-center justify-center p-1.5 rounded-full mb-4">
                            <Mail className="h-4 w-4" />
                          </div>
                          <p className="text-sm font-medium text-foreground mb-1">
                            Still Have a Question ?
                          </p>
                        
                         
                        </motion.div>

            <Input value={email} type="email" name="email" placeholder="Email" className="w-full" onChange={(e) => setEmail(e.target.value)} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input value={name} name="name" onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="w-full" />
            </div>
                <Input value={number} name="number" onChange={(e) => setNumber(e.target.value)} type="text" placeholder="Phone Number" className="w-full" />
            <textarea value={message} name="message" onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="w-full h-32 p-2 border rounded-md bg-transparent"></textarea>
                {/* <button onClick={sendMail}  type="submit" className="w-1/2 hover:cursor-pointer">Submit</button> */}
                
         
            <Button size="sm" cursor="pointer" className="" onClick={sendMail} >
                            Contact Support
                          </Button>
         
        </form>
    );
};

export default ContactForm;
