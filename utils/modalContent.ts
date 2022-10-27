export enum ModalType {
    Contact
}

export const getModalContent = (type: ModalType): { title: string, body: string } => {
    switch(type){
        case ModalType.Contact:
            return {
                title: "Contact by phone",
                body: "+1 717-460-6689 • Available to speak 8am - 8pm EST"
            }
        default:
            return {
                title: '',
                body: ''
            }
    }
}