import {ICoursesArray} from "../../models/ICoursesArray.ts";
import { FC, ReactNode} from "react";

interface MyCourseProps {
    item: ICoursesArray,
    children: ReactNode,
}

export const MyCourse: FC<MyCourseProps> = ({item,children}: MyCourseProps) => {
    return (
        <div className='my-10 border-2'>
            <h2 className='text-2xl'>{item.title}</h2>
            <p>{item.monthDuration}  {item.hourDuration}</p>

            <ul >
                <li >{children}</li>
            </ul>



        </div>
    );
};