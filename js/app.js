
const $mainDiv = $('<div>').addClass('main-container')


// const ranWords = () => {
	


// }

 

const alhpebet = 'abcdefghijklmnopqrstuvwxyz'.split('')



let vowels = class {
	constructor (letter,price = 2) {
		this.letter = letter
		this.price = 2
	}

	
}




	const a = new vowels('a')
	const e = new vowels('e')
	const i = new vowels('i')
	const o = new vowels('o')
	const u = new vowels('u')
	const y = new vowels('y')

	console.log(a.price)

const player = class {
	constructor (name, money) {
		this.name = name
		this.money = 0 
	}
	purchaseVowel() {
		
		$('#a').css('color','black')
		$('#e').css('color','black')
		$('#i').css('color','black')
		$('#o').css('color','black')
		$('#u').css('color','black')
		$('#y').css('color','black')
		user.money = user.money - 2
		console.log(user.money) 
		
	}

}


	
const user = new player ('user')




$(() => {
	const $mainDiv = $('<div>').addClass('main-container')
	$('body').append($mainDiv)

	const ranWord = words[Math.floor(Math.random() * words.length)]
	
	for (let i = 0; i < ranWord.length; i ++) {
		const $splith1 = $('<h1>').addClass('main-word-letters').text(`${ranWord[i]}`.toUpperCase())
		$splith1.addClass(`${ranWord[i]}`)

		$('.main-container').append($splith1)
	}


	const $div = $('<div>').addClass('container')
	console.log($div)
	$('body').append($div)
	const $letterDiv = $('<div>').addClass('letters')



	for (let i = 0; i < alhpebet.length; i++) {
		const $h1 = $('<h1>').text(alhpebet[i])
		$h1.text(alhpebet[i].toUpperCase())
		$h1.attr('id',`buttn`)
		$('.container').append($letterDiv)
		$('.letters').append($h1) 
			
	}

	user.purchaseVowel()

	
	const hoverFunction = () => {
		$('.letters').mouseover(event => {
		$(event.target).css('color','black')
		})
		$('.letters').mouseout(event => {
		$(event.target).css('color','rgb(254, 189, 105)')
			
		})
	}

	// ranWords()	

	// hoverFunction()	

		// const playerGuess = () => {
			// functionToRun()
			$('.letters').click(event => { 
				$(event.target).css('color','grey')
				for (let i = 0; i < ranWord.length; i ++) {	
					if (($(event.target).text().toLowerCase() === ranWord[i])) {
					// const $foundLetter = $('<h1>').text(`${ranWord[i]}`)
					$(`.${ranWord[i]}`).css('color','red')
					console.log ('founyou')
					}
					
					}
			})
		// }

			
// playerGuess()

console.log(ranWord[0])
})




































