import React, {FC} from 'react';
import './selectedButton.scss';
import ItemButtonSelected from "./ItemButtonSelected";

const ButtonsThem: FC = () => {
    const selected = {
        name: 'selected'
    }
    const unselected = {
        name: 'unselected'
    }
    const unavailable = {
        name: 'unavailable'
    }
    return (
        <div className='btn-container-selected'>
            <ItemButtonSelected {...selected}/>
            <ItemButtonSelected {...unselected}/>
            <ItemButtonSelected {...unavailable}/>
        </div>
    );
};

export default ButtonsThem;