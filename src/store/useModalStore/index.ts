import {create} from  "zustand";

const useModalStore = create<IUseModal>((set)=>({
    isWelcomeModal: false,
    setIsWelcomeModal: (value:boolean)=> set({isWelcomeModal:value}),

    isPurchaseModal: false,
    setIsPurchaseModal: (value:boolean)=>set({isPurchaseModal:value}),
}))

export default useModalStore;