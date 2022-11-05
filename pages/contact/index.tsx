import type { NextPage } from "next"
import styles from '../../styles/Contact.module.css'
import Card from "../../components/cards/Card/Card"
import Line from "../../components/layout/line/Line"
import TextInput from "../../components/inputs/TextInput/TextInput"
import ButtonFilled from "../../components/buttons/ButtonFilled/ButtonFilled"
import TextArea from "../../components/inputs/TextArea/TextArea"
import { useEffect, useState } from "react"
import Modal from "../../components/modal/Modal"
import { ModalType, useModalStore } from "../../hooks/useModalStore"
import ContactHeader from "../../components/layout/headers/ContactHeader/ContactHeader"

const ContactPage: NextPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [valid, setValid] = useState(false)
    const [touched, setTouched] = useState(false)

    const setModal = useModalStore(store => store.setModal)
    const handlePhone = () => setModal(ModalType.Contact)

    useEffect(() => { 
        setTouched(Boolean(name.length || email.length || phone.length || message.length)); 
        setValid(Boolean(name.length && email.length && phone.length && message.length)) 
    },[name, email, phone, message])

    const handleSubmit = () => {
        if(valid){

        }
    }

    return (
        <div className={styles.container}> 
            <ContactHeader/>
            <main className={styles.main}>
                <section className={styles.left}>
                    <div className={styles.leftContent}>
                        <h3 className={styles.subtitle}>Let's get in Touch</h3>
                        <p className={styles.text}>Have a question? Interested in working together?</p>
                        <p className={styles.text}>Submit a message and I’ll get back to you as soon as possible!</p>
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