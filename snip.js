console.log('hey google')

function httpRequest(url, callback)
{
	let xmlHttp = new XMLHttpRequest()
	
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText)
	}
	
    xmlHttp.open("GET", url, true)
    xmlHttp.send(null)
}

for (let i = document.getElementsByClassName('rc').length; i-- > 0;) {
	let link = document.getElementsByClassName('rc')[i].getElementsByTagName('a')[0]
	if (link.host == "stackoverflow.com" && link.pathname.startsWith('/questions/')) {
		let id = link.pathname.replace('/questions/', '')
		id = id.substr(0, id.indexOf('/'))

		// Request to StackOverflow's API to get the answers
		httpRequest(`https://api.stackexchange.com/2.2/questions/${id}/answers?order=desc&sort=votes&site=stackoverflow&filter=!b6AubVkmmBt14D`, function (data) {
			data = JSON.parse(data)
			ans = data.items[0]

			let type
			if (ans.is_accepted) {
				type = "Verified"
			} else {
				type = "Top"
			}
			let body = ans.body
			let score = ans.score

			document.getElementsByClassName('IsZvec')[i].innerHTML = `
				<div class="cs-card" id="cs-card-${i}">
					<div class="cs-card-content">
						<span class="cs-card-info">${type} solution - Score: ${score}</span>

						<div class="cs-card-answer">${body}</div>
					</div>
				</div>
			`
		})
	}
}