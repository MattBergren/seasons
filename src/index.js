import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    state = { lat: null, errorMessage: '' };

    // lifecycle method - best practice to do data loading here
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            // updating state will re-render page running render()
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({errorMessage: err.message});
            }
        );
    }

    // function to keep conditionals out of the render method
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error:{this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        
        return <Spinner message="please accept location request"/>
    }

    // have to define render!!
    render() {
        // try to keep one return in render
        return (
            <div className="wrapper-body">
                {this.renderContent()}
            </div>
        );

    }

}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);