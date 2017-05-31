import React from 'react';
import ReactDOM from 'react-dom';
import news from './data/testData.json'


class NewsTitle extends React.Component {
  render() {
    return(
      <h4>{this.props.entry.title}</h4>
    );
  }
}

class NewsContent extends React.Component {
  render() {
    return(
      <div>
        <div dangerouslySetInnerHTML={ {__html: this.props.entry.body} }/>
        <br/>
      </div>
    );
  }
}

class NewsTable extends React.Component {
  render() {
    var rows = [];
    this.props.data.news.forEach(function(entry) {
      rows.push(<NewsTitle entry={entry} key={entry.title}/>);
      rows.push(<NewsContent entry={entry} key={entry.body}/>);
    });
    return(
      <div>
        {rows}
      </div>
    );
  }
}

ReactDOM.render(
  <NewsTable data={news}/>,
  document.getElementById('news-content')
)