// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//VIDEO

const myVideo = document.getElementById("video");

myVideo.addEventListener('click', function () {
	if (myVideo.paused)
		myVideo.play();
	else
		myVideo.pause();
});

//===========================================================================================

// Контейнер со всеми видео
const videosWrap = document.querySelector('.programs-page__body');


// Обработчик клика
const videoEventHandler = (e) => {
	// Если у e.target нет класа video-item-programs__item, значит данный элемент не является видео
	if (!e.target.classList.contains('video-item-programs__item')) return false;
	const video = e.target,
		allVideos = document.querySelectorAll('.video-item-programs__item');

	const overlay = document.querySelectorAll('.video-item-programs__play');
	// Останавливаем все видео
	allVideos.forEach((source, index) => {
		if (source === video) return;
		source.classList.remove('isPlaying');
		source.pause();
		overlay[index].classList.remove('_active');
	})
	// Если у видео есть класс isPlaying - тогда остановить его, если нет - запустить
	if (video.classList.contains('isPlaying')) {
		video.closest('div').querySelector('.video-item-programs__play').classList.remove('_active');
		video.pause()
	} else {
		video.closest('div').querySelector('.video-item-programs__play').classList.add('_active');
		video.play()
	}
	video.classList.toggle('isPlaying')
}

// Event listener на контейнер со всеми видео
videosWrap.addEventListener('click', (e) => videoEventHandler(e))

//========================================================================================================================================================

//TIMER//

document.addEventListener('DOMContentLoaded', () => {
	const newYear = new Date('Mar 9 2022 00:00:00');

	const daysVal = document.querySelector('.time-count__days .time-count__val');
	const hoursVal = document.querySelector('.time-count__hours .time-count__val');
	const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
	const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

	const daysVal_2 = document.querySelector('.time-count__days .time-count__val-2');
	const hoursVal_2 = document.querySelector('.time-count__hours .time-count__val-2');
	const minutesVal_2 = document.querySelector('.time-count__minutes .time-count__val-2');
	const secondsVal_2 = document.querySelector('.time-count__seconds .time-count__val-2');

	const daysVal_3 = document.querySelector('.time-count__days .time-count__val-3');
	const hoursVal_3 = document.querySelector('.time-count__hours .time-count__val-3');
	const minutesVal_3 = document.querySelector('.time-count__minutes .time-count__val-3');
	const secondsVal_3 = document.querySelector('.time-count__seconds .time-count__val-3');

	const daysVal_4 = document.querySelector('.time-count__days .time-count__val-4');
	const hoursVal_4 = document.querySelector('.time-count__hours .time-count__val-4');
	const minutesVal_4 = document.querySelector('.time-count__minutes .time-count__val-4');
	const secondsVal_4 = document.querySelector('.time-count__seconds .time-count__val-4');

	function declOfNum(number, titles) {
		let cases = [2, 0, 1, 1, 1, 2];
		return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
	}

	const timeCount = () => {
		let now = new Date();
		let leftUntil = newYear - now;

		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
		let seconds = Math.floor(leftUntil / 1000) % 60;

		daysVal.textContent = days;
		hoursVal.textContent = hours;
		minutesVal.textContent = minutes;
		secondsVal.textContent = seconds;

		daysVal_2.textContent = days;
		hoursVal_2.textContent = hours;
		minutesVal_2.textContent = minutes;
		secondsVal_2.textContent = seconds;

		daysVal_3.textContent = days;
		hoursVal_3.textContent = hours;
		minutesVal_3.textContent = minutes;
		secondsVal_3.textContent = seconds;

		daysVal_4.textContent = days;
		hoursVal_4.textContent = hours;
		minutesVal_4.textContent = minutes;
		secondsVal_4.textContent = seconds;
	};

	timeCount();
	setInterval(timeCount, 1000);
});
