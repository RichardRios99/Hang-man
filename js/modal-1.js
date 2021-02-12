const welcomeModal = () => {
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
	const $modalButton = $('<button/>',{
		text:'play',
		id: 'modal-buttn',
		click: function () { $('.modal-bg').hide()}
	})
	$('modal-buttn').text('play')
	$('.modal-popup').append($modalButton)

	const $intrusctionsWords = $('<p>').addClass('intrusctionsWords')
	$intrusctionsWords.text('Use the keypad on the left to guess the letters within the hidden word. Vowels are unlocked after 2 correct letters have been revealed. 10 incorret guesses result in a loss. Use the "Guess" bar at anytime to guess the entire word. Two incorret guesses result in a loss. Hurry, time is running out!')
	$('.intrusctions').append($intrusctionsWords)
	// $('.modal-popup').append($intrusctions)




}


// const winningModal = () => {
// 	const $winingModalBg = $('<div>').addClass('modal-bg')
// 	$winningModalBg.attr('id','lost-modal-bg')
// 	$('body').append($winningModalBg)
// 	const  $winningModal = $('<div>').addClass('modal-popup')
// 	$winningModal.attr('id','lost-modal')
// 	$('#lost-modal-bg').append($winningModal)
// 	const $winningMessage = $('<h1>').addClass('losingMessage')
// 	$winningMessage.text(`congrats you guessed ${ranWord} correctly`.toUpperCase())
// 	$('.lost-modal').append($winningMessage)
// }









