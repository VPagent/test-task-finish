import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import {Item} from '../../globalState/state'
import AddressBox from '../AddressBox/AddressBox';
import { defaultTheme } from './theme';


const PRIVATE_KEY = "AIzaSyDASi86Rpx-yYzi7Fnie3m2ajJ5dotZ_FM"

type Props = {
    item:Item
}

const MobileMap:React.FC<Props> = ({item}:Props) => {
    const {location, name, address, phone, email} = item
    const containerStyle = {
        width: '300px',
        height: '150px',
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
    };
    const defaultOptions= {
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl:false,
        streetViewControl: false,  
        rotateControl:false,
        clickableIcons: false,
        keyboardShortcuts: false,
        scrollwheel: false,
        disabledDoubleClickZoom: true,
        fullScreenControl: false,
        disableDefaultUI: true,
        styles: defaultTheme
        
    }
      
    const center = {
        lat: location.lat,
        lng: location.long
    };
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: PRIVATE_KEY
    })

    return(
        <>
        
        <div className='rounded-md py-5 lg:fixed top-[10px] right-[90px]'>
            {isLoaded && 
                <>
                <div className='py-[30px] px-[50px] bg-[#4d6059] rounded-t-md w-[300px] h-[50%] text-[#F5F5F5]'>
                    <p className='text-[16px] font-bold'>Department name:<br/> {name}.</p>
                    <AddressBox address={address} inMap={true} />
                    <p className='text-[#ffffff]/70'>{phone}</p>
                    <p className='text-[#ffffff]/70'>{email}</p>
                </div>
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={2}
                options={defaultOptions}
                >
                    <Marker position={center}/>
                </GoogleMap>
                </>}
        </div>
        </>
    )
}

export default MobileMap