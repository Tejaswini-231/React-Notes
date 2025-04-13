import "../App.css";
import { MyComponent, Conditions, PersonComponent } from "./practice";
function App() {

  return (
    <>
      <div className='App'>
        <MyComponent/>
        <Conditions/>
        <PersonComponent/>
      </div>
      <h1>Day-1 of React Js</h1>
      <div className="card">
        <button onClick={()=>{console.log("hello!!")}}>Button</button>
      </div>
      
    </>
  )
}

export default App
