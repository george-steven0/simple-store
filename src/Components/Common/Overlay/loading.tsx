import { AiOutlineLoading3Quarters } from "react-icons/ai"; 
const Loading = () => {
    return ( 
        <div className="fixed z-50 top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-[rgba(0,0,0,0.4)] backdrop-blur-sm text-white">
            <span className="w-fit animate-spin text-5xl"><AiOutlineLoading3Quarters /></span>
        </div>
    );
}

export default Loading;