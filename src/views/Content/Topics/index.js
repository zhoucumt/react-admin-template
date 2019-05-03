import React, {Component} from 'react';
import pageData from '@/mock';
import TabFilter from '@/components/TabFilter';
import ScreenCondition from '@/components/screenCondition/screenCondition.js';

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
            <TabFilter
                tabData={pageData.tabData}
                onHandle={this.handleClick}
            />
            <ScreenCondition />
        </div>
    }
}

export default Topics;
