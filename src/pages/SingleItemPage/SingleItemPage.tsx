import Container from "../../components/Container/Container"
import ControlsSingle from "../../components/ControlsSingle/ControlsSingle"
import store from "../../globalState/state"
import MobileMap from "../../components/MobileMap/MobileMap"
import ApplyNowBtn from "../../components/ApplyNowBtn/ApplyNowBtn"
import { useMediaQuery } from 'react-responsive'
import ReturnBtn from "../../components/ReturnBtn/ReturnBtn"
import DesktopContainer from "../../components/DesktopContainer/DesktopContainer"
import SalaryBox from "../../components/SalaryBox/SalaryBox"
import { cutText } from "../../helpers/editText/cutText";
import AttachedImages from "../../components/AttachedImages/AttachedImages";
import AdditionalInfo from "../../components/AdditionalInfo/AdditionalInfo";
import PostedDateBox from "../../components/PostedDateBox/PostedDateBox";
import MySlider from "../../components/MySlider/MySlider";
import { useEffect } from "react";
import { useParams } from 'react-router-dom'
import BenefitsList from "../../components/BenefitsList/BenefitsList";
import Responsibilities from "../../components/Responsibilities/Responsibilities"


const SingleItemPage:React.FC = ():JSX.Element => {
    const [items] = store.useGlobalState("items")
    const [singleItem, setSingleItem]= store.useGlobalState("singleItem")
    const isDesktop = useMediaQuery({query: '(min-width: 1200px)'})      
    const {itemId} = useParams()

    useEffect(() => {
        if(!singleItem){
            const currentItem = items?.find(elem => elem.id === itemId)
            setSingleItem(currentItem || null)
        }
    }, [itemId, setSingleItem, items, singleItem])

    return(   
        <>
        {singleItem && <>
        <section>
            <Container>
                <DesktopContainer>
                    <header className="header">
                        <h1 className="text-3xl font-bold ">Jobs details</h1>
                        {isDesktop && <ControlsSingle  id={singleItem.id} inSingle={true}/>}
                    </header>
                    {isDesktop && <ApplyNowBtn />}
                </DesktopContainer>
            </Container>
        </section>
        <section className="pb-[86px] text-[#3A4562]">
            <Container>
                <DesktopContainer>
                    {!isDesktop && <ControlsSingle id={singleItem.id} inSingle={true}/>}
                    <div className="flex justify-between items-center lg:pt-[32px]">
                        <h2 className="text-2xl font-bold lg:w-[500px]">{singleItem.title}</h2>
                        {isDesktop && <SalaryBox salary={singleItem.salary}/>}
                    </div>
                    <div className="flex justify-between items-center lg:py-[7px]">
                        <PostedDateBox createdAt={singleItem.createdAt} big={true}/>
                        {!isDesktop && <SalaryBox salary={singleItem.salary}/>}
                    </div>
                    <p className="mainText pt-[14px] lg:py-[7px]">{cutText(singleItem.description, "Responsopilities")?.[0]}</p>
                    <Responsibilities description={singleItem.description} title={"Responsibilities"}/>
                    <BenefitsList description={singleItem.description} title={'Compensation & Benefits:'} />
                    <div className=" flex justify-self-start mr-auto">
                        <ApplyNowBtn />
                    </div>
                </DesktopContainer>
            </Container>
        </section>
        <section className="pb-[60px] text-[#3A4562]">
            <Container>
                <DesktopContainer>
                    {!isDesktop && <MySlider pictures={singleItem.pictures} />}
                    <h3 className="borderedTitle">Additional info</h3>
                    <AdditionalInfo employment={singleItem.employment_type} benefits={singleItem.benefits}/>
                    {isDesktop && <AttachedImages pictures={singleItem.pictures} />}
                    {!isDesktop && <h3 className="borderedTitle">Contacts</h3>}
                    <MobileMap item={singleItem} />
                </DesktopContainer>
                <ReturnBtn />
            </Container>
        </section></>}
        </>
    )
}

export default SingleItemPage