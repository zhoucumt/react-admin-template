import React, {Component} from 'react';
import api from '../../../api/index.js';

class Home extends Component {
    render () {
        return <div style={{fontSize: '50px'}}>Home</div>
    }

    componentDidMount() {
        api.getBasicData({
        }).then(res => {
            console.log('res: ', res);
        })
    }
}

export default Home;
