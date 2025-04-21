import {FC} from "react";

import {ICourse} from "../../models/ICourse.ts";
import "./MyCourse.css"

type MyPropsType = {
    course: ICourse
}

const MyCourse:FC<MyPropsType> = ({course}) => {
    return (
        <div className='foobar'>
            <li>{course.title} {course.monthDuration}</li>

        </div>
    );
};

export default MyCourse;