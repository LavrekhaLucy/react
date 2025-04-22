import {ICoursesArray} from "../../models/ICoursesArray.ts";
import {ReactNode, FC} from "react";
import  "../my-course/MyCourse.css";

interface MyCourseProps {
    item: ICoursesArray,
    children: ReactNode,
}

export const MyCourse: FC<MyCourseProps> = ({item,children}: MyCourseProps) => {
    return (
        <div className='my-10 border-2'>
            <h2 className='text-2xl'>{item.title}</h2>
            <h3>{item.monthDuration}  {item.hourDuration}</h3>
            <p >{children}</p>

        </div>
    );
};