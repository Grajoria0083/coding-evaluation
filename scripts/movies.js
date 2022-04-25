// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
async function searchMovie() {
    try {
        let query = document.getElementById("search").value
        // const api = `http://www.omdbapi.com/?apikey=8144fa19${query}`
        const res = await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`)
        let data = await res.json()
        console.log(data.Search)
        appendMovie(data.Search)
    } catch (err) {
        console.log(err)
    }
}


const arr = JSON.parse(localStorage.getItem("movie")) || [];
console.log(arr)

function appendMovie(Movie) {
    Movie.forEach(function (el) {
        let box = document.getElementById("movies")
        let divs = document.createElement("div")
        let image = document.createElement("img")
        image.src = el.Poster

        let title = document.createElement("p")
        title.innerHTML = el.Title




        let btn = document.createElement("button")
        btn.innerText = "BOOK NOW"
        btn.setAttribute("id", "book_now")
        btn.addEventListener("click", function () {
            book(el);
        })
        // let a = document.createElement("a")
        // a.href = "checkout.html"
        // btn.append(a)




        divs.append(image, title, btn)
        box.append(divs)
    })
}


function book(el) {
    arr.push(el)
    console.log(arr)
    localStorage.setItem("movies", JSON.stringify(arr))
}

