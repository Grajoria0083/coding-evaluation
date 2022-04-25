// Store the wallet amount to your local storage with key "amount"
localStorage.setItem("amount", 0)
function submit() {
    document.getElementById("wallet").innerText = null;
    let query = +document.getElementById("amount").value
    let getAmount = +JSON.parse(localStorage.getItem("amount"))
    console.log(getAmount)

    let set = getAmount + query;
    console.log(set)

    localStorage.setItem("amount", JSON.stringify(set))
    // console.log(amount)

    document.getElementById("wallet").append(set)
}

