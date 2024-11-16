
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
function App() {
  return (
    // <div>
    //  <Body/>
    // </div>
    //we have provided or store to our body
    <Provider store={appStore}>
      <Body/>
    </Provider>
  );
}

export default App;
