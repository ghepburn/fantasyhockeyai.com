import React, {useContext, useState} from 'react';
import WeightInput from '../utils/WeightInput';
import FantasySettingsContext from "../../../globalState/fantasySettings/FantasySettingsContext";
import FormSection from "../../utils/FormSection"

const PlayerWeights = () => {

    const fantasySettingsContext = useContext(FantasySettingsContext);
    let [fantasySettings, setFantasySettings] = useState(fantasySettingsContext.getFantasySettings());

    const handleChange = (event) => {
        const name = event.target.name.toLowerCase();
        fantasySettings.PlayerSettings[name].weight = event.target.value;
        console.log(fantasySettings.PlayerSettings[name]);
    }

    const handleSubmit = () => {
        fantasySettingsContext.setFantasySettings(fantasySettings);
    }
    
    const formItems = Object.entries(fantasySettings.PlayerSettings).filter(player=>player[1].show === true)
    .map((player)=> {
        const name = player[0];
        const shortLabel = player[1].shortLabel;
        const weight = player[1].weight;
        
        return(
            <WeightInput label={name} shortLabel={shortLabel} weight={weight} handleChange={handleChange} />
        );
    })

    return (  
        <FormSection title={"Players:"} content={formItems}/>
    );
}
 
export default PlayerWeights;