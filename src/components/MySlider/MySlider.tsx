import Slider from "react-slick";
import {Item} from '../../globalState/state'
import { useMediaQuery } from 'react-responsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
    pictures: Item["pictures"]
}

const MySlider:React.FC<Props> = ({pictures}) => {

    const isDesktop = useMediaQuery({query: '(min-width: 1200px)'})  

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };
    return (
        <>
        <h3 className="font-bold py-2.5 border-b border-gray-200 mb-[20px]">Attached images</h3>
        <Slider {...settings}>
            {pictures.map(elem => (
                <div key={elem}>
                <img src={elem} alt="firstPicture" className="w-36 rounded-md"/>
                </div>
            ))}                
        </Slider>
        </>
    )
}


export default MySlider