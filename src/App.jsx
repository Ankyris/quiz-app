import Quiz from "./Components/Quiz"
import Result from "./Components/Result"
import Start from "./Components/Start"
import {DataProvider} from "./Context/dataContext"
import './App.css';

function App() {

  return (
    <DataProvider>
      {/* Welcome Page */}
      <Start />

      {/* Quiz Page */}
      <Quiz />

      {/* Result Page */}
      <Result />

    </DataProvider>
    
  )
}

export default App
