import { cutText } from "../../helpers/editText/cutText"
import { devideText } from "../../helpers/editText/devideText"
import { BsFillSquareFill } from 'react-icons/bs';
import {Item} from '../../globalState/state'
import '../../index.css'

type Props = {
    description: Item["description"],
    title: string
}

const BenefitsList:React.FC<Props> = ({description, title}) => {

    return(
        <>
        <h3 className="secondaryTitle">{title}</h3>
        <ul className="list-square">
            {devideText(cutText(description, "Compensation & Benefits:")?.[1]).map(elem => 
                <li key={elem} className="flex items-center text-[#38415d]/80 lg:text-[#3A4562]">
                    <span>
                        <BsFillSquareFill size={6} color='rgba(56, 69, 100, 0.632594)' className='mr-[5px]'/>
                    </span>
                    {elem}
                </li>)}
        </ul> 
        </>
    )
}

export default BenefitsList