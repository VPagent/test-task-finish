import { getPostedDate } from "../../helpers/date/getPostedDate/getPostedDate"
import {Item} from '../../globalState/state'


type Props = {
    createdAt: Item["createdAt"],
    big: boolean
}

const PostedDateBox:React.FC<Props> = ({createdAt, big}) => {

    return(
        <p className={`text-xs text-[#38415D]/30 text-[13px] font-light lg:text-[${big? "18px" : "16px"}] lg:font-normal`}>
            Posted {getPostedDate(createdAt)} ago
        </p>
    )
}


export default PostedDateBox