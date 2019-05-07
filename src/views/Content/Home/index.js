import React, {Component} from 'react';
import api from '@/api/index.js';
import {Button} from 'antd';

class Home extends Component {
    constructor(props) {
        super(props);
        // 创建 ref 存储 textInput DOM 元素
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // 直接使用原生 API 使 text 输入框获得焦点
        // 注意：通过 "current" 取得 DOM 节点
        this.textInput.current.focus();
    }

    render () {
        return (
            <div style={{fontSize: '50px'}}>
                <h3>Home</h3>
                <Button>按钮</Button>
                <div>
                    <input
                        type="text"
                        ref={this.textInput} />

                    <input
                        type="button"
                        value="Focus the text input"
                        onClick={this.focusTextInput}
                    />
                </div>
                <div></div>
            </div>
        );
    }

    componentDidMount() {
        api.getBasicData({
        }).then(res => {
            console.log('res: ', res);
        });
    }
}

export default Home;
