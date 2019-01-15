import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {

//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );

//     return <div>Hi There</div>

// };

class App extends React.Component {

    // create and initialize object
    constructor(props) {
        // pass parent object (React.Component) methods and properties
        super(props);

        // initialze state
        this.state = {
            lat: null,
            errorMessage: ''
        };

        console.log('hit');

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({errorMessage: err.message});
            }
        );

    }

    // have to define render!!
    render() {
        
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error:{this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude:{this.state.lat}</div>
        }
        
        return <div>Loading...</div>

    }

}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);