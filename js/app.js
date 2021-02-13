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
let stickman = []

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
	$losingMessage.text(`Game Over! the word was "${ranWord}"`.toUpperCase())
	$('#lost-modal').append($losingMessage)



	const $lostModalButton = $('<button>')
	$lostModalButton.attr('id','lost-modal-buttn')

	$lostModalButton.text('Try Again')
	$('#lost-modal').append($lostModalButton)

	$('#lost-modal-buttn').click(event => {
		location.reload()
	})
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
	$winningMessage.text(`congratulations! you guessed "${ranWord}" correctly`.toUpperCase())
	$('#winning-modal').append($winningMessage)
	const $winModalButton = $('<button>')
	$winModalButton.attr('id','win-modal-buttn')

	$winModalButton.text('Play Again')
	$('#winning-modal').append($winModalButton)

	$('#win-modal-buttn').click(event => {
		location.reload()
	})
	// $countDown.hide()
}

// const statingMinutes = 3
// let time = statingMinutes * 60
// const $countDown = $('#timer')


// function beginCountdown() {
// 	const minutes = Math.floor(time/60)
// 	let seconds = time % 60
// 	$countDown.text(`${minutes}:${seconds}`)
// 	time --


// } 


$(() => {
	const statingMinutes = 1
	let time = statingMinutes * 60
	const $countDown = $('#timer')
// let stopTimer = setInterval(beginCountdown,1000)

function beginCountdown() {
	const minutes = Math.floor(time/60)
	let seconds = time % 60
	$countDown.text(`${minutes}:${seconds}`)
	time --
	if ($countDown.text() === '0:0') {
		$countDown.hide()
		$()
		lostModal()
		$('.main-word-letters').css('color','red')

	}
	
	
}

	// 
	const welcomeModal = () => {


	// setInterval(beginCountdown,1000)
	const $firstModalBg = $('<div>').addClass('modal-bg')
	$firstModalBg.attr('id','first-modal-bg')
	$('body').append($firstModalBg)
	const  $firstModal = $('<div>').addClass('modal-popup')
	$firstModal.attr('id','first-popup')
	$('#first-modal-bg').append($firstModal)
	const $wlecomeMessage = $('<h1>').addClass('wlecomeMessage')
	$wlecomeMessage.text('welcome to Hangman'.toUpperCase())
	$('.modal-popup').append($wlecomeMessage)
	const $intrusctions = $('<div>').addClass('intrusctions')
	$('.modal-popup').append($intrusctions)
	const $modalButton = $('<button>')
	$modalButton.attr('id','modal-buttn')

	$modalButton.text('play')
	$('.modal-popup').append($modalButton)

	const $intrusctionsWords = $('<p>').addClass('intrusctionsWords')
	$intrusctionsWords.text('Use the keypad on the left to guess the letters within the hidden word. Vowels are unlocked after 2 correct letters have been revealed. 10 incorret guesses result in a loss. Use the "Guess" bar at anytime to guess the entire word. Two incorret guesses result in a loss. Hurry, time is running out!')
	$('.intrusctions').append($intrusctionsWords)
	$('#modal-buttn').click(event => {
		// $('#first-modal-bg').hide()
		setInterval(beginCountdown,1000)
		$('#first-modal-bg').hide()
		clearInterval(beginCountdown,1000)

	}) 
	// $('.modal-popup').append($intrusctions)




}
// welcomeModal(
// 	const statingMinutes = 3
// 	let time = statingMinutes * 60
// 	const $countDown = $('#timer')


// function beginCountdown() {
// 	const minutes = Math.floor(time/60)
// 	let seconds = time % 60
// 	$countDown.text(`${minutes}:${seconds}`)
// 	time --
// }

// 	// for (let i = 0; i < alhpebet.length; i++) {
	// 	$('<img/>',{
	// 				src:'https://cdn.pixabay.com/photo/2013/07/12/17/12/sad-151795_960_720.png',
	// 				class:'stickman',
	// 				id: `alhpebet[i]`,
	// 			})
	// }

	// stickman.push($('#man1'))
	// stickman.push($('#man2'))
	// stickman.push($('#man3'))
	// stickman.push($('#man4'))
	// stickman.push($('#man5'))
	// stickman.push($('#man6'))
	// stickman.push($('#man7'))
	// stickman.push($('#man8'))
	// stickman.push($('#man9'))
	// stickman.push($('#man10'))
	// $('body').append($countDown)
	$('.stickman').hide()
	console.log(stickman)
	// welcomeModal(setInterval(beginCountdown,1000))

	// setInterval(beginCountdown,1000)

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
		for (let j = 0; j < usedLetters.length; j++) {
			if (ranWord.includes(usedLetters[j]) === false ){
				
				
				$(`#man${j}`).show()
				// $('.rope-box').append(`.stickman`)
				console.log(`${usedLetters[j]} is not in the word`)
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
			$('.main-word-letters').css('color','red')
			// ($countDown).hide()

			winningModal()
			$countDown.hide()

			console.log('it works')
			// $('.main-word-letters').css('color','red')
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
				$countDown.hide()
			}
			
		}
	
		if (user.money >= 2) {
			showVowel()
			clickVowel()
		}
		
	// for(let j = 0; j < stickman.length; j++ ){
		for (let i = 0; i < usedLetters.length; i++) {
			if (ranWord.includes(usedLetters[i]) === false ) {

				
				$(`#man${i}`).show()
				// $('.rope-box').append(`#man${i}`)
				// for(let j = 0; j < stickman.length; j++ ){
				// $(`#man${Math.floor(Math.random()*10)}`).show()
		
				wrongLetters.push(`${usedLetters[i]}`)
				removeDuplicates(wrongLetters)
				console.log(wrongLetters)
				

			}
			if (wrongLetters.length === 10) {
				$('.main-word-letters').css('color','red')
				removeDuplicates(wrongLetters)
				lostModal()
				$countDown.hide()

			}
	
	}


	})




})

// https://i.pinimg.com/originals/c1/02/b5/c102b50a8f497e337bc178fda36e0610.png

// console.log(Math.floor(Math.random() * -6) -1 )



































