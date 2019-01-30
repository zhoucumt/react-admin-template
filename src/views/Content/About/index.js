import React, {Component} from 'react';
import "./index.less";

class About extends Component {
    render () {
        return (
            <div style={{fontSize: '50px'}} className="about-page">
                <div>About</div>
                <svg width="300" height="180">
                    <circle cx="30"  cy="50" r="25" />
                    <circle cx="90"  cy="50" r="25" class="red" />
                    <circle cx="150" cy="50" r="25" class="fancy" />
                </svg>
            </div>
        );
    }
}

export default About;
