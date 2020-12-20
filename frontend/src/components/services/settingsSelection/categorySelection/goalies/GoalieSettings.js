import React, {useContext, useState} from 'react';
import CategoryButton from '../utils/CategoryButton';
import FantasySettingsContext from "../../../globalState/fantasySettings/FantasySettingsContext";
import FormSection from "../../utils/FormSection"

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

    const formItems = Object.entries(fantasySettings.GoalieSettings).map((goalie)=> {
        const name = goalie[0];
        const shortLabel = goalie[1].shortName;
        const show = goalie[1].show;
        
        return(
            <CategoryButton label={name} shortLabel={shortLabel} onClick={handleClick}/>
        );
    })

    return (  
        <FormSection title={"Goalies:"} content={formItems}/>
    );
}
 
export default GoalieSettings;