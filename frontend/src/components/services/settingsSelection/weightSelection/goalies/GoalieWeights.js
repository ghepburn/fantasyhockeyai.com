import React, {useContext, useState} from 'react';
import WeightInput from '../utils/WeightInput';
import FantasySettingsContext from "../../../globalState/fantasySettings/FantasySettingsContext";
import FormSection from "../../utils/FormSection"

const GoalieWeights = () => {

    const fantasySettingsContext = useContext(FantasySettingsContext);
    let [fantasySettings, setFantasySettings] = useState(fantasySettingsContext.getFantasySettings());

    const handleChange = (event) => {
        const name = event.target.name.toLowerCase();
        fantasySettings.GoalieSettings[name].weight = event.target.value;
    }

    const handleSubmit = () => {
        fantasySettingsContext.setFantasySettings(fantasySettings);
    }

    const formItems = Object.entries(fantasySettings.GoalieSettings).filter(goalie=>goalie[1].show === true)
    .map((goalie)=> {
        const name = goalie[0];
        const shortLabel = goalie[1].shortLabel;
        const weight = goalie[1].weight;
        
        return(
            <WeightInput label={name} shortLabel={shortLabel} weight={weight} handleChange={handleChange} />
        );
    })

    return (  
        <FormSection title={"Goalies:"} content={formItems}/>
    );
}
 
export default GoalieWeights;