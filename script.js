// Задача: Управление кинотеатрами
// Цель: Создать систему для управления информацией о кинотеатрах, их залами и представлениями.
// Шаг 1: Определение структуры данных
// Кинотеатр: объект с полями id, название, адрес и залы (массив залов).
// Зал: объект с полями id, название и вместимость.
// Представление: объект с полями id, название фильма, время начала и залID.

// Шаг 2: Создайте данные
// Создайте четыре разных объекта для кинотеатров, включая несколько залов в каждом. Добавьте несколько представлений в разные залы.
/* Пример данных */
const cinemas = [
  {
    id: 1,
    name: "Кинотеатр Аврора",
    address: "Улица Пушкина, дом Колотушкина",
    halls: [
      { id: 101, name: "Зал 1", capacity: 100 },
      { id: 102, name: "Зал 2", capacity: 150 }
    ]
  },
  {
    id: 2,
    name: "Кинотеатр Спутник",
    address: "Пролетарская улица, дом 1",
    halls: [
      { id: 201, name: "Зал 1", capacity: 120 },
      { id: 202, name: "Зал 2", capacity: 140 },
      { id: 203, name: "VIP Зал", capacity: 50 }
    ]
  },
  {
    id: 3,
    name: 'Кинотеатр Порт Находка',
    address: 'Прибрежная улица, дом 1',
    halls: [
      { id: 301, name: 'Большой', capacity: 150 },
      { id: 302, name: 'Малый', capacity: 70 }
    ]
  },
  {
    id: 4,
    name: 'Кинотеатр Лотос Плаза',
    address: 'Лесной проспект, дом 47',
    halls: [
      { id: 401, name: 'Большой', capacity: 150 },
      { id: 402, name: 'Малый', capacity: 70 },
      { id: 403, name: 'Средний', capacity: 70 }
    ]
  },
  {
    id: 5,
    name: '<Кинотеатр Балкания>',
    address: 'Купчинская улица, дом 5',
    halls: [
      { id: 501, name: 'Комфорт-плюс', capacity: 50 },
      { id: 502, name: 'Зал 1', capacity: 80 },
      { id: 503, name: 'Зал 2', capacity: 90 }
    ]
  },
  {
    id: 6,
    name: '<Кинотеатр Тетрис>',
    address: 'проспект Александра Невского, дом 5',
    halls: [
      { id: 601, name: 'Зал Первый', capacity: 100 },
      { id: 602, name: 'Зал Второй', capacity: 120 },
      { id: 603, name: 'Зал Третий', capacity: 130 }
    ]
  }
];

// Представления
const shows = [
  { id: 1, movieTitle: "Интерстеллар", startTime: "18:00", hallId: 101 },
  { id: 2, movieTitle: "Начало", startTime: "20:00", hallId: 101 },
  { id: 3, movieTitle: "Матрица", startTime: "19:00", hallId: 202 },
  { id: 4, movieTitle: "Начало", startTime: "20:00", hallId: 102 },
  { id: 5, movieTitle: "Пираты Карибского моря", startTime: "21:00", hallId: 202 },
  { id: 6, movieTitle: "Титаник", startTime: "20:00", hallId: 203 },
  { id: 7, movieTitle: "Терминатор", startTime: "10:00", hallId: 301 },
  { id: 8, movieTitle: "Сибирский Цирюльник", startTime: "20:00", hallId: 302 },
  { id: 9, movieTitle: "Время", startTime: "20:00", hallId: 401 },
  { id: 10, movieTitle: "Операция Ы", startTime: "21:00", hallId: 402 },
  { id: 11, movieTitle: "Гарри Поттер", startTime: "23:00", hallId: 403 },
  { id: 12, movieTitle: "Зеленяа миля", startTime: "19:00", hallId: 403 },
  { id: 13, movieTitle: "Побег из Шоушенка", startTime: "20:00", hallId: 501 },
  { id: 14, movieTitle: "Буратино", startTime: "22:00", hallId: 501 },
  { id: 15, movieTitle: "Война миров", startTime: "20:20", hallId: 502 },
  { id: 16, movieTitle: "Миссия невыполнима", startTime: "22:20", hallId: 502 },
  { id: 17, movieTitle: "Ванильное небо", startTime: "17:00", hallId: 503 },
  { id: 18, movieTitle: "Игры разума", startTime: "19:30", hallId: 503 },
  { id: 19, movieTitle: "Девушка с татуировкой друкона", startTime: "19:55", hallId: 504 },
  { id: 20, movieTitle: "Вторая жизнь Уве", startTime: "21:55", hallId: 504 },
  { id: 21, movieTitle: "Начало", startTime: "20:15", hallId: 601 },
  { id: 22, movieTitle: "Титаник", startTime: "20:22", hallId: 602 },
  { id: 23, movieTitle: "Буратино", startTime: "16:00", hallId: 603 },
  { id: 24, movieTitle: "Сибирский цирюльник", startTime: "18:10", hallId: 603 },

];
// Шаг 3: Задачи для выполнения
// Фильтрация представлений по кинотеатру:
// Напишите функцию, которая принимает id кинотеатра и массив представлений, и возвращает все представления для этого кинотеатра.
function showsOfNeedCinema(id, shows) {
  return shows.filter(cinema => id === cinema.hallId)
};
// Обработка информации о залах:
// Используя метод forEach, выведите информацию о каждом зале для заданного кинотеатра.
//-----первый вариант---
function aboutHallsNew(cinemas,id=1){
  const needCinema = cinemas.find(cinema => cinema.id === id);
  needCinema.halls.forEach(hall => {
    console.log (`В кинотеатре ${needCinema.name}: ${hall.name} вместительностью ${hall.capacity}`)
  });
};
aboutHallsNew(cinemas)
//------второй вариант---
function aboutHalls(cinemas, id = 1) {
  const needCinema = cinemas.find(cinema => cinema.id === id)
  return `В кинотеатре ${needCinema.name} eсть залы: ${needCinema.halls.map(hall => `${hall.name} вместительностью ${hall.capacity}`)}`
}

// Создание списка названий фильмов:
// Используйте метод map для создания массива названий фильмов из массива представлений.
const movieTitleArray = shows.map(movie => movie.movieTitle);

// Использование Object.keys и Object.values:
// Для заданного кинотеатра выведите все ключи и значения его свойств.
function infoAboutCinema(id, cinemas) {
  const needCinema = cinemas.find(cinema => id === cinema.id);
  const keysCinema = Object.keys(needCinema);
  const valuesCinema = Object.values(needCinema);
  return { keysCinema, valuesCinema }
};

// Деструктуризация:
// Используйте деструктуризацию для извлечения название и адрес из объекта кинотеатра при его выводе.
function nameAndAdressCinema(cinemas) {
  cinemas.map(cinema => {
    const { name, address } = cinema;
    console.log(`${name} находится по адресу ${address}`)
  })
}

// Функция с неограниченным количеством аргументов:
// Создайте функцию showTimings, которая принимает неограниченное количество id представлений и выводит информацию о времени начала каждого из них.
function showTimings(shows, ...id) {
  shows
    .filter(show => id.includes(show.id))
    .map(show => console.log(`фильм ${show.movieTitle} начнется в ${show.startTime}`))
}
