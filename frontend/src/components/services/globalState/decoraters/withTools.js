import React, {useContext} from 'react';
import ToolsContext from "../tools/ToolsContext";

const withTools = (WrappedComponent) => {
    return (props) => {
        const toolsContext = useContext(ToolsContext);
        const tools = toolsContext.getTools();

        const log = (input) => {
            tools.logger.log(input);
        }

        return (
            <WrappedComponent {...props} log={log} />
        );
    }
}
 
export default withTools;