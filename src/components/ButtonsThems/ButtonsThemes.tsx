import React,{FC} from 'react';
import './buttonsTheme.scss';
import ItemButton from "./ItemButton";


const ButtonsThem: FC = () => {
    const PRIMARY = {
        text: 'PRIMARY BUTTON',
        color_text: '#FFFFFF',
        bg: '#51CBCE'
    }
    const SECONDARY = {
        text: 'SECONDARY BUTTON',
        color_text: '#FFFFFF',
        bg: '#3B4443'
    }
    const TERTIARY = {
        text: 'TERTIARY BUTTON',
        color_text: '#51CBCE',
        bg: '#FFFFFF'
    }
    const DISABLE = {
        text: 'DISABLE BUTTON',
        color_text: 'rgba(59, 68, 67, 0.1)',
        bg: '#F1F1F1'
    }
    return (
        <div className='btn-container'>
            <ItemButton {...PRIMARY}/>
            <ItemButton {...SECONDARY}/>
            <ItemButton {...TERTIARY}/>
            <ItemButton {...DISABLE}/>
        </div>
    );
};

export default ButtonsThem;