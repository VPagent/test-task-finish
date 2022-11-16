import {useNavigate} from 'react-router-dom'
import { MdOutlineArrowBackIos } from 'react-icons/md';


const ReturnBtn:React.FC = () => {
    
    const navigate = useNavigate()

    return(
        <button onClick={() => navigate("/")}className='flex px-[26px] py-[18px] bg-[#d3cfcf] rounded-md mr-auto ml-auto items-center lg:ml-0'>
            <MdOutlineArrowBackIos color="#384564" size={19}/>
            <p className='text-[#384564] text-[12px] font-semibold uppercase'>Return to job board</p>
        </button>
    )
}

export default ReturnBtn