import React, {FC, MouseEvent} from 'react';
import './sidebar.scss'
import {ReactComponent as CampaignsLogo} from '../../images/default/Campaigns.svg';
import {ReactComponent as SequencesLogo} from '../../images/default/Sequences.svg';
import {ReactComponent as ProspectsLogo} from '../../images/default/Prospects.svg';
import {ReactComponent as IntegrationsLogo} from '../../images/default/Integrations.svg';
import {ReactComponent as BlacklistLogo} from '../../images/default/Blacklist.svg';
import {ReactComponent as SettingsLogo} from '../../images/default/Settings.svg';
import {ReactComponent as AccountLogo} from '../../images/default/Account.svg';


const Sidebar: FC = () => {

    const pressedHandler = (event: MouseEvent<HTMLDivElement>): void => {
        let div = Array.from(document.getElementsByClassName('active'))
        console.log(div.map(i=> i.classList.remove('active')))
        event.currentTarget.classList.add('active')
    }

    return (
        <div className='sidebar'>
            <div>
                <div className="first-btn">
                    <div>
                        <img src='images/Logo.svg' alt=""/>
                    </div>
                </div>
                <div className="top-btn" onClick={pressedHandler} id='campaigns'>
                    <div>
                        <CampaignsLogo/>
                        <span>Campaigns</span>
                    </div>
                </div>
                <div className="top-btn" onClick={pressedHandler} id='sequences'>
                    <div>
                        <SequencesLogo/>
                        <span>Sequences</span>
                    </div>
                </div>

                <div className="top-btn" onClick={pressedHandler} id='prospects'>
                    <div>
                        <ProspectsLogo/>
                        <span>Prospects</span>
                    </div>
                </div>
                <div className="top-btn" onClick={pressedHandler} id='integrations'>
                    <div>
                        <IntegrationsLogo/>
                        <span>Integrations</span>
                    </div>
                </div>
                <div className="top-btn" onClick={pressedHandler} id='blacklist'>
                    <div>
                        <BlacklistLogo/>
                        <span>Blacklist</span>
                    </div>
                </div>
                <div className="top-btn" onClick={pressedHandler} id='settings'>
                    <div>
                        <SettingsLogo/>
                        <span>Settings</span>
                    </div>
                </div>

            </div>
            <div>
                <div className="top-btn bottom-btn" onClick={pressedHandler} id='account'>
                    <div>
                        <AccountLogo/>
                        <span>Account</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;