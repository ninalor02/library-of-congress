var reDirectUrl = "./search-results.html";
var baseUrl = "https://www.loc.gov/search/?fo=json"

// addEventListener(SubmitEvent)

function RunSubmit(event) {
event.prevenDefault();
console.log(search, format);
fetch(baseUrl).then(function (response) {
    if ('') {
        document.location.replace(redirectUrl);
    } else {
        return response.json
    }
});

}

const form = document.getElementsById("search-form");
form.addEventListender("submit", runSubmit);

const format = document.getElementById("format-input")


