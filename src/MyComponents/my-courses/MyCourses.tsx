import {coursesArray} from "../../data/coursesArray.ts";
import {MyCourse} from "../my-course/MyCourse.tsx";



export const MyCourses = () => {
    return (
        <div>

                {
                    coursesArray.map((value,index) => <MyCourse key={index} item={value}>
                        {value.modules}
                        </MyCourse>)
                }
        </div>
    );
};