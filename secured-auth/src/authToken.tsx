// import { useState } from "react"

const AuthToken = () => {


    // const [error, setError] = useState(null)
    // const [error, setError] = useState(null)
    // const [authtoken, setAuthtoken] = useState()
    // const [isLoading, setIsloading] = useState()
    
    return(
        <>
        <div className="flex flex-col m-2 bg-white">
            <h1 className="font-bold mb-3 text-2xl">Enter Authentication Code</h1>
            {/* no forget error message */}
            <div className="w-full gap-4 flex item-center ">
                <input type="text" className="w-20 h-20 text-hidden rounded-md text-center border border-gray-900">
                </input>
                <input type="text" className="w-20 h-20 text-hidden rounded-md text-center border border-gray-900">
                </input>
                <input type="text" className="w-20 h-20 text-hidden rounded-md text-center border border-gray-900">
                </input>
                <input type="text" className="w-20 h-20 text-hidden rounded-md text-center border border-gray-900">
                </input>
                <input type="text" className="w-20 h-20 text-hidden rounded-md text-center border border-gray-900">
                </input>
                <input type="text" className="w-20 h-20 text-hidden rounded-md text-center border border-gray-900">
                </input>
            </div>
            <a className="font-bold m-0" href="http://">Resend code?</a>
        </div>
        </>
    )
}

export default AuthToken