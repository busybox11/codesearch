for (let i = document.getElementsByClassName('yuRUbf').length; i-- > 0;) {
	let link = document.getElementsByClassName('yuRUbf')[i].getElementsByTagName('a')[0]
	if (link.host == "stackoverflow.com" && link.pathname.startsWith('/questions/')) {
		let id = link.pathname.replace('/questions/', '')
		id = id.substr(0, id.indexOf('/'))

		let rescont = document.getElementsByClassName('IsZvec')[i]

		// Request to StackOverflow's API to get the answers
		fetch(`https://api.stackexchange.com/2.2/questions/${id}/answers?order=desc&sort=votes&site=stackoverflow&filter=!b6AubVkmmBt14D`).then(data => {
			data = data.json()
			data.then(function(data) {
				if (data.quota_remaining > 0) {
					let otherlinks = ""
					for (let j = rescont.getElementsByTagName('div').length; j-- > 0;) {
						if (rescont.getElementsByTagName('div')[j].dataset.ved != undefined) {
							otherlinks = '<span class="res-related">Related links</span>' + rescont.getElementsByTagName('div')[j].outerHTML
						}
					}
					ans = data.items[0]

					let type
					if (ans.is_accepted) {
						type = "Verified"
					} else {
						type = "Top"
					}
					let body = ans.body
					let score = ans.score

					rescont.innerHTML = `
						<div class="cs-card" id="cs-card-${i}">
							<div class="cs-card-content">
								<span class="cs-card-info">${type} solution - Score: ${score}</span>

								<div class="cs-card-answer">${body}</div>
							</div>
						</div>

						${otherlinks}
					`

					rescont.querySelectorAll('pre code').forEach((block) => {
						hljs.highlightBlock(block)
					})
				} else {
					rescont.innerHTML = "<i>codesearch is rate-limited by StackOverflow's API. The limitation is reset every day.</i><br>" + rescont.innerHTML
				}
			})
		})
	}
}
