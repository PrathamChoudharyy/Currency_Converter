console.log("Main.js working")

const populate = async (value, currency, fromCurrency) => {
    let myStr = ""
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_RZejmzYFgXqOE8jUWa3ku5qn4ZXCFNc9Wa8HQ0Xu&base_currency=" + fromCurrency
    let response = await fetch(url)
    let rJson = await response.json()
    document.querySelector(".output").style.display = "block"

    for (let key of Object.keys(rJson["data"])) {
        if (key == currency) {
            myStr += ` <tr>
            <td>${key}</td>
            <td>${(rJson["data"][key]["value"] * value).toFixed(2)}</td>
            </tr> 
            `
        }
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;

}
const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='toCurrency']").value
    const fromCurrency = document.querySelector("select[name='currency']").value
    populate(value, currency, fromCurrency)
})