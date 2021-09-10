import React from 'react';

const SuperHeroTable = (props) => {
    return (
        <React.Fragment>
            <table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Superhero Id</th>
                        <th>Name</th>
                        <th>Primary Ability</th>
                        <th>Secondary Ability</th>
                    </tr>
                </thead>
                <tbody>
                    {props.heroes.map((hero, index) => {
                        return (
                            <div key={index}>
                                <tr>
                                    <td>{hero.superheroId}</td>
                                    <td>{hero.name}</td>
                                    <td>{hero.primaryAbility}</td>
                                    <td>{hero.secondaryAbility}</td>
                                </tr>
                            </div>
                        );
                    })}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default SuperHeroTable