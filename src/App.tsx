import './App.css'
import MyComponent from "./MyComponents/MyComponent.tsx";


function App() {


  return (
    <div>

        {/*<ul>*/}
        {/*    <li>asd</li>*/}
        {/*    <li>asd</li>*/}
        {/*    <li>asd</li>*/}
        {/*    <li>asd</li>*/}
        {/*</ul>*/}

      <MyComponent title ={"Hello World!"}>
      Lorem ipsum dolor sit.
      </MyComponent>
      <MyComponent title ={"Hello Okten!"}/>
      <MyComponent title ={"Hello You!"}/>
        {/*{MyComponent({text: 'Hello okten!'})}*/}
    </div>
  )
}

export default App
