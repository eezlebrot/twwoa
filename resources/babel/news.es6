import news from '../data/testData.json'

class JsonFileReader extends React.Component {
  render() {
    console.log("Test Render");
  }
}

ReactDOM.render(
  <JsonFileReader />,
  document.getElementById('react-test')
)