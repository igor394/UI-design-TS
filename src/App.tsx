import React from 'react';
import './App.css';
// import Sidebar from "./components/sidebar/Sidebar";
// import ButtonsThemes from "./components/ButtonsThems/ButtonsThemes";
import SelectedButton from "./components/SelectedButton/SelectedButton";
import Checkbox from "./components/checkbox/Checkbox";
import ToggleCheckbox from "./components/toggleCheckbox/ToggleCheckbox";
import WrapperChat from "./components/todayChat/WrapperChat";
import CustomRanges from "./components/customRange/CustomRanges";

function App() {

    return (
        <div className='main'>
            {/*<Sidebar/>*/}
            {/*<ButtonsThemes/>*/}
            <div>
                <SelectedButton/>
                <div style={{display: 'flex'}}>
                    <Checkbox/>
                    <ToggleCheckbox/>
                </div>
            </div>
            <WrapperChat/>
            <CustomRanges/>
        </div>
    );
}

export default App;
