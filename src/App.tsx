import useModalStore from "./store/useModalStore";
import useCustomerStore from "./store/useCustomerStore";


function App() {

    const {isWelcomeModal,setIsWelcomeModal} = useModalStore()

    const {customers,setCustomers} = useCustomerStore()

    console.log(customers)

    const handleCustomers = ()=> {
        setCustomers([{
            id: 1,
            name: "fdf"
        }])
    }

const handleShowModal = ()=> {
        setIsWelcomeModal(true)
}
  return (
    <>
    <button onClick={handleShowModal}>Show Welcom Modal</button>
        {isWelcomeModal && (
            <div style={{
                position: "fixed",
                height: "100vh",
                width: "100%",
                display: "flex",
                justifySelf: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.6)",

            }}>
                <div style={{
                    width: "300px",
                    height: "500px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    color: "gray"
                }}>
                    <span>Welcome To My Store</span>
                    <span style={{
                    color: "red"
                    }} onClick={()=> setIsWelcomeModal(false)}>close</span>
                </div>
            </div>
        )}

        <button onClick={handleCustomers} >add Customers</button>
    </>
  )
}

export default App
