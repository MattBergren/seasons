import './SeasonDisplay.css';
import React from 'react';

// good practice to setup a config object
const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'massive sun icon'
    },
    winter: {
        text: "Burr it's cold!",
        iconName: "massive snowflake icon"
    }
}

// helper function
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'summer' : 'winter';
    }
};

// functional component
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // assign object properties to a variable by using ES5 destructuring
    const { text, iconName } = seasonConfig[season];

    return( 
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} `}></i>
            <h1>{text}</h1>
            <i className={`icon-right ${iconName} `}></i>
        </div>
    )
};

export default SeasonDisplay;

