import React, {useState} from 'react';
import Title from "./Title";
import ShiftButton from "./ShiftButton";
import CategorySelection from "../services/settingsSelection/categorySelection/CategorySelection";
import WeightSelection from "../services/settingsSelection/weightSelection/WeightSelection";

import withDashboardContext from "../services/globalState/decoraters/withDashboardContext";
import Client from "../services/client/Client";

const Home = ({history, setData}) => {

    let [stage, setStage] = useState(1);

    let [showNext, setShowNext] = useState(true);
    let [showBack, setShowBack] = useState(false);
    let [showEnd, setShowEnd] = useState(false);

    const shiftNext = () => {
        setStage(stage += 1);
        setShowBack(true);
        setShowEnd(true);
        setShowNext(false);
    }

    const shiftBack = () => {
        setStage(stage -= 1);
        setShowNext(true);
        setShowBack(false);
        setShowEnd(false);
    }

    const clickEnd = async () => {
        //set up env
        const players = await Client.getPlayers();
        await setData(players);

        //redirect  
        history.push("/dashboard");
    }

    let nextButton = showNext ? <ShiftButton label="Next" onClick={shiftNext} /> : "";
    let backButton = showBack ? <ShiftButton label="Back" onClick={shiftBack} /> : "";  
    let endButton = showEnd ? <ShiftButton label="Lets Go!" onClick={clickEnd} /> : "";  

    let categorySelection = stage === 1 ? <CategorySelection /> : "";
    let weightSelection = stage === 2 ? <WeightSelection /> : "";

    return (  
        <div className="home">

            <Title />
            
            <div className="settingsSelection">
                {categorySelection}
                {weightSelection}
            </div>
            <div className="shiftButtons">
                {backButton}
                {nextButton}
                {endButton}
            </div>
        </div>
    );
}
 
export default withDashboardContext(Home);