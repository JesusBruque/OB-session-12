import React, {useState} from 'react';
import PropTypes from 'prop-types';

import "./container.css";

const Square = () => {
    return (
        <div className='square'>

        </div>
    )
}


const Container = () => {
    return (
        <div>
            <Square></Square>
        </div>
    );
};


Container.propTypes = {

};


export default Container;
