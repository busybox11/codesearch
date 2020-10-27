console.log('hey google')

for (let i = document.getElementsByClassName('rc').length; i-- > 0;) {
	let link = document.getElementsByClassName('rc')[i].getElementsByTagName('a')[0]
	if (link.host == "stackoverflow.com" && link.pathname.startsWith('/questions/')) {
		console.log(i, link)
		let type = "Verified solution"
		let body = "<p>For ID:</p>\n\n<pre><code>var a = document.getElementById('divYouwant').getElementsByTagName('a');\nfor (var i = 0; i &lt; a.length; i++) {\n    var elem = a[i],\n        color = colors[0];\n    elem.style.color = color;\n    colors.push(color);\n    colors.shift();\n}\n</code></pre>\n\n<p>If you want to grab it from a class, you would have to grab each class and then grab each set of anchor tags...</p>\n\n<pre><code>var divs = document.getElementsByClassName('className');\nfor (var i = 0; i &lt; divs.length; i++) {\n    var a = divs[i].getElementsByTagName('a');\n    for (var j = 0; j &lt; a.length; j++) {\n        var elem = a[j],\n            color = colors[0];\n        elem.style.color = color;\n        colors.push(color);\n        colors.shift();\n    }\n}\n</code></pre>\n\n<p>Basically you follow the same concept as just getting all the links. The only difference is you don't use the document as the reference. First you grab the div that you want, and then from there, grab an array of all the anchor tags.</p>\n"
		let score = 13

		document.getElementsByClassName('IsZvec')[i].innerHTML = `
			<div class="cs-card" id="cs-card-${i}">
				<div class="cs-card-content">
					<span class="cs-card-info">${type} - Score: ${score}</span>

					<div class="cs-card-answer">${body}</div>
				</div>
			</div>
		`
	}
}