import {FC, memo} from "react";
//     memo — для оптимізації ререндерингу компонента.
type Props = {
    onClick?: () => void;
}
export const SlowComponent:FC<Props> = memo(({ onClick }) => {
    console.log("SlowComponent rendered");
    return <button onClick={onClick}>Click me</button>;
});
// Створюємо дочірній компонент, який приймає функцію onClick.
//
// memo() обгортає компонент і запобігає його повторному рендеру, якщо пропси не змінилися.
//
//     Якщо onClick змінюється при кожному рендері батьківського компоненту — memo не допоможе.
