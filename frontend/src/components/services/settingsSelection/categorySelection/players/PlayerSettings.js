import React, {useContext, useState} from 'react';
import SettingsFormCategory from '../SettingsFormCategory';
import FantasySettingsContext from "../../../globalState/fantasySettings/FantasySettingsContext";


const PlayerSettings = () => {

    const fantasySettingsContext = useContext(FantasySettingsContext);
    let [fantasySettings, setFantasySettings] = useState(fantasySettingsContext.getFantasySettings());

    const handleClick = (event) => {
        const name = event.target.name.toLowerCase();
        fantasySettings.PlayerSettings[name].show = !fantasySettings.PlayerSettings[name].show;
        console.log(fantasySettings);
    }

    const handleSubmit = () => {
        fantasySettingsContext.setFantasySettings(fantasySettings);
    }

    const formCategories = Object.entries(fantasySettings.PlayerSettings).map((player)=> {
        const name = player[0];
        const shortLabel = player[1].shortLabel;
        const show = player[1].show;
        
        return(
            <SettingsFormCategory label={name} shortLabel={shortLabel} onClick={handleClick} show={show}/>
        );
    })

    return (  
        <div className="formSection">
            Players:
            {formCategories}
        </div>
    );
}
 
export default PlayerSettings;