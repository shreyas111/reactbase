import React from 'react';
import {buyCake} from '../Redux/Shop/Cake/CakeActions';
import {useSelector,useDispatch} from 'react-redux';

function CakeContainer() {
  const numberOfCakes=  useSelector(state => state.numberOfCakes)
  const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes - {numberOfCakes}</h2>
            <button onClick={()=> dispatch(buyCake())}> Buy Cake</button>
        </div>
    )
}


export default CakeContainer

