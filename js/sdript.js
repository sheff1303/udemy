const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMoviDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из просмотреных фильмов?", "");
const b = prompt("на сколько оцените его?", "");
const c = prompt("Один из просмотреных фильмов?", "");
const d = prompt("На сколько оцените его?", "");

personalMoviDB.movies[a] = b;
personalMoviDB.movies[c] = d;

console.log(personalMoviDB);
