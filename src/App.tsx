import './App.css'
import {courses} from "./data/courseList.ts";
import MyCourse from "./MyComponents/my-course/MyCourse.tsx";



function App() {


  return (
    <div className={'foobar'}>
        {
          courses.map( (course, index ) => <MyCourse key={index} course = {course}/>
         )
        }
    </div>
  )
}

export default App
