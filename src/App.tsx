import './App.css';
import './index.css';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  
  return (
    <div className='h-screen'>
      <Provider store={store}>
        <Layout/>  
      </Provider>
    </div>
  )
}

export default App
