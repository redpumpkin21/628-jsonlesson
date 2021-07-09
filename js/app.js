const $main = $('main')

//asychronus request for fate in our json
$.ajax('./json/data.json')

//when data arrives, do stuff
// .then((data) => {
//     data.forEach((movie, index) => {
//         const $div = $('<div>')
//         $div.html(`<h2 class="movie-title">${movie.title}</h2>
//         <h3 class="movie-release">${movie.release_year}</h3>
//         <img src='${movie.image}'/>`)
//         $main.append($div)
//     })
// })
// .catch((error) => {
//     console.log(error)
// })

// Asynchronous Request for the Data in our JSON
$.ajax("./json/data.json")
// when the data arrives, do stuff
.then((data) => { 
    // loop over the array of movies
    data.forEach((movie, index) => {
        // create new div to display movie info
        const $div = $("<div>")
        // edit the html of the div
        $div.html(`<h2 class="movie-title">${movie.title}</h2>
        <h3 class="movie-release">${movie.release_year}</h3>
        <img src='${movie.image}'/>`)
        // append the div to the main tag
        $main.append($div)
    })
 })
 .catch((error) => {
     console.log(error)
 })

