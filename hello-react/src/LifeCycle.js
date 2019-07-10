import React, { Component } from 'react';

const Problemmatic = () => {
    throw (new Error('버그가 나타났다!'));
};
class LifeCycle extends Component {
    state = {
        number: 0
    }

    constructor(props) {
        super(props);
        console.log('constructor', props)
    }
    componentDidMount() {
        // 외부 라이브러리 연동: D3, mosonry, etc...
        // 컴포넌트에 필요한 데이터 요청: axios
        // DOM에 관련된 작업: 스크롤 설정, 크기, 데이터 로딩 등
        /*
            if(nextProps.value !== prevState.value){
                return {value : nextProps.value}
            }
            return null; //null을 리턴시, 별도 update 없다는 의미
        */
        console.log('componentDidMount')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        //특정 props가 바뀔 때, 설정할 state값을 리턴
        console.log('getDerivedStateFromProps')
        return null;

    }
    shouldComponentUpdate(nextProps, nextState) {
        //return false시 update 않함.
        //return this.props.checked !== nextProps.checked
        console.log('shouldComponentUpdate')

        return true;
    }

    getSnapshotBeforeUpdate() {
        //DOM 업데이트 직전의 시점
        //
        console.log('getSnapshotBeforeUpdate')
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log('componentDidUpdate')

    }

    componentWillUnmount() {
        //이벤트, setTimeout, 외부 라이브러리 인스턴스 제거
        console.log('componentWillUnmount')

    }

    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    }

    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
                number: number - 1
            })
        );
    }

    componentDidCatch(error, info) {
        console.log(error, info)
        this.setState({
            error: true
        })

        //주로 발생하는 오류 CASE
        /*
            1. 존재하지 않는 함수를 호출
            2. 배열이나 객체의 undefined

            * render나 defaultProps로 처리 가능
        */

    }
    render() {
        if (this.state.error) return (<h1>Error 발생</h1>)
        console.log('render');
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                {this.state.number === 4 && <Problemmatic />}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}
export default LifeCycle;