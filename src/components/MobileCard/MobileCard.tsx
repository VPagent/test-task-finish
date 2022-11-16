import FavoritesBar from '../FavoritesBar/FavoritesBar';
// import {convertMs} from "../../helpers/date/convert"
import { useNavigate } from 'react-router-dom';
import store from '../../globalState/state';
import { Item } from '../../globalState/state';
import PostedDateBox from '../PostedDateBox/PostedDateBox';
import { useMediaQuery } from 'react-responsive';
import AddressBox from '../AddressBox/AddressBox';
import ControlsSingle from '../ControlsSingle/ControlsSingle';
import cutTitle from '../../helpers/editText/cutTitle';
import DepartmentBox from '../DepartmentBox/DepartmentBox';
import { useEffect, useState } from 'react';

type Props = {
  elem: Item;
};

const MobileCard: React.FC<Props> = ({ elem }: Props) => {
  const [singleItem, setSingleItem] = store.useGlobalState('singleItem');
  const navigate = useNavigate();
  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

  const handleClick = () => {
    setSingleItem(elem);
    navigate(`${elem.id}`);
  };

  return (
    <li key={elem.id} className="card">
      <div className="imgBox">
        <img src={elem.pictures[1]} alt={elem.name} className="img"/>
      </div>
      <div className="w-72 lg:w-[650px]">
          <div className="flex justify-between items-center">
            {!isDesktop && <FavoritesBar />}
            {!isDesktop && <PostedDateBox createdAt={elem.createdAt} big={false} />}
          </div>
          <h2 className="cardTitle" onClick={handleClick}>
            {isDesktop ? elem.title : cutTitle(elem.title)}
          </h2>
          <DepartmentBox name={elem.name}/>
          <AddressBox address={elem.address} />
      </div>
        <div className='lg:ml-auto lg:mr-[32px] lg:my-auto'>{isDesktop && <FavoritesBar  />}</div>
        <div className="flex flex-col  justify-between text-end">
          {isDesktop && <ControlsSingle inSingle={false} id={elem.id}/>}
          {isDesktop && <PostedDateBox createdAt={elem.createdAt} big={false} />}
        </div>
    </li>
  );
};

export default MobileCard;