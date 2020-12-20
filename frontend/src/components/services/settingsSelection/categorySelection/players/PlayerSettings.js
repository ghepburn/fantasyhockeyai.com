import React, {useContext, useState} from 'react';
import CategoryButton from '../utils/CategoryButton';
import FantasySettingsContext from "../../../globalState/fantasySettings/FantasySettingsContext";
import FormSection from "../../utils/FormSection"

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

    // map each player to desired state
    const formItems = Object.entries(fantasySettings.PlayerSettings).map((player)=> {
        const name = player[0];
        const shortLabel = player[1].shortName;
        const show = player[1].show;
        
        return(
            <CategoryButton label={name} shortLabel={shortLabel} onClick={handleClick} show={show}/>
        );
    })

    

    return (  
        <FormSection title={"Players:"} content={formItems}/>
    );
}
 
export default PlayerSettings;