import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
class App extends Component {
  id = 2
  state = {
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
    ],
    keyword: ''
  };
  handleCreate = (data) => {
    const { information } = this.state;
    const { name, phone } = data;
    this.setState({
      name: name,
      phone: phone,
      information: information.concat({
        id: this.id++,
        ...data
      })
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data } //새 객체를 만들어서 기존 값과 전달달받은data 덮어쓰기
          : info //기존값 유지
      )
    })
  }
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }

  render() {
    const { information, keyword } = this.state;
    const filterdList = information.filter(info => info.name.indexOf(keyword) !== -1)
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <p>
          <input
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <PhoneInfoList data={filterdList} onRemove={this.handleRemove} onUpdate={this.handleUpdate} />
      </div>
    );
  }
}

export default App;
