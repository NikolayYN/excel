class Dom {
}

export function $() {
	return new Dom()
}


$.create = (selectorName, className = '') => {
		const el = document.createElement(selectorName)
		if (className) {
				el.classList.add(className)
		}
		return el
}