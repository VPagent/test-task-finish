import { useMediaQuery } from 'react-responsive'
import {Item} from '../../globalState/state'

type Props = {
    pictures: Item["pictures"]
}

const AttachedImages:React.FC<Props> = ({pictures}) => {

    const isDesktop = useMediaQuery({query: '(min-width: 1200px)'})

    return(
        <div className='lg:mt-[86px] lg:mb-[97px]'>
            <h3 className="font-bold py-2.5 border-b border-gray-200">Attached images</h3>
            <div className="flex py-5">
                <img src={pictures[0]} alt="firstPicture" className="w-36 h-auto mr-2.5 rounded-md"/>
                <img src={pictures[1]} alt="secondPicture"className="w-36 h-auto rounded-md" />
                {isDesktop && <img src={pictures[2]} alt="secondPicture"className="w-36 h-auto ml-2.5 rounded-md" />}
            </div>
        </div>
    )
}

export default AttachedImages