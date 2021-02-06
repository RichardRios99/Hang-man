//create a hangman game 
//player should be able to a see a blank word of random length 
//player should be able to see the alhpebet with each letter being clickable so that player can click on a letter he beilves is on the word 
//player can also purchase a vowl with points acculumated from preious guesses 
//player should be able to guess the word at any time 
//wrong guesses will result in subtraction of points 
//after each round the player should be able to continue playing 


//visuals 
//the screen broken up into two sides 
//the left is for the player the right is for the computer
// a timer of 3 minutes 
//a score for the player (how many games the player one)
//a score fot thr cpu

//first step: 
//create a random word generator. 
// but all words going to be used in an arr
 	 
// $(() => {

// })

// const words = ['apples','bannaa','jen','richie','beach','happy','money','sunday',]
// import * words from 'js/words.js'
import {words} from "words.js"
const $mainDiv = $('<div>').addClass('main-container')
// $('body').append($mainDiv)
// console.log($mainDiv)

const ranWords = () => {
	const $mainDiv = $('<div>').addClass('main-container')
	$('body').append($mainDiv)

	let ranWord = words[Math.floor(Math.random() * words.length)]
	// const $wordh2 = $('<h1>').text(`${ranWord}`.toUpperCase())
	// $wordh2.attr('id','main-word')
	for (let i = 0; i < ranWord.length; i ++) {
		const $splith1 = $('<h1>').addClass('main-word-letters').text(`${ranWord[i]}`.toUpperCase())

		$('.main-container').append($splith1)
	}

	// $('body').append($splith1)
}

// let showingWords = ranWords()
// console.log(showingWords)

// const $wordh1= $('<h1>').text(`${(ranWords())}`)
// $('body').append($wordh1)

// console.log(ranWords())

// const blankLetter = (functionToRun) => {
// 	const word = functionToRun()
// 	console.log(word.split(''))
// }

// blankLetter(ranWords) 

const alhpebet = 'abcdefghijklmnopqrstuvwxwyz'.split('')

// a

let vowels = class {
	constructor (letter,price = 2) {
		this.letter = letter
		this.price = 2
	}

	// purchaseVowel () {
	// 	// when the user has two or dollors the user can purchase a vowel
	// 	$('#lettera').css('color','red')
	// 	$('#lettere').css('color','red')
	// 	$('#letteri').css('color','red')
	// 	$('#lettero').css('color','red')
	// 	$('#letteru').css('color','red')
	// 	$('#lettery').css('color','red')

	// 	}
		// use an if statement to meet this conditon. 
		//when this condition is met all vowels become clickable (change css stlyeling)
}

// player.purchaseVowel()


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
		// when the user has two or dollors the user can purchase a vowel
		
		$('#a').css('color','red')
		$('#e').css('color','red')
		$('#i').css('color','red')
		$('#o').css('color','red')
		$('#u').css('color','red')
		$('#y').css('color','red')
		user.money = user.money - 2
		console.log(user.money) 
		
	}

}


	
const user = new player ('user')




$(() => {



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
		// ($h1).on('click', (event) => {
		// 	console.log('hello')
		// })	
	}
// console.log("hello")
user.purchaseVowel()



const hoverFunction = () => {
	$('.letters').mouseover(event => {
	$(event.target).css('color', 'black')
	})
	$('.letters').mouseout(event => {
	$(event.target).css('color','rgb(254, 189, 105)')
		
	})
}
ranWords()	

hoverFunction()	


})




































