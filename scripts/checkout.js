// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time



let getData = JSON.parse(localStorage.getItem("movies"))
console.log(getData)

getData.forEach(function (el) {
    let box = document.getElementById("movies")
    let div = document.createElement("div")
    let image = document.createElement("img")
    image.src = el.Poster

    let title = document.createElement("p")
    title.innerHTML = el.Title

    div.append(image, title, btn)
    box.append(div)
})