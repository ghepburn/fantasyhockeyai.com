import React, {useState, useContext} from 'react';
import {withRouter} from "react-router-dom";
import UserContext from "../globalState/user/UserContext";

const PasswordPrompt = ({history}) => {
    const [passwordInput, setPasswordInput] = useState("");
    const userContext = useContext(UserContext);


    const handleChange = (event) => {
        setPasswordInput(event.target.value);
    }

    const handleClick = async () => {
        let user = await userContext.getUser();
        user.authenticate(passwordInput);
        await userContext.setUser(user);
        history.push("/admin");
        console.log(userContext.getUser())
    }

    return (  
        <div className="passwordPrompt">
            <div className="form">
                <div className="formSection">
                    Password:
                    <input className="passwordInput" name="adminpasswordPrompt" onChange={handleChange} />
                    <button className="button" onClick={handleClick}>Submit</button>
                </div>
            </div>
        </div>
    );
}
 
export default withRouter(PasswordPrompt);