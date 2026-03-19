import { useEffect, useState } from "react";

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // без указания массива зависимостей - no dependencies array
    // при перевом рендере - и при любых изменениях
    console.log("Use Effect version 1");
  });

  useEffect(() => {
    // с пустым массивом зависимостей - with empty dependencies array
    // только при первом рендере
    console.log("Use Effect version 2");
  }, []);

  useEffect(() => {
    // сработает при первом рендере и когда поменялся указанный стейт
    // и при изменения стейта count
    // а вот если поменялся другой стейт, например, name - не будет срабаотывать
    console.log("Use Effect version 3");
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Bip");
    }, 1000);

    // clean up function
    // можно указать в ретерне cleanup функцию
    // она срабатывать в момент Unmount
    return () => {
      console.log("Clean up");
      clearInterval(interval);
    };
  }, []);

  // memory leaks

  return (
    <div>
      <h2>Example for useEffect</h2>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        +
      </button>

      <p>Count: {count}</p>
    </div>
  );
}

// Component lifecycle
// Mount - первое появлением - первый рендер
// Update - меняются значения стейта
// Unmount - размонтирование - когда исчезает - закрывается

// callback - функция - которые мы передаем в вызов другой функции как аргумент
