import {FC, ReactNode} from "react";
// import styles from "./MyComponent.module.css"

type MyComponentPropsType = {
    title:string;
    children?:ReactNode;
};

const MyComponent:FC <MyComponentPropsType> = ({title,children}) => {
    return <div className="text-3xl font-bold underline">
        <h2>{title}</h2>
        <p>{children}</p>

    </div>
}
export default  MyComponent;







