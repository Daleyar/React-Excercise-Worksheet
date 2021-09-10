import React, {Component} from "react";
import DisplayName from './DisplayName/displayName';
import NamesList from "./NamesList/namesList";
import AlertUser from "./AlertUser/alertUser";
import SuperHeroTable from "./SuperheroTable/superHeroTable";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie'],
            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondaryAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
                }
            ]
        }
    }

    AlertUser(){
        alert("devCodeCamp");
    }

    render() { 
        return ( 
            <div>
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
                <NamesList names={this.state.names} />
                <AlertUser alert={() => this.AlertUser()} />
                <SuperHeroTable heroes={this.state.superheroes} />
            </div>
        );
    }
}
 
export default App;