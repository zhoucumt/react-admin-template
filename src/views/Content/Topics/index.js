import React, {Component} from 'react';
// import pageData from '@/mock';
// import TabFilter from '@/components/TabFilter';
// import ScreenCondition from '@/components/screenCondition/screenCondition.js';

class Topics extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(key, value) {
        console.log(key, value);
    }

    render () {
        return <div>
            aaa
        </div>
    }
}

export default Topics;
