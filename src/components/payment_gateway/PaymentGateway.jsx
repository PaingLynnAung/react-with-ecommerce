import Footer from "../static_content/Footer";
import {MdKeyboardArrowRight} from 'react-icons/md'

const PaymentGateway = () => {
    return (
        <>
            <div className="p-[3em]">
            <div className="">
                <h1 className="font-extrabold text-4xl">Payment gateway</h1>
                <span className="flex items-center font-semibold mt-1"><MdKeyboardArrowRight/>Paymentgateway</span>
            </div>
            <div className="flex flex-col gap-3 mt-[2em]">
                <span>Payment gateway only applicable for production build.</span>
                <button className="font-bold text-xl w-[9em] h-[2em] text-white bg-black">Explore More</button>
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default PaymentGateway;