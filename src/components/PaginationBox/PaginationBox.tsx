import { ReactEventHandler } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive'

type Props ={
    page: number,
    setPage: Function
}


const PaginationBox:React.FC<Props> = ({page, setPage}) => {

    const isDesktop = useMediaQuery({query: '(min-width: 1200px)'}) 

    const handleClick:ReactEventHandler = (e:React.MouseEvent<HTMLDivElement>) => {
        if (!(e.target instanceof HTMLElement)) return;
        const trigger = Number(e.target.textContent)
        if(e.target.textContent === "..."){
            return
        }
        if(e.target.id === "-"){
            if(!isDesktop){
                return
            }
            if(page === 1){
                return
            }
            setPage((prev: number) => prev - 1)
            return
        }
        if(e.target.id === "+"){
            if(!isDesktop){
                return
            }
            if(page === 20){
                return
            }
            setPage((prev: number) => prev + 1)
            return
        }
        setPage(trigger)
    }
    
    return(
        <div className="paginationBox" onClick={handleClick}>
   
            <div id="-" className="px-[10px] lg:px-[23px] border-r"><MdOutlineArrowBackIos className="pointer-events-none" color={isDesktop ? '#70778B' : '#ffffff'} /></div>

            {page >2 && <div className="pagBtn">1</div>}
            {page > 2 && <div className="pagBtn">{page >= 3 ? "..." : page - 2}</div>}
            {page >= 20 && <div className="pagBtn">{page -7}</div>}
            {page >= 19 && <div className="pagBtn">{page -6}</div>}
            {page >= 18 && <div className="pagBtn">{page -5}</div>}
            {page >= 17 && <div className="pagBtn">{page -4}</div>}
            {page >= 16 && <div className="pagBtn">{page -3}</div>}
            {page >14 && <div className="pagBtn">{page - 2}</div>}
            {page > 1 && <div className="pagBtn">{page - 1}</div>}
            <div className="pagBtn current">{page}</div>
            {page < 20 && <div className="pagBtn">{page + 1}</div>}
            {page < 19 && <div className="pagBtn">{page + 2}</div>}
            {page < 18 && <div className="pagBtn">{page + 3}</div>}
            {page < 17 && <div className="pagBtn">{page + 4}</div>}
            {page < 15 && <div className="pagBtn">{page >=14 ? 19 : "..."}</div>}
            {page < 16 && <div className="pagBtn">{20}</div>}
    
            <div id="+" className=" px-[10px] lg:px-[23px] border-l"><MdOutlineArrowForwardIos className="pointer-events-none" color={isDesktop ? '#70778B' : '#ffffff'} /></div>
           
        </div>
    )
}

export default PaginationBox