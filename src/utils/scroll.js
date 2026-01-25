let scrollPosition = 0
export function freezeScroll(activator,
  options = {
    htmlOverflow: true,
    saveScrollGutter: false,
    unsetTop: false
  }
) {
  const body = document.body

  const getBodyStyles = (activator, options) => {
    if (activator) {
      body.style.cssText = `
        overflow: hidden;
        user-select: none;
        touch-action: none;
        position: fixed;
        width: 100%;
      `
      body.style.top = options.unsetTop ? '0' : `-${scrollPosition}px`
    } else {
      body.style.removeProperty('top')
      body.style.cssText = `
        overflow: '';
        user-select: '';
        touch-action: '';
        position: '';
        width: '';
      `
    }
  }

  if (activator) {
    scrollPosition = window.scrollY
    getBodyStyles(activator, options)
  } else {
    getBodyStyles(activator, options)
    window.scrollTo(0, scrollPosition)
  }
}
