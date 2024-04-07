document.addEventListener("DOMContentLoaded", function() {
    var showButtons = document.querySelectorAll(".container-txt3 .showButton");
    var textBlocks = document.querySelectorAll(".container-txt3 .textBlock");
    var extraTexts = document.querySelectorAll(".container-txt3 .extraText");

    showButtons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            if (textBlocks[index].style.display === "none") {
                textBlocks[index].style.display = "block";
                extraTexts[index].style.display = "block";
                button.textContent = "-";
                button.classList.add("active"); // Add the "active" class to the button
            } else {
                textBlocks[index].style.display = "none";
                extraTexts[index].style.display = "none";
                button.textContent = "+";
                button.classList.remove("active"); // Remove the "active" class from the button
            }
        });
    });
});
