import {Item} from '../../globalState/state'


type Props = { 
    employment: Item["employment_type"],
    benefits: Item["benefits"]
}

const AdditionalInfo:React.FC<Props> = ({employment, benefits}) => {

    return(
        <>
        <div>
            <p className='mt-[15px] text-[#38415d]/80 lg:text-[#3A4562]'>Employment type</p>
            <ul className="flex justify-self-start py-2.5 ">{employment.map(elem => 
                <li key={elem} className="pt-4 pb-4 pl-8 pr-4 bg-[#A1B1DB]/30 rounded-lg mr-2.5 last:mr-0 border border-[#a1b1db]/30 lg:w-[222px] lg:px-4 lg:text-center"><p className='text-[#55699E] font-bold'>{elem}</p></li>)}
            </ul>
        </div>
        <div>
            <p className='mt-[15px]  text-[#38415d]/80 lg:text-[#3A4562]'>Benefits</p>
            <ul className="flex justify-self-start py-2.5">{benefits.map(elem => 
                <li key={elem} className="pt-4 pb-4 pl-4 pr-4 bg-[#FFCF00]/20 rounded-lg mr-2.5 last:mr-0 border border-[#FFCF00] lg:w-[222px] lg:text-center"><p className='text-[#988B49] font-bold'>{elem}</p></li>)}
            </ul>
        </div>
        </>
        
    )
}

export default AdditionalInfo