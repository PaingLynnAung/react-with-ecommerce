import { useEffect, useState } from "react";
import Footer from "../static_content/Footer";

const Contact = () => {
    const [submited,setSubmited] = useState(false)
    const [userInput,setUserInput] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [errorMsg,setErrorMsg] = useState(false)


    const submitedForm = e => {
        e.preventDefault();
        if(userInput.name.length==0||userInput.email.length==0||userInput.subject.length==0||userInput.message.length==0){
            setErrorMsg(true)
        }else setSubmited(true)
    }

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
    },[])

    return (
        <div className="sm:mt-[13em] lg:mt-[9em]">
            <div className="sm:p-[1em] md:p-[3em]">
                {!submited&&(
                    <>
                        <h1 className="font-bold text-xl">Fill Up a Form</h1>
                        {errorMsg&&<span className="text-red-500 font-semibold mt-3">Please fill all the blank!</span>}
                        <form onSubmit={(e)=>submitedForm(e)} className="mt-4">
                            <div className="flex flex-col gap-2">
                                <label className="font-bold" htmlFor="">Name</label>
                                <input onChange={(e)=>setUserInput({...userInput,name:e.target.value})} className="outline-none border-b-2 text-gray-400 font-semibold md:w-[28em]" type="text" name="" id="" placeholder="Entry your name here" />
                            </div>
                            <div className="flex flex-col gap-2 mt-6">
                                <label className="font-bold" htmlFor="">Email</label>
                                <input onChange={(e)=>setUserInput({...userInput,email:e.target.value})} className="outline-none border-b-2 text-gray-400 font-semibold md:w-[28em]" type="text" name="" id="" placeholder="Entry your email here" />
                            </div>
                            <div className="flex flex-col gap-2 mt-6">
                                <label className="font-bold" htmlFor="">Subject</label>
                                <input onChange={(e)=>setUserInput({...userInput,subject:e.target.value})} className="outline-none border-b-2 text-gray-400 font-semibold md:w-[28em]"  type="text" name="" id="" placeholder="Entry your subject here" />
                            </div>
                            <div className="flex flex-col gap-2 mt-6">
                                <label className="font-bold" htmlFor="">Message</label>
                                <textarea onChange={(e)=>setUserInput({...userInput,message:e.target.value})} className="outline-none border-b-2 text-gray-400 font-semibold md:w-[28em] resize-none" rows='3' type="text" name="" id="" placeholder="Entry your message here" />
                            </div>
                            <input className="bg-black font-bold text-white mt-5 w-[8em] h-[2.3em]" type="submit" value='Post' />
                        </form>
                    </>
                )}
                {submited&&
                    <p className="font-semibold text-green-500 tracking-[1px] w-[20em]">Thank you dear Guest. Your messages has been recevied successfully. Further details will sent to you by your email at example@gmail.com</p>
                }
            </div>
           <Footer/>
        </div>
    )
}

export default Contact;