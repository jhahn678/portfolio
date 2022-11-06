import type { NextPage } from "next"
import styles from '../../styles/Contact.module.css'
import TextInput from "../../components/inputs/TextInput/TextInput"
import ButtonFilled from "../../components/buttons/ButtonFilled/ButtonFilled"
import TextArea from "../../components/inputs/TextArea/TextArea"
import React, { useEffect, useState } from "react"
import Modal from "../../components/modal/Modal"
import ContactHeader from "../../components/layout/headers/ContactHeader/ContactHeader"
import axios from "axios"
import { showNotification } from "@mantine/notifications"

const ContactPage: NextPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailTouched, setEmailTouched] = useState(false)
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [messageTouched, setMessageTouched] = useState(false)
    const [valid, setValid] = useState(false)
    const [touched, setTouched] = useState(false)

    useEffect(() => { 
        setTouched(Boolean(name.length || email.length || phone.length || message.length)); 
        setValid(Boolean(name.length && email.length && email.includes('@' && '.') && message.length)) 
    },[name, email, phone, message])

    useEffect(() => {
        if(email.length) setEmailTouched(true)
    },[email])

    useEffect(() => {
        if(message.length) setMessageTouched(true)
    },[message])

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(valid) {
            try{
                const body = { name, email, phone, message };
                await axios.post(process.env.NEXT_PUBLIC_LAMBDA_CONTACT_URL!, body)
                showNotification({ 
                    title: 'Request Submitted', 
                    message: "I'll get back to you with a response as soon as possible!", 
                    color: 'green' 
                })
                setName('')
                setEmail('')
                setPhone('')
                setMessage('')
                setEmailTouched(false)
                setMessageTouched(false)
                setValid(false)
                setTouched(false)
            }catch(err){
                console.error(err)
                showNotification({ 
                    title: 'Something went wrong', 
                    message: 'Could not process request at this time. Please try email, LinkedIn, etc. instead.', 
                    color: 'red' 
                })
            }
        }
    }

    return (
        <div className={styles.container}> 
            <ContactHeader/>
            <main className={styles.main}>
                <section className={styles.left}>
                    <div className={styles.leftContent}>
                        <h3 className={styles.subtitle}>Let&apos;s get in Touch</h3>
                        <p className={styles.text}>Have a question? Interested in working together?</p>
                        <p className={styles.text}>Submit a message and I&apos;ll get back to you as soon as possible!</p>
                    </div>
                </section>
                <section className={styles.right}>
                    <form className={styles.form}>
                        <TextInput 
                            label={'Name'} 
                            className={styles.input} 
                            value={name} 
                            setValue={setName}
                        />
                        <TextInput 
                            label={'Email'} 
                            className={styles.input} 
                            type={'email'} 
                            value={email} 
                            error={emailTouched && !email.includes('@' && '.')}
                            setValue={setEmail}
                        />
                        <TextInput 
                            label={'Phone'} 
                            className={styles.input}
                            value={phone}
                            setValue={setPhone}
                        />
                        <TextArea 
                            label={'Message'} 
                            className={styles.message}
                            value={message}
                            error={messageTouched && !message.length}
                            setValue={setMessage}
                        />
                        <ButtonFilled 
                            hoverScale={valid ? 1.03 : 1}
                            style={{ 
                                height: 40, 
                                width: '100%', 
                                opacity: !valid && touched ? .6 : 1 
                            }}
                            onClick={handleSubmit}
                            disabled={!valid} 
                        >Submit</ButtonFilled>
                    </form>
                </section>
            </main>
            <Modal/>
        </div>
    )
}

export default ContactPage;