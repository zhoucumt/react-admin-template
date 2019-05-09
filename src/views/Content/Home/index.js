import React, {Component, PureComponent} from 'react';
import ChildComponent from './ChildComponent';
import api from '@/api/index.js';
import {Button} from 'antd';

class Home extends Component {
    constructor(props) {
        console.log('constructor=====');
        super(props);
        this.state = {
            numbers: [0],
            items: [1, 2, 3],
            text: 'this is a text'
            // items: [{a: 1}, {a: 2}, {a: 3}]
        };
    
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        // 创建 ref 存储 textInput DOM 元素
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount=====');
    }

    //当组件更新时会顺序执行以下方法
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps=====');
        console.log('componentWillReceiveProps nextProps=====', nextProps);
    }

    // PureComponent的时候不能使用shouldComponentUpdate
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate=====');
        console.log('shouldComponentUpdate nextProps======:', nextProps);
        console.log('shouldComponentUpdate nextState======:', nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate=====');
        console.log('componentWillUpdate nextProps=====', nextProps);
        console.log('componentWillUpdate nextState=====', nextState);
    }

    focusTextInput() {
        // 直接使用原生 API 使 text 输入框获得焦点
        // 注意：通过 "current" 取得 DOM 节点
        this.textInput.current.focus();
    }

    handleClick() {
        const arr = this.state.numbers;
        arr.push(1);
        this.setState({
            numbers: arr
        });
        console.log(this.state.numbers)
    }

    handleDelete() {
        const {items} = this.state;
        items.pop();

        // 如果是PureComponent，那么无论怎么点，渲染的数据不会变化；
        // Component的话，会变化
        // this.setState({items});

        // PureComponent的话，这样做才会渲染变化
        // this.setState({items: [].concat(items)});

        items.splice(items.length - 1, 1);
        this.setState({items});
        // this.setState({items: [{a: 1}, {a: 2}, {a: 3}]});
    }

    render () {
        console.log('render=====');
        return (
            <div style={{fontSize: '50px'}}>
                <h3>Home</h3>
                <div>{this.state.text}</div>
                <Button onClick={this.handleClick}>按钮</Button>
                <ChildComponent numbers={this.state.numbers} />

                <Button onClick={this.handleDelete}>删除</Button>
                <ul>
                    {this.state.items.map((i, index) => 
                        <li key={index}>{i}</li>
                    )}
                </ul>
                {/*<div>
                    <input
                        type="text"
                        ref={this.textInput}
                    />

                    <input
                        type="button"
                        value="Focus the text input"
                        onClick={this.focusTextInput}
                    />
                </div>*/}
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate======');
        console.log('componentDidUpdate prevProps=====', prevProps);
        console.log('componentDidUpdate prevState=====', prevState);
    }

    componentDidMount() {
        console.log('componentDidMount=====');
        this.setState({
            text: 'this is a new text'
        });
        api.getBasicData({
        }).then(res => {
            // console.log('res: ', res);
        });
    }

    componentWillUnmount() {

    }
}

export default Home;
