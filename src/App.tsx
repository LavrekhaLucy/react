import './App.css'
import MyComponent from "./MyComponents/MyComponent.tsx";
function App() {


  return (
    <div>
      <MyComponent text = "Hello World!" />
      <MyComponent text = "Hello Okten!" />
      <MyComponent text = "Hello You!" />
        {/*{MyComponent({text: 'Hello okten!'})}*/}
    </div>
  )
}

export default App
