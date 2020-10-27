console.log('hey google')

for (let i = document.getElementsByClassName('rc').length; i-- > 0;) {
	let link = document.getElementsByClassName('rc')[i].getElementsByTagName('a')[0]
	if (link.host == "stackoverflow.com") {
		console.log(i, link)
		let type = "Verified solution"
		let body = "<p>You can call the array method <strong>map</strong> on the document.links collection.</p>\n\n<p>The String value of a link element its url.</p>\n\n<pre><code>var hrefs= [].map.call(document.links,String);\nalert(hrefs.join('\\n'));\n</code></pre>\n"

		document.getElementsByClassName('IsZvec')[i].innerHTML = `
			<div class="cs-card" id="cs-card-${i}">
				<div class="cs-card-content">
					<span class="cs-card-type">${type}</span>

					<div class="cs-card-answer">${body}</div>
				</div>
			</div>
		`
	}
}