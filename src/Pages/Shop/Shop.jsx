import * as React from 'react';
import CakeContainer from '../../Components/CakeContainer';
import IceCreamContainer from '../../Components/IceCreamContainer';

function Shop() {
    return (
        <div className="App">
            <h1> Shop </h1><br/>
            <CakeContainer/><br/>
            <IceCreamContainer/>
        </div>
    );
}

export default Shop;