import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
  }
];

class News extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

  newsTemplate() {
    if (this.state.data.length > 0 ) {
      return (
        this.state.data.map(function (item, index) {
          return (
            <div key={index}>
              <p className="news__author">{item.author}:</p>
              <p className="news__text">{item.text}</p>
            </div>
          )
        })
      )
    }
    else {
      return (
        <strong>К сожелению новостей нет.</strong>
      )
    }
  }

  render() {
    return (
      <div className="news">
        {this.newsTemplate()}
        <strong>Всего новостей: {this.state.data.length}</strong>
        
        <br />
      </div>
    )
  }
}

class Comments extends React.Component {
  render() {
    return (
      <div className="comments">
        Нет новостей - комментировать нечего.
      </div>
    )
  }
}

class App extends React.Component {

  render() {
    return (
      <div className="app">
        Всем привет, я компонент App!
        <News data={my_news} />
        <Comments />
      </div>
    );
  };
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

