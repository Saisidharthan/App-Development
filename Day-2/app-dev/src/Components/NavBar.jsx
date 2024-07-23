import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        <div className="w-full flex bg-black text-white justify-between items-center h-20 ">
            <div className="text-xl text-white ml-5">
                <h2 className="">Shoe Cart</h2>
            </div>
            <div className="flex items-center text-center gap-5 mr-20 cursor-pointer">
                <div className="text-white text-xl rounded border-2 border-sky-500 w-24 h-10">
                    <Link to='/login' className="">Login</Link>
                </div>
                <div className="text-white text-xl rounded border-2 border-sky-500 w-24 h-10 ">
                    <Link to='/Register'>Register</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar