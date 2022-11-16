import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const Container:React.FC<Props>  = ({children}:Props) =>{

    return(
        <div className="mainContainer">
            {children}
        </div>
    )
}


export default Container