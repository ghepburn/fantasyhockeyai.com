import React, {useContext, useState} from 'react';
import SettingsFormWeight from '../SettingsFormWeight';
import FantasySettingsContext from "../../../globalState/fantasySettings/FantasySettingsContext";


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
    console.log("Showing players");
    console.log(fantasySettings.PlayerSettings);
    const formWeights = Object.entries(fantasySettings.PlayerSettings).filter(player=>player[1].show === true)
    .map((player)=> {
        const name = player[0];
        const shortLabel = player[1].shortLabel;
        const weight = player[1].weight;
        
        return(
            <SettingsFormWeight label={name} shortLabel={shortLabel} weight={weight} handleChange={handleChange} />
        );
    })

    return (  
        <div className="formSection">
            <div className="sectionTitle">
                Players:
            </div>
            <div className="sectionContent">
                {formWeights}
            </div>
        </div>
    );
}
 
export default PlayerWeights;