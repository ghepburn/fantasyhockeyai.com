import React, {Component} from 'react';

// import global contexts
import {FantasySettings} from "./fantasySettings/FantasySettings";
import FantasySettingsContext from "./fantasySettings/FantasySettingsContext";
import {User} from "./user/User";
import UserContext from './user/UserContext';
import {DisplaySettings} from "./displaySettings/DisplaySettings";
import DisplaySettingsContext from './displaySettings/DisplaySetttingsContext';
import Tools from "./tools/Tools";
import ToolsContext from './tools/ToolsContext';


class GlobalState extends Component {
    state = {  
        fantasySettings: new FantasySettings(),
        user: new User(),
        displaySettings: new DisplaySettings(),
        tools: new Tools()
    }

    // FANTASY SETTINGS

    setFantasySettings = (fantasySettings) => {
        this.setState({fantasySettings: fantasySettings});
    }

    getFantasySettings = () => {
        return this.state.fantasySettings;
    }

    // USER AUTHENTICATION

    getUser = () => {
        return this.state.user;
    }

    setUser = (User) => {
        this.setState({user: User});
        return User;
    }

    // DISPLAY SETTINGS

    getDisplaySettings = () => {
        return this.state.displaySettings;
    }

    setDisplaySettings = (displaySettings) => {
        this.setState({displaySettings: displaySettings});
        return displaySettings;
    }

    // TOOLS

    getTools = () => {
        return this.state.tools;
    }


    render() { 
        return ( 
            <ToolsContext.Provider value={{getTools: this.getTools}} > 
                <DisplaySettingsContext.Provider value={{getDisplaySettings: this.getDisplaySettings, setDisplaySettings: this.setDisplaySettings}} >
                    <UserContext.Provider value = {{getUser: this.getUser, setUser: this.setUser}} >
                        <FantasySettingsContext.Provider value = {{getFantasySettings: this.getFantasySettings, setFantasySettings: this.setFantasySettings}} >
                            {this.props.children}
                        </FantasySettingsContext.Provider>
                    </UserContext.Provider>
                </DisplaySettingsContext.Provider>
            </ ToolsContext.Provider>
        );
    }
}
 
export default GlobalState;