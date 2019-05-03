import React, {Component} from 'react';
import "./index.less";

class About extends Component {
    constructor(props) {
        super(props);

        this.onchangeHandler = this.onchangeHandler.bind(this);

        this.state = {
            inputValue: 'inputValue',
            name: status => (
                <div>aaaa</div>
            )
        };

        this.myRef = React.createRef();
    }

    onchangeHandler(e) {
        this.setState({
            inputValue: e.target.value
        });
        console.log('this.myRef: ', this.myRef.current);
    }

    render () {
        const labelText = 'text';
        const inputValue = this.state.inputValue;

        return (
            <div style={{fontSize: '50px'}} className="about-page">
                <div ref={this.myRef}>About</div>

                <svg width="300" height="180">
                    <circle cx="30"  cy="50" r="25" />
                    <circle cx="90"  cy="50" r="25" className="red" />
                    <circle cx="150" cy="50" r="25" className="fancy" stroke="red" />
                </svg>

                <svg width="300" height="180">
                    <line x1="0" y1="0" x2="200" y2="0" className="line" />
                </svg>

                <svg width="300" height="180">
                    <polyline points="3,3 30,28 3,53" fill="none" stroke="black" />
                </svg>

                <svg width="300" height="180">
                    <rect x="0" y="0" height="100" width="200" />
                </svg>

                <input
                    type="text"
                    aria-label={labelText}
                    aria-required="true"
                    onChange={this.onchangeHandler}
                    value={inputValue}
                    name="name"
                />

                <div>
                    <label htmlFor="namedInput">Name:</label>
                    <input id="namedInput" type="text" name="name"/>
                </div>
            </div>
        );
    }
}

export default About;
