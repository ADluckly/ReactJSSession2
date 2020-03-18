import React from 'react';
class LoginTest extends React.Component {
    state = {
        counter: 6,
    }
    handleClick = () => {
        const { counter } = this.state;
        //或者 const counter = this.state.counter;
        // this.setState({ counter: counter + 6 });
        // this.setState({ counter: this.state.counter + 6 });
        // this.setState({ counter: this.state.counter + 6 });
        // 因为 state 的更新可能是异步的，React 会把传入多个 setState的多个 Object “batch” 起来合并成一个。
        // 合并成一个就相当于把传入 setState 的多个 Object 进行 shallow merge

        this.setState(prev => ({ counter: prev.counter + 6 }));
        this.setState(prev => ({ counter: prev.counter + 6 }));
        this.setState(prev => ({ counter: prev.counter + 6 }));
        // 传入多个 setState 的多个 Object 会被 shallow Merge，而传入多个 setState 的多个 function 会被 "queue" 起来，
        // queue 里的 function 接收到的 state(上面是 prev )都是前一个 function 操作过的 state。
    }
    render() {
        return (
            <div>
                counter is: {this.state.counter}
                <button onClick={this.handleClick} >Click here</button>
            </div>
        )
    }
}

export default LoginTest;
