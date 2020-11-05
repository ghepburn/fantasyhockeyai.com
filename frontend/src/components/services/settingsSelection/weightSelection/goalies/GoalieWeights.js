import React, {useContext, useState} from 'react';
import SettingsFormWeight from '../SettingsFormWeight';
import FantasySettingsContext from "../../../globalState/fantasySettings/FantasySettingsContext";


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

    const formWeights = Object.entries(fantasySettings.GoalieSettings).filter(goalie=>goalie[1].show === true)
    .map((goalie)=> {
        const name = goalie[0];
        const shortLabel = goalie[1].shortLabel;
        const weight = goalie[1].weight;
        
        return(
            <SettingsFormWeight label={name} shortLabel={shortLabel} weight={weight} handleChange={handleChange} />
        );
    })

    return (  
        <div className="formSection">
            <div classname="sectionTitle">
                Goalies:
            </div>
            <div className="sectionContent">
                {formWeights}
            </div>
        </div>
    );
}
 
export default GoalieWeights;