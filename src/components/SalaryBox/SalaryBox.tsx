import {Item} from '../../globalState/state'
import { BiEuro } from 'react-icons/bi';
import { addZero } from "../../helpers/addZero/addZero"


type Props = {
    salary: Item["salary"]
}
const SalaryBox:React.FC<Props> = ({salary}) => {

    return(
        <p className="flex flex-col text-end lg:text-start lg:ml-[60px] lg:flex-col-reverse font-[18px] font-normal ">
            Brutto, per year<br/>
            <span className="flex items-center font-[20px] font-bold">
                <BiEuro />{addZero(salary)}
            </span>
        </p>
    )
}

export default SalaryBox