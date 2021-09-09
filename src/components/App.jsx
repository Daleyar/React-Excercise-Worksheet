import React, {Component} from "react";
import DisplayName from './DisplayName/DisplayName';
import NamesList from "./NamesList/NamesList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie', 'Jack']
        }
    }

    render() { 
        return ( 
            <div>
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
                <NamesList names={this.state.names} />
            </div>
        );
    }
}
 
export default App;