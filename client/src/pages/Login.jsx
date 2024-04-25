import { useContext, useState } from "react"
import Fileds from "../components/Fileds"
import { Link } from "react-router-dom"
import { PATHS } from "../utils/constants"
import { AuthContext } from "../context/AuthContextProvider"
import { GiShoppingCart } from "react-icons/gi"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { handleLogin } = useContext(AuthContext);

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const values = {
            email,
            password
        }
        await handleLogin(values)
    }

    return (
        <div className='login-up-container flex h-screen '>
            <div className="flex flex-col gap-4 justify-center p-4 max-w-[500px] w-full h-full px-4">
                <div className="text-2xl font-medium">
                    Login to
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
                    <button className="bg-[purple] px-3 py-2 text-white rounded-md w-full mt-4" type="submit">Submit</button>
                </form>
                <div className="text-center">
                    <span className="mr-2">Don't have an account?</span>
                    <Link to={PATHS.SIGNUP} className="text-[purple]">Sign Up</Link>
                </div>
            </div>
            <div className="flex-1 bg-[purple] opacity-5x">

            </div>
        </div>
    )
}
export default Login