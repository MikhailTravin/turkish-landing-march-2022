/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Pagination, Grid } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.reviews-page__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.reviews-page__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Grid],
			autoHeight: false,
			slidesPerView: 6,
			grid: {
				rows: 2,
				fill: 'column',
			},

			// Пагинация
			pagination: {
				el: '.reviews-page__dotts',
				clickable: true,
			},

			// Брейкпоинты
			breakpoints: {
				0: {
					grid: {
						rows: 1,
						fill: 'rows',
					},
					slidesPerView: 1,
					loop: false,
					autoHeight: true,
					observer: true,
					observeParents: true,
					observeSlideChildren: true,
				},
				480: {
					grid: {
						rows: 1,
						fill: 'rows',
					},
					slidesPerView: 1,
					loop: false,
					autoHeight: true,
					observer: true,
					observeParents: true,
					observeSlideChildren: true,
				},
				768: {
					grid: {
						rows: 1,
						fill: 'rows',
					},
					slidesPerView: 1,
					loop: false,
					autoHeight: true,
					observer: true,
					observeParents: true,
					observeSlideChildren: true,
				},
				992: {
					grid: {
						rows: 1,
						fill: 'rows',
					},
					slidesPerView: 1,
					loop: false,
					autoHeight: true,
					observer: true,
					observeParents: true,
					observeSlideChildren: true,

				},
				1201: {
					slidesPerView: 6,

				},
			},
			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});