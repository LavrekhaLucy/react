import './App.css'
import useFetch from "./hooks/useFetch.tsx";




function App() {
   const users =useFetch<{id:number, name:string}[]>('https://jsonplaceholder.typicode.com/users',[])


  return (
    <div >
      {
        //users &&// можна використати замість defaultValue:T//

        users.map((user) => (
            <div key={user.id}>
              {user.id}: {user.name}
            </div>
        ))
      }
    </div>
  )
}

export default App
