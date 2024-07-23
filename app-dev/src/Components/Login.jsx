import NavBar from "./NavBar"

const Login = () => {
  return (
    <div>
        <NavBar />
        <div className="items-center w-full h-[80vh] justify-center text-center flex text-black">

            <div className="w-[500px] h-[300px] flex text-center justify-center items-center border border-black mr-auto ml-auto" >
                <div className="flex flex-col gap-7 justify-between w-[350px]">
                    <label className="text-3xl text-black underline">Login</label>
                    <div className="flex gap-2 justify-between">
                        <label className="text-2xl font-semibold">Name : </label>
                        <input type="text" className="border border-black rounded-sm ml-9"></input>
                    </div>
                    <div className="flex gap-2 justify-between">
                        <label className="text-2xl font-semibold">Email : </label>
                        <input type="email" className="border border-black rounded-sm ml-10"></input>
                    </div>
                    <div className="flex gap-2 justify-between">
                        <label className="text-2xl font-semibold">Password : </label>
                        <input type="password" className="border border-black rounded-sm ml-3"></input>
                    </div>
                    <div className="flex gap-2 justify-between">
                        <input type="submit" className="border text-2xl border-red bg-black text-white w-full rounded-sm ml-3"></input>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Login