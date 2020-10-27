console.log('hey google')

for (var i = document.links.length; i-- > 0;) {
	if (document.links[i].classList.length == 0) {
		console.log(document.links[i])
	}
}