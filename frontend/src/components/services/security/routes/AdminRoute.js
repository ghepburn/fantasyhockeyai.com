import React, {useContext} from 'react';
import {Route, withRouter} from "react-router-dom";
import UserContext from "../../globalState/user/UserContext";

import Admin from "../../admin/Admin";
import PasswordPrompt from "../../admin/PasswordPrompt";

const AdminRoute = ({history, component}) => {
    
    const userContext = useContext(UserContext);

    if (userContext.getUser().isAdmin()) {
        return (
            <Admin />
        );
    } else {
        return(
            <PasswordPrompt />
        );
    }
}
 
export default withRouter(AdminRoute);