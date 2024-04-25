import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContextProvider"
import ProductsForm from "../components/products/ProductsForm";
import Modal from "../components/custom/Modal";



const Home = () => {
    const { handleLogout } = useContext(AuthContext);
    const [openProductFormModal, setProductFormModal] = useState(false);
    const handleOpenProductFormModal = () =>{
        setProductFormModal(true)
    }

    const handleCloseProductFormModal = () => {
        setProductFormModal(false)
    }

    return (
        <div className="">
            <div className="">
                Home
                <button onClick={handleLogout}>Logout</button>
            </div>
            <Modal 
                openModal={openProductFormModal}
                handleOpenModal={handleOpenProductFormModal}
                handleCloseModal={handleCloseProductFormModal}
                modalTitle={"Add Product"}
                trigger={
                    <button className="px-3 py-2 bg-[purple] rounded-md text-white" onClick={handleOpenProductFormModal}>Add Product</button>
                }
            >
                <ProductsForm />
            </Modal>
            
        </div>
    )
}
export default Home