var divs = document.getElementsByTagName('div');

for(var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function() {
        alert("Div " + i + " was clicked.")
    },false);
}