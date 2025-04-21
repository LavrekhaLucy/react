import {coursesArray} from "../../data/coursesArray.ts";
import {MyCourse} from "../my-course/MyCourse.tsx";
import "../my-course/MyCourse.css"


export const MyCourses = () => {
    return (
        <div>

                {
                    coursesArray.map((value) => <MyCourse key={value.title} item={value}>
                      {value.modules}
                    </MyCourse>)
                }
        </div>
    );
};