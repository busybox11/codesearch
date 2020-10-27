console.log('hey google')

for (let i = document.getElementsByClassName('rc').length; i-- > 0;) {
	let link = document.getElementsByClassName('rc')[i].getElementsByTagName('a')[0]
	if (link.host == "stackoverflow.com") {
		console.log(i, link)
		document.getElementsByClassName('IsZvec')[i].innerHTML = "Found link<br>" + document.getElementsByClassName('IsZvec')[i].innerHTML
	}
}