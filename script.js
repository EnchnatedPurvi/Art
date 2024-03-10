let getFactButton = document.getElementById('add-fact')
getFactButton.addEventListener('click', function() {
 let facts = document.getElementById('facts')
 let newFact = prompt('Enter a new facts:')
let createListItem = document.createElement('li')
createListItem.textContent = newFact
facts.appendChild(createListItem)
}) 

//Image Slider
let images = ['images/Last Supper painting.png' , 'images/Mona Lisa painting.jpg' , 'images/Starry Night painting.jfif'
]// array
let currentIndex = 0

function changeImage(direction) { // Tool to use to complete a specific task
  if (direction  === 'next') {
  currentIndex = (currentIndex + 1) % images.length
  }
 // Make an if-statement that uses 'prev' to go backwards
if(direction === 'prev') {
   currentIndex = (currentIndex - 1 +  images.length) %
images.length
 }
let picture = document.getElementById('picture')
picture.src = images[currentIndex] 
}

document.getElementById('left').addEventListener('click',function() {
  changeImage('prev')
})

// Write the right arrow's code here

document.getElementById('right').addEventListener('click', function() {
  changeImage('next')
})





  
