import {createBrowserRouter} from "react-router-dom";

// Імпортує функцію createBrowserRouter з бібліотеки react-router-dom.
//  Ця функція використовується для створення маршрутизатора (router) — об’єкта, який описує,
//     які сторінки (компоненти) слід рендерити при переході за певними шляхами URL.

import MainLayout from "../layouts/MainLayout.tsx";

// Імпортується головний layout-компонент, який зазвичай містить загальну структуру
// сторінки: шапку (header), футер (footer), навігацію тощо.
//  Він буде обгорткою для дочірніх сторінок.

import {HomePage} from "../pages/HomePage.tsx";

// Імпортується компонент головної сторінки (HomePage). Він буде показаний за адресою / (корінь сайту).

import {LoginPage} from "../pages/LoginPage.tsx";

// Імпортується компонент сторінки входу — LoginPage, буде показаний за маршрутом /login

import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";

// Імпортується сторінка для авторизованих ресурсів — AuthResourcesPage.
// Вона відкривається за адресою /auth/resources.



const routes = createBrowserRouter([
 //    Створюємо маршрутизатор routes за допомогою createBrowserRouter.
 // Він містить масив маршрутів і буде використовуватись у <RouterProvider>

    { path: "/", element:<MainLayout/> , children:[
  //       Головний маршрут / використовує компонент MainLayout як обгортку.
  // У нього є дочірні маршрути (через children).


    {index:true, element:<HomePage/>},
     //        Це означає, що при відкритті / без підшляху рендериться HomePage.
     // index: true — це скорочений запис для початкового маршруту

            {path:'login', element:<LoginPage/>},
            // Коли користувач переходить на /login, рендериться LoginPage.

            {path:'/auth/resources', element:<AuthResourcesPage/>}
            // При переході на /auth/resources — показується AuthResourcesPage.

]}
]);

export default routes;

// Експортуємо routes, щоб потім використати його в App.tsx у компоненті <RouterProvider router={routes} />.