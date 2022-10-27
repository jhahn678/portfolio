import type { NextPage } from "next"
import Link from "next/link"
import styles from '../../styles/Contact.module.css'
import { IoLogoGithub, IoLogoLinkedin,  } from 'react-icons/io'
import { BsPhone, BsEnvelope } from 'react-icons/bs'
import IconButton from "../../components/buttons/IconButton/IconButton"
import PlanetSvg from "../../components/svg/PlanetSvg/PlanetSvg"
import Card from "../../components/cards/Card/Card"
import Line from "../../components/layout/line/Line"
import TextInput from "../../components/inputs/TextInput/TextInput"
import ButtonFilled from "../../components/buttons/ButtonFilled/ButtonFilled"
import TextArea from "../../components/inputs/TextArea/TextArea"
import { useEffect, useState } from "react"
import Modal from "../../components/modal/Modal"
import { ModalType, useModalStore } from "../../hooks/useModalStore"

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
            <header className={styles.header}>
                <Link href={'/'}><div><PlanetSvg className={styles.planet}/></div></Link>
                <h1 className={styles.headerText}>Contact Me</h1>
            </header>
            <div className={styles.iconButtonContainer}>
                <a href="https://github.com/jhahn678" target='_blank'>
                    <IconButton icon={<IoLogoGithub size={32} color={'var(--orangeLight)'}/>}/>
                </a>
                <a href="https://www.linkedin.com/in/julian-hahn-440527232/" target='_blank'>
                    <IconButton icon={<IoLogoLinkedin size={32} color={'var(--orangeLight)'}/>}/>
                </a>
                <IconButton icon={<BsPhone size={32} color={'var(--orangeLight)'}/>} onClick={handlePhone}/>
                <a href='mailto:jhahn678@yahoo.com'>
                    <IconButton icon={<BsEnvelope size={32} color={'var(--orangeLight)'}/>}/>
                </a>
            </div>
            <section className={styles.left}>
                <Card className={styles.card}>
                    <h3 className={styles.cardHeader}>Let's get in Touch</h3>
                    <Line height={4} width={'40%'} mt={24} mb={16}/>
                    <p className={styles.cardText}>Have a question? Interested in working together?</p>
                    <Line height={4} width={'70%'} mt={24} mb={16}/>
                    <p className={styles.cardText}>Submit a message and I’ll get back to you as soon as possible!</p>
                </Card>
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
            <Modal/>
        </div>
    )
}

export default ContactPage;