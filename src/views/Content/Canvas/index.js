import React, {Component} from 'react';
import {DatePicker} from 'antd';

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '2',
            text: 'text',
            startTime: null
        };
        this.onClick1 = this.onClick1.bind(this);
        this.onClick2= this.onClick2.bind(this);
        this.onStartChange = this.onStartChange.bind(this);
    }

    onClick1() {
        this.setState({
            value: 3
        });
    }

    onClick2() {
        console.log('-----', this.state.startTime);
    }

    onStartChange(value) {
        this.setState({
            startTime: value
        })
    }

    render () {
        return (
            <div className="canvas-page">
                canvas-page
                <div>
                    <button onClick={this.onClick1}>btn1</button>
                </div>
                <div>
                    <button onClick={this.onClick2}>btn2</button>
                </div>
                <DatePicker
                    onChange={this.onStartChange}
                    defaultValue={this.state.startTime}
                />
            </div>
        );
    }
}

export default Canvas;
