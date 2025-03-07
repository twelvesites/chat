document.addEventListener("DOMContentLoaded", function() {
    const msgTxt = document.getElementById("msgTxt");
    const msgBtn = document.getElementById("msgBtn");

    msgTxt.addEventListener("input", function() {
        if (msgTxt.value.trim() !== "") {
            msgBtn.removeAttribute("disabled");
        } else {
            msgBtn.setAttribute("disabled", "true");
        }
    });

    const form = document.getElementById("messageForm");
    form.addEventListener("submit", function(event) {
        if (msgTxt.value.trim() === "") {
            alert("Please enter a message before sending.");
            event.preventDefault();
        }
    });
});
