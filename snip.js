console.log('hey google')

for (var i = document.links.length; i-- > 0;) {
	if (document.links[i].classList.length == 0 && document.links[i].host == "stackoverflow.com") {
		console.log(i, document.links[i])
	}
}