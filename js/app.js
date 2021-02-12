// welcomeModal()
const alhpebet = 'abcdefghijklmnopqrstuvwxyz'.split('')

const player = class {
	constructor (name, money) {
		this.name = name
		this.money = 0 
	}
}

const user = new player ('user')
const usedLetters = [] 
const wrongGuesses = []
const wrongLetters = []
const correctGueses = []

function removeDuplicates(array) {
  array.splice(0, array.length, ...(new Set(array)))
}

	const ranWord = words[Math.floor(Math.random() * words.length)]

const lostModal = () => {
	// break
	removeDuplicates(wrongLetters)
	const $lostModalBg = $('<div>').addClass('modal-bg')
	$lostModalBg.attr('id','lost-modal-bg')
	$('body').append($lostModalBg)
	const $lostModal = $('<div>').addClass('modal-popup')
	$lostModal.attr('id','lost-modal')
	$('#lost-modal-bg').append($lostModal)
	const $losingMessage = $('<h1>').addClass('losingMessage')
	$losingMessage.text(`Game Over. the word was ${ranWord} play again?`.toUpperCase())
	$('#lost-modal').append($losingMessage)
}

const winningModal = () => {
	// removeDuplicates(correctGueses)
	const $winningModalBg = $('<div>').addClass('modal-bg')
	$winningModalBg.attr('id','winning-modal-bg')
	$('body').append($winningModalBg)
	const $winningModal = $('<div>').addClass('modal-popup')
	$winningModal.attr('id','winning-modal')
	$('#winning-modal-bg').append($winningModal)
	const $winningMessage = $('<h1>').addClass('winningMessage')
	$winningMessage.text(`congrats you guessed ${ranWord} correctly`.toUpperCase())
	$('#winning-modal').append($winningMessage)
}



$(() => {

	welcomeModal()

	const $mainDiv = $('<div>').addClass('main-container')
	// const $button = $('<button>').addClass('guess-button')
	// $('.main-container').append($button)
	$('body').append($mainDiv)

	// const ranWord = words[Math.floor(Math.random() * words.length)]
	
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
		usedLetters.push($(event.target).text().toLowerCase())
		for (let i = 0; i < usedLetters.length; i++) {
			if (ranWord.includes(usedLetters[i]) === false ) {
				console.log(`${usedLetters[i]} is not in the word`)
			}

		}	
		// console.log(usedLetters)
			$(event.target).css('color','rgb(55, 71, 90)')
				for (let i = 0; i < ranWord.length; i ++) {
					if (($(event.target).text().toLowerCase() === ranWord[i])) {
						correctGueses.push($(event.target))
						// removeDuplicates(correctGueses)
						// console.log(correctGueses)
						// winningModal()
						$(`.${ranWord[i]}`).css('color','red')
						user.money ++
					} else {
						user.money --
					}
				}	
			})
	}  

	
	$('#guess-button').click(event => {
		let $userGuess = $('#user-guess').val().toLowerCase()
		if ($userGuess === ranWord) {
			winningModal()
			console.log('it works')
			$('.main-word-letters').css('color','red')
			// winningModal()
		}
		if ($userGuess !== ranWord) {
			wrongGuesses.push($userGuess)
			console.log(wrongGuesses)
		}
		if (wrongGuesses.length === 2) {
			lostModal()
		}
	})

	$('.nonVowel').click(event => { 
	usedLetters.push($(event.target).text().toLowerCase())
	// console.log(usedLetters)
	$(event.target).css('color','rgb(55, 71, 90)')
		for (let i = 0; i < ranWord.length; i ++) {	
		// console.log(alhpebet)
			if (($(event.target).text().toLowerCase() === ranWord[i])) {
				correctGueses.push($(event.target))
				// removeDuplicates(correctGueses)
				console.log(correctGueses)
				// winningModal()
				
				$(`.${ranWord[i]}`).css('color','red')
				user.money ++
			} if (correctGueses.length === ranWord.length) {
				winningModal()
			}
			
		}
	
		if (user.money >= 2) {
			showVowel()
			clickVowel()
		}
		
		for (let i = 0; i < usedLetters.length; i++) {
			if (ranWord.includes(usedLetters[i]) === false ) {
				// console.log(`hello`)
				wrongLetters.push(`${usedLetters[i]}`)
				removeDuplicates(wrongLetters)
				console.log(wrongLetters)
				

			}
			if (wrongLetters.length === 10) {
				$('.main-word-letters').css('color','red')
				removeDuplicates(wrongLetters)
				lostModal()
			}
		} 
	})

})







































