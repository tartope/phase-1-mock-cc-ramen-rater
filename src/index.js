// write your code here
//See all ramen images in the div with the id of ramen-menu. 
//When the page loads, request the data from the server to get all the ramen objects. 
//Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

function getRestaurants() {
    return fetch('http://localhost:3000/ramens')
        .then(response => response.json())
        .then(data => (data));
}
// console.log(getRestaurants())

function buildImages(){
    const pictures = document.getElementById('ramen-menu');
    pictures.appendChild('img').textContent('ramens');
    
}