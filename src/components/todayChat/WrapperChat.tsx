import React, {useState, FC} from 'react';
import './wrapperChat.scss'
import OptionsButton from "./OptionsButton";

const WrapperChat:FC = () => {
    const [display, setDisplay] = useState<boolean>(false)
    const displayHandler = (): void => {
        setDisplay(prew => !prew)
    }
    const No1 = {
        name: 'Option N° 1'
    }
    const No2 = {
        name: 'Option N° 2'
    }
    const No3 = {
        name: 'Option N° 3'
    }
    return (
        <div className='chat-wrapper'>
            <div className='chat-container'>
                {display ?
                   <>
                        <div>
                            <span>How can we do for you today?</span>
                        </div>
                       <div className='btn-options-wrapper'>
                           <OptionsButton {...No1}/>
                           <OptionsButton {...No2}/>
                           <OptionsButton {...No3}/>
                       </div>

                        <div className='chat-input-group'>
                            <div> <button className='btn-chat' onClick={displayHandler}><img src="/images/chatBalloon.svg" alt=""/></button></div>
                            <div  >   <input className='chat-input' type="text" placeholder='Type here'/></div>
                        </div>
                   </> :
                    <button className='btn-chat' onClick={displayHandler}><img src="/images/chatBalloon.svg" alt=""/></button>}
            </div>
        </div>
    );
};

export default WrapperChat;