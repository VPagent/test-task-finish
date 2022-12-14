import { FiStar } from 'react-icons/fi';
import { BsShareFill } from 'react-icons/bs';
import { FiBookmark } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive'
import { useEffect} from 'react';
import store from '../../globalState/state';
import {Item} from '../../globalState/state'

type Props = {
    inSingle?: boolean,
    handler?: Function,
    isAdded?: boolean,
    id: Item["id"]
    
}
const LOCAL_KEY:string = "added"

const ControlsSingle:React.FC<Props> = ({inSingle, id}) => {
    const isDesktop = useMediaQuery({query: '(min-width: 1200px)'})
    const [added, setAdded] = store.useGlobalState('added');
    const isAdded = added?.some(elem => elem === id)
    const storage = JSON.parse(localStorage.getItem(LOCAL_KEY) as string)
    
    useEffect(() => {
        if(storage?.length >= 0){ 
            setAdded(JSON.parse(localStorage.getItem(LOCAL_KEY) as string))
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if(added){
            localStorage.setItem(LOCAL_KEY, JSON.stringify(added))
        }
    }, [added])

    const handleClickAdd = () => {
        if(!added){
            setAdded([id])
        }
        if(added){
            if(isAdded){
                setAdded((prev) =>{ return prev ? prev.filter(elem => elem !== id) : prev})
                return
            }
            if(added.length > 0){
                setAdded((prev) => {return prev ? [...prev, id] : prev})
            }
            if(added.length <= 0){
                setAdded([id])
            }
        }
    }
    return(
        <div className={`flex ${!isDesktop && "pt-[24px] pb-[32px]"} ${!inSingle && "ml-auto"}`}>
            <span onClick={handleClickAdd} className={`flex items-center ${inSingle ? "mr-9" : "mr-0"} cursor-pointer`}>
                {inSingle && (isDesktop ?
                    <FiBookmark 
                        color='#70778B' 
                        fill={isAdded ? '#70778B' : 'transparent'} 
                        size={20} 
                        className='mr-[11px] lg:mr-[8px]'
                    /> 
                    : <FiStar 
                        className='mr-[11px]'
                        fill={isAdded ? '#FFFF00' : 'transparent'}
                    />)}
                {isDesktop && !inSingle && 
                    <FiBookmark 
                        color='#70778B' 
                        fill={isAdded ? '#70778B' : 'transparent'}
                        size={20}
                    />}
                {inSingle && "Save to my list"}
            </span>
            {inSingle && 
            <span className='flex items-center'>
                <BsShareFill 
                    color='#70778B' 
                    className='mr-[11px] lg:mr-[8px]'
                />
                Share
            </span>}           
        </div>
    )
}


export default ControlsSingle