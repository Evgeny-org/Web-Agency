const button = document.querySelector('.our-projects button')

let more = document.querySelector('#more')
let moreStyle = window.getComputedStyle(more)

let blocks_up = document.querySelector('#blocks_up')
let blocks_upStyle = window.getComputedStyle(blocks_up)
let a = 0

button.onclick = function () {
	// if (moreStyle.display == "none"){
	// 	more.style.display = "block"
	// 	console.log(moreStyle.display)
	//}

	more.style.top = 100 + '%'

	blocks_up.style.marginBottom = a + 400 + 25 + 'px'
	// a += 450

	console.log(blocks_upStyle.marginBottom)
}

