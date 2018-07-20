import * as R from 'ramda'

import book from './mockBook'
import categories from './mockCategories'
import users from "./users"

export const setUsersLocalStorage = async (users) => {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(users));
    }
};

export const setBooksLocalStorage = async books => {
    if (!localStorage.getItem('books')) {
        localStorage.setItem('books', JSON.stringify(books));
    }
};

export const setIsLogInLocalStorage = async () => {
    if (!localStorage.getItem('isLogIn')) {
        localStorage.setItem('isLogIn', JSON.stringify(false));
    }
};
export const setIsAdminLocalStorage = async () => {
    if (!localStorage.getItem('isAdmin')) {
        localStorage.setItem('isAdmin', JSON.stringify(false));
    }
};
setUsersLocalStorage(users);
setBooksLocalStorage(book);
setIsAdminLocalStorage();
setIsLogInLocalStorage();

export const getUsersLocalStorage = () => {
    return JSON.parse(localStorage.getItem('users'));
};
export const getBooksLocalStorage = () => {
    return JSON.parse(localStorage.getItem('books'));
};

export const fetchUser = async (email, password) => {
    return new Promise((resolve) => {
        let users = getUsersLocalStorage();
        let user = users.find(x => x.email === email && x.password === password);
        if (user !== undefined) {
            localStorage.setItem('user', JSON.stringify(user));
        }
        resolve(user);
    });
};

export const fetchAdmin = async (email, password) => {
    return new Promise((resolve) => {
        const admin = users.find(x => x.email === email && email === 'admin@gmail.com' && x.password === password && password === 'aa123456');
        if (admin !== undefined) {
            localStorage.setItem('user', JSON.stringify(admin));
        }
        resolve(admin);
    });
};

export const addUser = async (name, surname, phone, email, password) => {
    return new Promise((resolve) => {
        let users = getUsersLocalStorage();

        users.push({
            id: +users[users.length - 1].id + 1,
            name: name,
            surname: surname,
            phone: phone,
            email: email,
            password: password
        });
        localStorage.setItem('users', JSON.stringify(users));
        resolve(users)
    })
};

export const addBook = async (name, author, pages, description, price, image) => {
    return new Promise((resolve) => {
        let books = getBooksLocalStorage();
        let book = {
            id: +books[books.length - 1].id + 1,
            name,
            author,
            pages,
            description,
            price,
            image
        };

        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
        resolve(book);
    })
};


export const fetchBook = async () => {
    return new Promise((resolve) => {
        let books = getBooksLocalStorage();
        resolve(books);
    });
};

export const loadMoreBook = async ({
                                       offset
                                   }) => {
    return new Promise(resolve => {
        resolve(book)
    })
};

export const fetchBooksById = async (id) => {
    return new Promise((resolve, reject) => {
        const books = R.find(R.propEq('id', id), book);
        resolve(books)
    })
};

export const fetchCategories = async () => {
    return new Promise(resolve => {
        resolve(categories)
    })
};