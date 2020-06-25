// create your App component here
import React from 'react';

export default class App extends React.Component {
    
    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    peopleInSpace: result.people
                })
            })
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.state.peopleInSpace.map(person => <li>{person.name}</li>)}
                </ul>
            </div>
        )
    }
}
