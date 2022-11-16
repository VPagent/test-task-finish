import React from 'react';
import {Item} from '../../globalState/state'
import CustomMarker from '../CustomMarker';
// import { ReactComponent as CustomMarker } from '../../images/CustomMarker.svg';

type Props = {
    address: Item["address"],
    inMap?: boolean
}

const AddressBox:React.FC<Props> = ({address, inMap}) => {

    return(

        <p className={`flex items-center mt-[8px] text-${inMap ? "[#E7EAF0]" : "[#878D9D]"} ${!inMap && "text-[12px]"} lg:text-[16px] font-normal`}>
            <CustomMarker className={`w-[13px] h-[19px] mr-[8px] ${inMap ? "fill-[#ffffff]/70" : "fill-[#888D9D]"}`} />
            {address}
        </p>
    )
}

export default AddressBox