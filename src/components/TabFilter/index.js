import React, {Component} from 'react';
import './index.less';

class TabFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            field: ''
        }
    }

    handleClick(key, value, tab) {
        this.props.onHandle(key, value);
        tab.active = true;
        this.setState({
            active: tab.id
        });
    }

    render() {
        const TabList = this.props.tabData.map((item, index) =>
            <div key={item.id}>
                <span className="name">{item.name}</span>
                {
                    item.list.map((tab, i) =>
                        <span
                            key={i}
                            className={this.state.active === i
                                && tab.active === true ? 'tab active': 'tab'}
                            onClick={this.handleClick.bind(this, item.field, tab.value, tab)}>
                            {tab.text}
                        </span>
                    )
                }
            </div>
        );
        return <div className="tab-filter">
            {TabList}
        </div>
    }
}

export default TabFilter;
