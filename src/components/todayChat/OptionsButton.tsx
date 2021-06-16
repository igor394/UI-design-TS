import React,{FC} from 'react';
import OptionsChat from "../../interface/optionsChat";

const OptionsButton: FC<OptionsChat> = ({name}: OptionsChat) => {
    return (
        <div style={{marginBottom: '5px'}}>
            <button className='btn-options'>
                {name}
            </button>
        </div>
    );
};

export default OptionsButton;