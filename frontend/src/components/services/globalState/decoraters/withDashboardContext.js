import React, {useContext} from 'react';
import DashboardContext from "../dashboard/DashboardContext";

const withDashboardContext = (WrappedComponent) => {
    return (props) => {
        const dashboardContext = useContext(DashboardContext);

        return (
            <WrappedComponent {...props} {...dashboardContext} />
        );
    }
}
 
export default withDashboardContext;