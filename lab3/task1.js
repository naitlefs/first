const GENDER = ['м', 'ж'];

let user = {
    surname: '',
    gender: '',
    age: 0,
}

while (user.surname === null || user.surname.length === 0) {
    user.surname = prompt('Введите свою фамилию', '');
}

while (user.gender === null || user.gender.length === 0 || GENDER.indexOf(user.gender) === -1) {
    user.gender = prompt('Введите свой пол(м / ж)', '');
}

while (user.age === 0) {
    user.age = parseInt(prompt('Введите свой возраст', 0));
}

const resultString = 'ФИО: ' + user.surname + '\n' +
    'Пол: ' + user.gender + '\n' +
    'Возраст: ' + user.age + '\n' +
    'Все верно?';

if (confirm(resultString)) {
    alert('Молодец, ' + user.surname);
} else {
    alert('Ошибка в данных');
}
