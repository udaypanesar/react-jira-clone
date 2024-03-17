import CreateTask from './Pages/Tasks/CreateTask.layout'
import { Provider } from 'react-redux'
import store from './Redux/store'
import './App.css'
import TaskList from './Pages/Tasks/TaskList.layout'

function App() {

  return (
    <Provider store={store}>
    <CreateTask/>
    <TaskList/>
    </Provider>
  )
}

export default App
