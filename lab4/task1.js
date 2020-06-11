window.onload = () => {
    const days = {
        0: ' Воскресенье',
        1: ' Понедельник',
        2: 'о Вторник',
        3: ' Среду',
        4: ' Четвер',
        5: ' Пятницу',
        6: ' Субботу',
    };
    const months = {
        1: 'Января',
        2: 'Февраля',
        3: 'Марта',
        4: 'Апреля',
        5: 'Мая',
        6: 'Июня',
        7: 'Июля',
        8: 'Августа',
        9: 'Сентября',
        10: 'Октября',
        11: 'Ноября',
        12: 'Декабря',
    }

    let year, monthNumber, day;

    do {
        year = parseInt(prompt('Введите Ваш год рождения'))
    } while (isNaN(year));

    do {
        monthNumber = prompt('Введите Ваш месяц рождения (в цифрах)');
    } while (isNaN(monthNumber));

    do {
        day = prompt('Введите Ваш день рождения');
    } while (isNaN(day));

    let date = new Date(year, monthNumber, day);

    console.log(date)

    let text = document.getElementById('text');
    text.innerHTML = `Я родился ${day} ${months[date.getMonth()]} ${date.getFullYear()} года в${days[date.getDay()]}`
};