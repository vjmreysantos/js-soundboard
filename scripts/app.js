

/*
  I can't seem to figure out the short way
  so I went the messy any tedious way and it works.
  I can't wait to see how this is properly done.
*/

const workit = new Audio('./sounds/work_it.wav')
const makeit = new Audio('./sounds/make_it.wav')
const doit = new Audio('./sounds/do_it.wav')
const makesus = new Audio('./sounds/makes_us.wav')
const harder = new Audio('./sounds/harder.wav')
const better = new Audio('./sounds/better.wav')
const faster = new Audio('./sounds/faster.wav')
const stronger = new Audio('./sounds/stronger.wav')
const morethan = new Audio('./sounds/more_than.wav')
const hour = new Audio('./sounds/hour.wav')
const our = new Audio('./sounds/our.wav')
const never = new Audio('./sounds/never.wav')
const ever = new Audio('./sounds/ever.wav')
const after = new Audio('./sounds/after.wav')
const workis = new Audio('./sounds/work_is.wav')
const over = new Audio('./sounds/over.wav')



document.querySelector('#work_it').addEventListener('mouseenter', function() {
  workit.play()
})
document.querySelector('#make_it').addEventListener('mouseenter', function() { 
  makeit.play()
})
document.querySelector('#do_it').addEventListener('mouseenter', function() {
  doit.play()
})
document.querySelector('#makes_us').addEventListener('mouseenter', function() {
  makesus.play()
})
document.querySelector('#harder').addEventListener('mouseenter', function() {
  harder.play()
})
document.querySelector('#better').addEventListener('mouseenter', function() {
  better.play()
})
document.querySelector('#faster').addEventListener('mouseenter', function() {
  faster.play()
})
document.querySelector('#stronger').addEventListener('mouseenter', function() {
  stronger.play()
})
document.querySelector('#more_than').addEventListener('mouseenter', function() {
  morethan.play()
})
document.querySelector('#hour').addEventListener('mouseenter', function() {
  hour.play()
})
document.querySelector('#our').addEventListener('mouseenter', function() {
  our.play()
})
document.querySelector('#never').addEventListener('mouseenter', function() {
  never.play()
})
document.querySelector('#ever').addEventListener('mouseenter', function() {
  ever.play()
})
document.querySelector('#after').addEventListener('mouseenter', function() {
  after.play()
})
document.querySelector('#work_is').addEventListener('mouseenter', function() {
  workis.play()
})
document.querySelector('#over').addEventListener('mouseenter', function() {
  over.play()
})


//---------------- hover - short - attempt ------------------//



// const btns = document.querySelectorAll('.flex-container')
// const audio = document.querySelector('#audio')


// function handleHoverOn(event) {
//   const name = event.target.innerText.toLowerCase().split(' ').join('_')
//   audio.src = `./sounds/${name}.wav`
//   audio.play()
// }

// btns.addEventListener('mouseenter', handleHoverOn)




// --------------------- button click --------------------------- //



// const playButtons = document.querySelectorAll('.flex-container')
// const audio = document.querySelector('#audio')

// function handleplayAudio(event) {
//   const audioPath = event.target.id
//   audio.src = `./sounds/${audioPath}.wav`
//   audio.play()
// }


// playButtons.forEach(audio => {
//   audio.addEventListener('click', handleplayAudio)
  
// })