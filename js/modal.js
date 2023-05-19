var modelinfo = document.getElementsByClassName("modelinfo");

// Add a click event listener to each element
for (var i = 0; i < modelinfo.length; i++) {
  modelinfo[i].addEventListener("click", function() {
    // Event handler code
    var modal = document.getElementById("modal-report");
    modal.classList.add("show");
    modal.style.display = "block";

  });
}

var close = document.getElementsByClassName("btn-close");
// Add a click event listener to each element
for (var i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function() {
    // Event handler code
    var modal = document.getElementById("modal-report");
    modal.classList.remove("show");
    modal.style.display = "none";

  });
}

var outputElement = document.getElementById("outputElement");
var advanced = document.getElementById("advancedbutton");
var section = document.getElementById("advanced");
var buttoncolor = document.getElementById("buttoncolor");
advanced.addEventListener("click", function() {
    outputElement.innerHTML = "Implement Abstract Methods";
    buttoncolor.classList.remove("btn-success");
    buttoncolor.classList.add("btn-secondary");

    section.style.display = "inline-block";
});

var simple = document.getElementById("simplebutton");
simple.addEventListener("click", function() {
    outputElement.innerHTML = "Train";
    buttoncolor.classList.remove("btn-secondary");
    buttoncolor.classList.add("btn-success");

    section.style.display = "none";
});

// if(mainselect.checked === true) {
//     for (var i = 0; i < selected.length; i++) {
//         selected[i].checked = true;
//     }
// }