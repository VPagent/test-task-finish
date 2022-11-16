import { Routes, Route } from "react-router-dom"
import HomePage from "../../pages/HomePage/HomePage"
import SingleItemPage from "../../pages/SingleItemPage/SingleItemPage"


const ClientRoutes:React.FC = () => {

    return(
        <Routes>
            <Route path="/" element={<HomePage /> }/>
            <Route path="/:itemId" element={<SingleItemPage />} />
        </Routes>
    )
}


export default ClientRoutes