import {create} from "zustand"
import {persist} from "zustand/middleware";

const useCustomerStore = create(
    persist(
        (set) => ({
            customers: [],
            setCustomers: (value:  {
                id: number;
                name: string;
            }[]) => set({ customers: value }),
            removeCustomers: () => set({ customers: [] }),
        }),
        {
            name: "customer-storage",

        }
    )
);

export default useCustomerStore;