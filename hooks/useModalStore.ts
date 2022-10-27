import create from 'zustand'
import { getModalContent } from '../utils/modalContent'

export enum ModalType {
    Contact
}

interface ModalStore {
    visible: boolean
    title: string
    body: string
    setModal: (value: ModalType | null) => void
    reset: () => void
}

export const useModalStore = create<ModalStore>((set, get) => ({
    visible: false,
    title: '',
    body: '',
    setModal: type => {
        if(type !== null){
            const { body, title } = getModalContent(type)
            set({ visible: true, body, title })
        }else{
           get().reset()
        }
    },
    reset: () => set({
        visible: false,
        body: '',
        title: ''
    })
}))