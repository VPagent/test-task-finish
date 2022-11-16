import { useEffect, useState } from "react"
import Container from "../../components/Container/Container"
import ItemsList from "../../components/ItemsList/ItemsList"
import PaginationBox from "../../components/PaginationBox/PaginationBox"
import store from "../../globalState/state"
import { getAllItems } from "../../services/API"




const HomePage:React.FC = () => {

    const [items, setItems] = store.useGlobalState("items")
    const [page, setPage] = useState<number>(1)
    
    useEffect(() => {
        try{
            getAllItems(page).then(res => {setItems(res)})
        }catch(error:any){console.log(error.message)}
    }, [page, setItems])

    return(
        <section className="pt-[20px] pb-[64px] bg-[#E6E9F2]">
            <Container>
                <ItemsList items={items || null}/>
                <PaginationBox page={page} setPage={setPage}/>
            </Container>
        </section>
    )
}


export default HomePage
