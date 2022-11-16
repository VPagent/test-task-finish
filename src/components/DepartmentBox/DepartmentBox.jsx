import {Item} from '../../globalState/state'

type Props = {
    name: Item["name"]
}

const DepartmentBox:React.FC<Props> = ({name}) => {

    return(
        <p className="text-[12px] lg:text-[16px] font-normal mt-[5px] lg:mt-[8px] text-[#878D9D]">Department name &#8226; {name}</p>
    )
}

export default DepartmentBox