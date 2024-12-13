import {create} from "zustand";

const useCustomerStore = create<ICustomerStore>((set)=> ({
    customers: [],
    setCustomers: (value) => set({customers: value}),
    removeCustomers: ()=> set({customers: []}),
}))

export default useCustomerStore;