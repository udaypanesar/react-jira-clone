import { Provider } from 'react-redux'
import store from './Redux/store'
import Navigation from './Navigation/Navigation.layout'

function App() {

  return (
    <>
    <Provider store={store}>
      <Navigation/>
    </Provider>
    </>
  )
}

export default App
