import { useContext, useState } from "react"
import Fileds from "../components/Fileds"
import { Link } from "react-router-dom"
import { PATHS } from "../utils/constants"
import { AuthContext } from "../context/AuthContextProvider"
import { GiShoppingCart } from "react-icons/gi";

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [isAdmin, setIsAdmin] = useState(false);
    const { handleSignUp } = useContext(AuthContext);

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleIsAdminChange = (e) => {
        setIsAdmin(e.target.checked);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const values = {
            email,
            password,
            name,
            isAdmin
        }
        await handleSignUp(values)
    }

    return (
        <div className='sign-up-container flex h-screen '>
            <div className="flex flex-col gap-4 justify-center p-4 max-w-[500px] w-full h-full px-4">
                <div className="text-2xl font-medium">
                    Sign Up
                </div>
                <div className="text-4xl font-semibold flex gap-2 items-center mb-10">
                    <GiShoppingCart size={40} /><span className="text-[purple]">Shop</span>Fizz
                </div>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <Fileds>
                        <label className="text-sm">E-mail</label>
                        <input className="border rounded-md p-2" type="text" value={email} onChange={handleEmailChange} placeholder="Eg: example@gmail.com" />
                    </Fileds>
                    <Fileds>
                        <label className="text-sm">Password</label>
                        <input className="border rounded-md p-2" type="password" value={password} onChange={handlePasswordChange} placeholder="*********" />
                    </Fileds>
                    <Fileds>
                        <label className="text-sm">Name</label>
                        <input className="border rounded-md p-2" type="text" value={name} onChange={handleNameChange} placeholder="Eg: Pushkar Deshpande" />
                    </Fileds>
                    <div className="flex gap-20">
                        <label className="text-sm">You want to be Seller</label>
                        <input className="" type="checkbox" checked={isAdmin} onChange={handleIsAdminChange} placeholder="Eg: Pushkar Deshpande" />
                    </div>
                    <button className="bg-[purple] px-3 py-2 text-white rounded-md w-full mt-4" type="submit">Submit</button>
                </form>
                <div className="text-center">
                    <span className="mr-2">Already have an account?</span>
                    <Link to={PATHS.LOGIN} className="text-[purple]">Login</Link>
                </div>
            </div>
            <div className="flex-1 bg-[purple] opacity-5x">

            </div>
        </div>
    )
}
export default SignUp