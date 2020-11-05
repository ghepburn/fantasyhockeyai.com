import React, {Component} from 'react';

import {FantasySettings} from "./fantasySettings/FantasySettings";
import FantasySettingsContext from "./fantasySettings/FantasySettingsContext";
import {User} from "./user/User";
import UserContext from './user/UserContext';

class GlobalState extends Component {
    state = {  
        fantasySettings: new FantasySettings(),
        user: new User()
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


    render() { 
        return (  
            <UserContext.Provider value = {{getUser: this.getUser, setUser: this.setUser}} >
                <FantasySettingsContext.Provider value = {{getFantasySettings: this.getFantasySettings, setFantasySettings: this.setFantasySettings}} >
                    {this.props.children}
                </FantasySettingsContext.Provider>
            </UserContext.Provider>
        );
    }
}
 
export default GlobalState;