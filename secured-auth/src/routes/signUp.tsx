// import { signUpSchema, type signUpData } from "./validator";
// import { createFileRoute } from '@tanstack/react-router'
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useState } from "react";


// export const Route = createFileRoute('/signUp')({
//   component: signUp,
// })

// function signUp() {

//     const {
//             reset,
//             register,
//             formState: { errors }
//         } = useForm<signUpData>({
//             resolver: zodResolver(signUpSchema)
//         });
    
//         const onSubmit = (data: signUpData) => {
//             console.log(data);
//             reset();
//         };
    
//         const [error, setError] = useState<string | null>(null)
//         const [signUpData, setSignUpData] = useState({
//             username: '',
//             email: '',
//             password: '',
//             confirmPassword: '',
//         })
    
//         // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         //     const { name, value } = e.target
//         //     setSignUpData((prev) => ({...prev,[name]: value}))
//         // }

//         // const handleSubmit(onSubmit: (data: signUpData) => void):
//         // import("react").FormEventHandler<HTMLFormElement> | undefined {
//         //     throw new Error("Function not implemented.");
//         // }
    
//         if (
//             signUpData.username === '' ||
//             signUpData.email === '' ||
//             signUpData.password === '' ||
//             signUpData.confirmPassword === '' 
            
//         ) {
    
//             setError('All fields are required!');
//             return;
//         } else if (signUpData.password !== signUpData.confirmPassword) {
//             setError('Passwords do not match!');
//             return;
//         } else {
//             setError(null);
//             console.log('You have successfully signed up:', signUpData);
//             // reset();
//             // Proceed with sign-up
//         }

//          // set these functions
//     // const [error, setError] = useState()
//     // throw new error when password is incorect, when a field is empty,
    
//     // const [isLoading, setIsLoading] = useState()
//     // let it display an icon(like an hour glass) rolling on screen

//     return (
//       <section className="flex items-center justify-center bg-gray-300">
//         <div className="w-120 h-145 p-3 m-10 bg-white rounded-lg shadow-md flex flex-col items-center">
//             <h1 className='text-5xl font-bold text-center text-[#3d3d55] m-4 p-3'>Sign Up</h1>

//             {error && (
//                 <p className='text-sm bg-red-50 font-medium px-4 py-1 text-rose-500'>{error}</p>
//             )}

//             <form className='flex flex-col w-full mt-4'
//                 onSubmit={handleSubmit(onSubmit)}
//             >

//                 <div className='flex flex-col g-2 grid mb-4'>
//                 <label htmlFor="username">Username</label>
//                 {/* <input 
//                     type="text" 
//                     {...register("username")}
//                     name="username" 
//                     value={signUpData.username}
//                     onChange={handleChange}
//                     placeholder='Enter your username' 
//                     className="border border-gray-300 p-2 rounded-md w-full bg-gray-50 mt-1" 
//                     /> */}

//                     {errors.username && <span className='text-sm text-red-500'>
//                         {errors.username.message}</span>}
//                 </div>

//                 <div className='flex flex-col g-2 grid mb-4'>
//                 <label htmlFor="email">Email</label>
//                 {/* <input 
//                     type="email" 
//                     {...register("email")}
//                     name="email"
//                     value={signUpData.email}
//                     onChange={handleChange}
//                     placeholder='Enter your email'
//                     className="border border-gray-300 p-2 rounded-md w-full bg-gray-50 mt-1" 
//                     /> */}

//                     {errors.email && <span className='text-sm text-red-500'>
//                         {errors.email.message}</span>}
//                 </div>

//                 <div className='grid mb-4'>
//                 <label htmlFor="password">Password</label>
//                 {/* <input 
//                     type="password" 
//                     {...register("password")}
//                     name="password" 
//                     value={signUpData.password}
//                     onChange={handleChange}
//                     placeholder='Enter your password'
//                     className="border border-gray-300 p-2 rounded-md w-full bg-gray-50 mt-1" 
//                     /> */}

//                     {errors.password && <span className='txt-sm text-red-500'>
//                         {errors.password.message}</span>}
//                 </div>

//                 <div className='grid mb-1'>
//                 <label htmlFor="confirm-password">Confirm Password</label>
//                 {/* <input 
//                     type="password" 
//                     {...register("confirmPassword")}
//                     name="confirmPassword" 
//                     value={signUpData.confirmPassword}
//                     onChange={handleChange}
//                     placeholder='Confirm your password'
//                     className="border border-gray-300 p-2 rounded-md w-full bg-gray-50 mt-1" 
//                     /> */}

//                     {errors.confirmPassword && <span className='text-sm text-red-500'>
//                         {errors.confirmPassword.message}</span>}
//                 </div>

//                 <div className='cursor-pointer'>
//                 <p className='text-sm text-[#3d3d55]-700 font-medium m-0'><a href="#">Forgot password?</a></p>
//                 </div>

//                 <button 
//                 type='submit'
//                 className='text-white text-sm font-medium w-full h-10 mt-4 text-sm 
//                         rounded-md bg-[#3d3d55] hover:bg-gray-500
//                         cursor-pointer'>Sign up</button>
//             </form>
//         </div>
//     </section>
// )
// }