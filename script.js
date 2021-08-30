var baseURL='https://dog.ceo/api'
var dogBreeds= document.getElementById('dog-breeds')
var images =document.getElementById('images')

console.log(dogBreeds)

function generateImages(urls, breedName){
  images.innerHTML=''
  for (var i = 0; i < urls.length; i++) {
    var url= urls[i]
    var img = document.createElement('img')
    img.setAttribute('src', url)
    img.setAttribute('alt', breedName)
    images.appendChild(img)


  }

}
function getImages(event){
  var breed= event.target.innerText
  fetch(baseURL + '/breed/'+ breed +'/images')
  .then(function(response) {
    return response.json()
  }).then(function(data){
    generateImages(data.message, breed)
    })
  }

function generateList(breeds){
console.log(breeds)
for (var i=0; i <breeds.length; i++) {
  var a = document.createElement('a')
  a.innerText = breeds[i]
  a.setAttribute('href', '#')
  a.setAttribute('class', 'd-block')
  a.addEventListener('click', getImages)

  dogBreeds.appendChild(a)
}
}

fetch(baseURL + '/breeds/list/all')
.then(function(response) {
  return response.json()

})
.then(function(data){
var breeds= Object.keys(data.message)
generateList(breeds)

})
