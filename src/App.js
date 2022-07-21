import './App.css';
import React from 'react';
import MainComponent from './components/MainComponent';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/ConfigureStore';

const store = ConfigureStore();

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <MainComponent />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App;
