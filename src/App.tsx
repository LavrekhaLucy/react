import './App.css'
import { useState, useCallback, useMemo } from 'react';
import {SlowComponent} from "./components/SlowComponent.tsx";
// Імпортуємо гачки React:
//     useState — для збереження стану,
//     useCallback — для мемоізації функції,
//     useMemo — для мемоізації значень,



function App() {

  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // Створюємо два стани:
  //     count — для основного лічильника,
  //     other — для демонстрації оновлення стану, яке не має стосунку до SlowComponent.


  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    let total = 0;
    for (let i = 0; i < 1000; i++) {
      total += i;
    }
    return total;
  }, [count]);

  // useMemo() — обчислює повільну функцію тільки тоді, коли змінюється count.
  //
  //     Без нього обчислення запускалося б на кожен рендер.
  //
  //     [count] — масив залежностей: якщо count не змінився — обчислення пропускається.


  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  // useCallback() — мемоізує функцію handleClick, щоб не створювати її знову при кожному рендері.
  //
  //     Це важливо для memo-компонентів: якщо функція змінилася — дочірній компонент перерендериться.
  //
  //     Порожній масив [] означає, що ця функція ніколи не зміниться (якщо не змінити залежності).




  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Other: {other}</h2>
      <p>Expensive calculation result: {expensiveCalculation}</p>

      <SlowComponent onClick={handleClick} />
      <button onClick={() => setOther((o) => o + 1)}>Update Other</button>
    </div>
  )
}
// Рендеримо елементи:
//     Значення лічильника та результат обчислення,
//     SlowComponent, який не ререндериться, якщо handleClick не змінюється,
//     Кнопка для оновлення other, яка не впливає на дочірній компонент, бо пропси залишаються ті ж.



    export default App
