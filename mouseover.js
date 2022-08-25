const block = document.querySelectorAll('main .development .block') //обращение ко всему элементу
const info_1 = document.querySelector('main .development .block #info_1') //обращение к id
const info_2 = document.querySelector('main .development .block #info_2')
const info_3 = document.querySelector('main .development .block #info_3')

for (let blocks of block){ //при наводке на опредленный блок выполняется функция
	blocks.addEventListener('mouseover', function () { //при наведении на блок (каждый, тк там перебор элементов)

		if (blocks.querySelector('.info').id == 'info_1') { //сравнивается тот ли блок по id
			info_1.style.opacity = 1 //если блок соответствует id то выполнятеся функция наведения на определенный блок
			let price = document.querySelector('main .development .block ' + '#' + blocks.querySelector('.info').id +' .price')
			let span = document.querySelector('main .development .block '+ '#' + blocks.querySelector('.info').id + ' span')
				price.addEventListener('mouseover', function(){ //в
					span.style.left = 0
				})
				price.addEventListener('mouseout', function () { //из
					span.style.left = -100 + '%'
				})

		} else if (blocks.querySelector('.info').id == 'info_2'){
			info_2.style.opacity = 1
			let price = document.querySelector('main .development .block ' + '#' + blocks.querySelector('.info').id +' .price')
			let span = document.querySelector('main .development .block '+ '#' + blocks.querySelector('.info').id + ' span')
				price.addEventListener('mouseover', function(){
					span.style.left = 0
				})
				price.addEventListener('mouseout', function () {
					span.style.left = -100 + '%'
				})

		} else if (blocks.querySelector('.info').id == 'info_3'){
			info_3.style.opacity = 1
			let price = document.querySelector('main .development .block ' + '#' + blocks.querySelector('.info').id +' .price')
			let span = document.querySelector('main .development .block '+ '#' + blocks.querySelector('.info').id + ' span')
				price.addEventListener('mouseover', function(){
					span.style.left = 0
				})
				price.addEventListener('mouseout', function () {
					span.style.left = -100 + '%'
				})
		}
	})

	blocks.addEventListener('mouseout', function () {
		info_1.style.opacity = 0;
		info_2.style.opacity = 0;
		info_3.style.opacity = 0;
	})
}
