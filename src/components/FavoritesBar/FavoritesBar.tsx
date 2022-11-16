import { FaStar } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';


const FavoritesBar:React.FC = () => {

    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const random = Math.floor(Math.random() * 6)
    const finRandom = random === 0 ? 2 : random
    const fakeArr = Array(finRandom).fill("j")
    

    return(
        <div className='flex lg:w-[100px] justify-start'>
            {fakeArr.map(elem => <FaStar key={Math.random()} size={isDesktop ? 18 :10} color={"#38415D"}/>)}
        </div>
    )
}

export default FavoritesBar