import React,{FC} from 'react';
import PropsButton from "../../interface";
const ItemButton: FC<PropsButton> = (props: PropsButton) => {
    return (
        <button style={{background: props.bg, color: props.color_text}}>{props.text}</button>
    );
};

export default ItemButton;