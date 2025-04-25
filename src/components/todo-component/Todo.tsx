import {FC} from "react";
import {ITodoModel} from "../../models/ITodoModel.ts";

type PropType = { todo: ITodoModel };


    export const Todo:FC<PropType> = ({todo:{userId,id,title,completed}}) => {
    return (
        <div>
            {userId} - {id} - {title} - {completed.toString()}
        </div>
    );
};