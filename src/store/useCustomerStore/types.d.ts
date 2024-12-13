interface ICustomerStore {
    customers: {
        id: number;
        name: string;
    }[]
    setCustomers: (customers: {id: number, name: string}[])=> void;
    removeCustomers: ()=> void;

}