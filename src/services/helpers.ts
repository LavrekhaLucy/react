// Це — універсальна функція для отримання й парсингу даних із localStorage.

export const retriveLocalStorage =<T>(key:string)=>{
    // Експортується функція retriveLocalStorage з узагальненим типом (<T>) —
    // можна самостійно вказати, який тип очікуєш (наприклад: IUser, ISettings, тощо).
    // Вона приймає один параметр: key — назва ключа в localStorage.



    const object = localStorage.getItem(key) || '';
    // Пробує зчитати значення з localStorage за заданим ключем.
//  Якщо getItem(key) повертає null (тобто нічого не знайдено), буде використано порожній рядок ''.
//     Наприклад: якщо key = 'user', спробує прочитати localStorage.getItem('user').


    if (!object){
        return {} as T;
    }
    // Якщо значення не знайдено (порожній рядок або null), повертається порожній об'єкт, приведений до типу T.
    // Це захист від помилок, щоб не парсити null або "".

const parse=JSON.parse(object);
//     Якщо значення є, воно перетворюється з рядка JSON у звичайний JavaScript-об'єкт.
//  Наприклад: {"accessToken":"123"} → { accessToken: "123" }


return parse as T;
    // Повертає об'єкт у вигляді типу T, який ти вказав при виклику.
}