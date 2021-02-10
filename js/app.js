
const alhpebet = 'abcdefghijklmnopqrstuvwxyz'.split('')

const player = class {
	constructor (name, money) {
		this.name = name
		this.money = 0 
	}
}

const user = new player ('user')
const wrongLetters = [] 


$(() => {

const $mainDiv = $('<div>').addClass('main-container')
const $button = $('<button>').addClass('guess-button')
$('.main-container').append($button)
$('body').append($mainDiv)

const ranWord = words[Math.floor(Math.random() * words.length)]
	
	for (let i = 0; i < ranWord.length; i ++) {
		const $splith1 = $('<h1>').addClass('main-word-letters').text(`${ranWord[i]}`.toUpperCase())
		$splith1.addClass(`${ranWord[i]}`)
		$('.main-container').append($splith1)
	}

const $div = $('<div>').addClass('container')
$('body').append($div)
const $letterDiv = $('<div>').addClass('letters')
	
	for (let i = 0; i < alhpebet.length; i++) {
		const $h1 = $('<h1>').text(alhpebet[i])
		$h1.text(alhpebet[i].toUpperCase())
		$h1.attr('id',`${alhpebet[i]}`)
		$('.container').append($letterDiv)
		$('.letters').append($h1) 
		if ($h1.text() === 'A' || $h1.text() === 'E' || 
			$h1.text() === 'I' || $h1.text() === 'O' || 
			$h1.text() === 'U' || $h1.text() === 'Y') { $h1.addClass('vowels')
		}
		else {
			$h1.addClass('nonVowel')
		}
			
	}

const showVowel = () => {
	$('.vowels').css('color','rgb(254, 189, 105)')
}

const clickVowel = () => {
	$('.vowels').click(event => {
		$(event.target).css('color','rgb(55, 71, 90)')
			for (let i = 0; i < ranWord.length; i ++) {
				if (($(event.target).text().toLowerCase() === ranWord[i])) {
					$(`.${ranWord[i]}`).css('color','rgb(219, 58, 52)')
					user.money ++
				} else {
					user.money --
				}
			}	
	})
}
	
$('.nonVowel').click(event => { 
$(event.target).css('color','rgb(55, 71, 90)')
	for (let i = 0; i < ranWord.length; i ++) {	
		console.log(alhpebet)
		if (($(event.target).text().toLowerCase() === ranWord[i])) {
			$(`.${ranWord[i]}`).css('color','red')
			user.money ++
			console.log(user.money)
		// }  if (user.money >= 2) {
		// 		showVowel()
		// 		clickVowel()
			} else  {
				wrongLetters.push(($(event.target)))
				console.log(wrongLetters)
				// const unique = [...new Set(wrongLetters) ]
				// console.log(unique)

				
				

			} if (user.money >= 2) {
				showVowel()
				clickVowel()
			} 		 
	}
})
		
})




// console.log(30 - 4 * 6 )




































