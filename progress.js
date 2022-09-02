const progress = document.querySelector('.progress')//нежен для постоянного обновления действия при скролле окна
const up = document.querySelector('.up')
const credo = document.querySelector('.credo') //нужен для определя местоположения блока

window.addEventListener('scroll', progressBar) //событие при скролле (функция)

function progressBar(e) {
	let windowScroll = document.body.scrollTop || document.documentElement.scrollTop //один из параметров должен предоствить параметр прокрутки страницы
	// при прокрутке страницы выводит нам в самую верхнюю точку (top)
	let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight //высота нашей станицы
	progress.style.width = windowScroll / windowHeight * 100 + '%'

	if (credo.getBoundingClientRect().y>0) { //чтобы при определенной высоте добавить кнопку, которая перенправляет вначало страницы
		up.style.bottom = -10 + '%';
		up.style.opacity = 0
		} 
		else {
			up.style.bottom = 5 + '%';
			up.style.opacity = 1
			}
}