import {useEffect, useState} from "react";
// Імпортуємо два хука з React:
//// useState — для створення стану (products)
//// useEffect — для виконання побічних дій (наприклад, завантаження даних з API)

import {loadAuthProducts} from "../../services/api.service.ts";
// Імпортуємо асинхронну функцію loadAuthProducts, яка робить GET-запит до API і повертає масив продуктів (типу IProduct[]).

import {IProduct} from "../../models/IProduct.ts";
// Імпортуємо тип інтерфейсу IProduct, який описує структуру одного продукту (наприклад: id, title, price, images, тощо).

import {AuthResourceComponent} from "../auth-resource-component/AuthResourceComponent.tsx";
// Імпортуємо компонент, який відповідає за відображення одного продукту.
// Йому буде передаватися кожен елемент масиву products.


export const AuthResourcesComponent = () => {
    // Створюємо функціональний компонент, який буде відображати список авторизованих продуктів.


    const [products, setProducts] = useState<IProduct[]>([])
//     Ініціалізуємо стан — масив products, який спочатку порожній.
//    Тип — IProduct[], тобто масив продуктів.

    useEffect(() => {
        loadAuthProducts().then(products =>
        setProducts(products));
    }, []);

//     useEffect виконується один раз при монтуванні компонента ([] — порожній масив залежностей).
//   Всередині:
//    викликаємо loadAuthProducts() — отримуємо продукти з сервера;
//    setProducts(products) — зберігаємо їх у стан.
//    Якщо API не працює або токен неправильний — список залишиться порожнім.

    return (
        <div>
            {
                products.map((product) => (<AuthResourceComponent key={product.id} product={product} />))
            }

        </div>
//     Компонент рендерить <div> з переліком компонентів AuthResourceComponent.
//     Для кожного елемента масиву products викликається map(), який:
//     передає product у компонент
//     задає key={product.id} для унікальності
    );
};

// Що робить компонент/__________________/Як саме//
// Завантажує продукти__________________useEffect + loadAuthProducts()
// Зберігає їх у стан___________________useState<IProduct[]>
// Відображає кожен	map()з AuthResourceComponent
// Призначення	Показати список ресурсів, доступних після авторизації