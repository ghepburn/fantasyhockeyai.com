import React, {useContext, useState} from 'react';
import SettingsFormCategory from '../SettingsFormCategory';
import FantasySettingsContext from "../../../globalState/fantasySettings/FantasySettingsContext";


const GoalieSettings = () => {

    const fantasySettingsContext = useContext(FantasySettingsContext);
    let [fantasySettings, setFantasySettings] = useState(fantasySettingsContext.getFantasySettings());

    const handleClick = (event) => {
        const name = event.target.name.toLowerCase();
        fantasySettings.GoalieSettings[name].show = !fantasySettings.GoalieSettings[name].show;
    }

    const handleSubmit = () => {
        fantasySettingsContext.setFantasySettings(fantasySettings);
    }

    const formCategories = Object.entries(fantasySettings.GoalieSettings).map((goalie)=> {
        const name = goalie[0];
        const shortLabel = goalie[1].shortLabel;
        const show = goalie[1].show;
        
        return(
            <SettingsFormCategory label={name} shortLabel={shortLabel} onClick={handleClick}/>
        );
    })

    return (  
        <div className="formSection">
            Goalies:
            {formCategories}
        </div>
    );
}
 
export default GoalieSettings;