import {FC} from "react";
import styles from "./MyComponent.module.css"

type MyComponentPropsType = {text:string}

const MyComponent:FC <MyComponentPropsType> = ({text}) => {
    return <div className={styles.target}>
        {text}</div>
}
export default  MyComponent;







