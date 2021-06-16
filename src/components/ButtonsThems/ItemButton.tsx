import React,{FC} from 'react';
import PropsButton from "../../interface/themes";
const ItemButton: FC<PropsButton> = (props: PropsButton) => {
    return (
        <button className='btn-theme' style={{background: props.bg, color: props.color_text}}>{props.text}</button>
    );
};

export default ItemButton;