import { projects } from './data.js'
$(document).ready(() => {
	const projectContent = $('.project-content')
	$.each(projects, (_, project) => {
		const col = $('<div class="col"></div>')
		const card = $('<div class="card h-100"></div>')
		const imageDiv = $('<div></div>')
		const image = $('<img class="card-img-top"/>')
		const cardBody = $('<div class="card-body"></div>')
		const cardTitle = $('<h5 class="card-title fs-3 fw-bold"></h5>')
		const cardText = $('<p class="card-text my-3"></p>')
		const cardFooter = $('<div class="card-footer d-flex justify-content-between align-items-center text-uppercase fw-semibold"></div>')
		const repoLink = $(
			'<a class="repo-link d-flex align-items-center" target="_blank" rel="noopener">Repo <span class="material-icons">arrow_outward</span></a>'
		)
		const projectLink = $(
			'<a class="project-link d-flex align-items-center" target="_blank" rel="noopener">Demo <span class="material-icons">arrow_outward</span></a>'
		)

		image.attr({ src: project.image, alt: project.title })
		cardTitle.text(project.title)
		cardText.text(project.text)
		repoLink.attr('href', project.repo)
		projectLink.attr('href', project.demo)

		imageDiv.append(image)
		cardBody.append(cardTitle, cardText)
		cardFooter.append(repoLink, projectLink)
		card.append(imageDiv, cardBody, cardFooter)
		col.append(card)

		projectContent.append(col)
	})
})
