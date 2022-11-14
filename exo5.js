// SELECTION
var color = document.getElementsByTagName('input')
console.log(color)
var div = document.getElementsByTagName('div')

// EVENEMENT
color[0].addEventListener("change", change);

i = 0;
// FONCTION
function change() {
	div[i].style.backgroundColor = event.target.value;
	// div[i].style.backgroundColor = color[0].value; (autre méthode)
	i++
	if (i >= div.length) {
		i = 0
	}
}