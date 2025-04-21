import {FC} from "react";

import {ICourse} from "../../models/ICourse.ts";
import "./MyCourse.css"

type MyPropsType = {
    course: ICourse
}

const MyCourse:FC<MyPropsType> = ({course}) => {
    return (
        <div className='foobar'>
            <h2>{course.title}</h2>
            <p>{course.monthDuration}</p>
        </div>
    );
};

export default MyCourse;