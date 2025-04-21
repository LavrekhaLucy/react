import './App.css'
import {courses} from "./data/courseList.ts";
import MyCourse from "./MyCourses/my-course/MyCourse.tsx";



function App() {


  return (
    <div className={'foobar'}>
      <ul>{
        courses.map((course, index) => <MyCourse key={index} course={course}/>
        )
      }</ul>
    </div>
  )
}

export default App
