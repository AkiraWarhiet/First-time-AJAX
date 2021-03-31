//review
var obj = {
    movie: "hawaii 5-0",
    budget: 63000000,
    genres: {
        id: 18,
        name: "Drama"
    }
}
//just reviewing making objects and all that
console.log(obj.movie)
console.log(obj.genres.name)
//end review
//adding JSON (JavaScript Object Notation)
//Using XML.
// - dif between XML and HTML is XML is for storage and
//   such and you can make you own tags. For example...
//   in HTML you have predefined tags like <h1> but in 
//   XML you can do whatever like <Paladin>

//convert javascript Object to JOSN

var jsonString = JSON.stringify(obj)
console.log(jsonString)
//just made object into string so you can no longer get
//individual pieces

//convert json string back to JavaScript object using
//parse method

var backToObject = JSON.parse(jsonString)
console.log(backToObject)

//event listener for when window is loaded
window.addEventListener("load", initalizePage)

function initalizePage(){
    //when page loaded it will have this junk
    document.getElementById("movieTitle").innerHTML = backToObject.movie
    document.getElementById("desc").innerHTML = backToObject.genres.name
}
//API stands for Application Programming Interface.
//
//For Example. When you imbed a YouTube video, that
//embedding HTML text you copy is actually an API.
//It is a gateway for you to get data from another
//source and display it as your own. Another good
//example of this is Google Fonts

//now we just signed up on a website at https://www.themoviedb.org
//went to settings>API and entered a bunch of junk to get the API.
//gives you a link called "Example API Request" like mine was:
//https://api.themoviedb.org/3/movie/550?api_key=3e10d7f3f79c11b4421becd92e8b722f
//and we go to that and its a big string

//go to the developer link a bit up the page 
//on the left under "Movies" go to "Get Now Playing"
//go to the "Try It" tab and paste your API key into there
//and click send request. This gets you a JSON file with an 
//array of objects called "results"

//to get Joker, you would look at results[0].title

//AJAX - Asynchronous Javascript And Xml
//tbh i was looking at how to spell Asynchronous while
//she was explaining what it does so you might wanna google that

//OH WAIT OKAY. So basically when something is synchronous thats
//when your code is doing something so it locks up while processing.
//Asynchronous is when it sends that request to a different server
//and you are able to do other stuff while it does its thing
//going to HTML now.