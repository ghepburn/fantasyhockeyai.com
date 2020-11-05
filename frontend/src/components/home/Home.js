import React, {useState} from 'react';
import Title from "./Title";
import Intro from "./Intro";
import ShiftButton from "./ShiftButton";
import CategorySelection from "../services/settingsSelection/categorySelection/CategorySelection";
import WeightSelection from "../services/settingsSelection/weightSelection/WeightSelection";

const Home = ({history}) => {

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

    const clickEnd = () => {
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
            <Intro />
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
 
export default Home;