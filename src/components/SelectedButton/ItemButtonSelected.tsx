import React,{FC} from 'react';
import PropsSelected from "../../interface/selected";

const ItemButtonSelected: FC<PropsSelected> = (props: PropsSelected) => {

    return (
        <button className={'btn-selected ' + props.name}></button>
    );
};

export default ItemButtonSelected;