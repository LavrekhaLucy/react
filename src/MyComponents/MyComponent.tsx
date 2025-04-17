import {FC} from "react";


type MyComponentPropsType = {text:string}

const MyComponent:FC <MyComponentPropsType> = ({text}) => {
    return <div>{text}</div>
}
export default  MyComponent;







