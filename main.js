let index = 0
const previous = document.querySelector('#prev')
const next = document.querySelector('#next')

previous.addEventListener('click', () => {
  index = (index + 3) % 4
  const parentNode = document.querySelector('#carousel')
  parentNode.style.transform = `translateX(-${index * 100}%)`
})

next.addEventListener('click', () => {
  index = (index + 1) % 4
  const parentNode = document.querySelector('#carousel')
  parentNode.style.transform = `translateX(-${index * 100}%)`
})