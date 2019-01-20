import React, {Component} from 'react';
import api from '@/api/index.js';
import { Button } from 'antd';

class Home extends Component {
    render () {
        return (
            <div style={{fontSize: '50px'}}>
                <h3>Home</h3>
                <Button>按钮</Button>
            </div>
        );
    }

    componentDidMount() {
        api.getBasicData({
        }).then(res => {
            console.log('res: ', res);
        })
    }
}

export default Home;
