import { ReactNode } from "react"


type Props ={
    children: ReactNode
}

const DesktopContainer:React.FC<Props> = ({children}) => {

    return(
        <div className="lg:w-[770px] lg:ml-[70px]">
            {children}
        </div>
    )
}

export default DesktopContainer