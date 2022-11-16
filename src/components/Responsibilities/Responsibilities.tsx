import { cutText } from "../../helpers/editText/cutText"
import {Item} from '../../globalState/state'


type Props = {
    description: Item["description"],
    title: string
}
const Responsibilities:React.FC<Props> = ({description, title}) => {

    return(
        <>
        <h3 className="secondaryTitle">{title}</h3>
        <p className="mainText">
            {cutText(description, "Responsopilities:", "Compensation & Benefits:")?.[0]}
        </p>
        </>
    )
}

export default Responsibilities