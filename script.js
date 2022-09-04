const scrollToTop = document.querySelector('.scroll-to-top')

let root = document.documentElement

const scrollBarHandle = () => {
	const scroll = window.scrollY
	const leftToScroll = document.body.getBoundingClientRect().height - window.innerHeight
	const scrollBarWidth = Math.floor((scroll / leftToScroll) * 100)
	root.style.setProperty('--scroll-width', `${scrollBarWidth}%`)
}
window.addEventListener('scroll', scrollBarHandle)
