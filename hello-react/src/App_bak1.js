import React, { Fragment, Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
class App extends Component {
  a = "help...!";
  styles = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '12px'
  };
  id = 2
  state = {
    name: '',
    phone: '',
    information: [
      {
        id: 0,
        name: 'jiwoo',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: 'mira',
        phone: '010-0000-0001'
      }
    ]
  };
  handleCreate = (data) => {
    console.log(data);
    const { information } = this.state;
    const { name, phone } = data;
    this.setState({
      name: name,
      phone: phone,
      information: information.concat({
        id: this.id++,
        name: name,
        phone: phone
      })
    })
  }
  render() {
    const { information } = this.state;

    return (

      <Fragment>
        <div className="App">
          <header className="App-header">
            <p>
              {/*주석은 중괄호 안에 주석처리*/}
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </header>
          <PhoneForm onCreate={this.handleCreate} />
          <div>{this.state.name} {this.state.phone}</div>

          <div>
            {
              1 + 1 === 2
                ? <div>correct!</div>
                : <div>wrong!</div>
            }
            {// IIFE(Immediately Invoked Function Expression) 즉시 실행 함수 표현
              (function () {
                return "IIFE";
              })()
            }
          </div>
        </div>
        {JSON.stringify(information)}
      </Fragment >
    );
  }
}

export default App;
