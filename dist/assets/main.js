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

const daya = [1, 3, 2, 4].map(i => {
  const image = document.createElement('img')
  image.src = `assets/img/${i}.jpeg`
  image.alt = 'album de musica'
  image.classList.add('images', 'cursor-not-allowed')
  return image
})

const zara = document.querySelector('#textos').cloneNode(true)
zara.classList.add('flex', 'justify-center', 'items-center', 'text-center')
const zaraTitle = zara.querySelector('#titulo-principal')
zaraTitle.textContent = 'O que é o Lorem Ipsum?'
const zaraTitleA = zara.querySelector('#titulo-a')
zaraTitleA.textContent = 'Porque é que o usamos?'
const zaraTextA = zara.querySelector('#texto-a')
zaraTextA.textContent = 'É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica.'
zara.querySelector('#titulo-b').remove()
zara.querySelector('#texto-b').remove()
zara.querySelector('#titulo-c').remove()
zara.querySelector('#texto-c').remove()

const justin = document.querySelector('#textos').cloneNode(true)
const justinTitle = justin.querySelector('#titulo-principal')
const justinTitleA = justin.querySelector('#titulo-a')
const justinTitleB = justin.querySelector('#titulo-b')
const justinTitleC = justin.querySelector('#titulo-c')
const justinTextA = justin.querySelector('#texto-a')
const justinTextB = justin.querySelector('#texto-b')
const justinTextC = justin.querySelector('#texto-c')

justinTitle.textContent = 'O que é o Lorem Ipsum?'
justinTitleA.textContent = 'Porque é que o usamos?'
justinTextA.textContent = 'É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica.'
justinTitleB.textContent = 'De onde é que ele vem?'
justinTextB.textContent = 'Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos.'
justinTitleC.textContent = 'Onde posso arranjar algum?'
justinTextC.textContent = 'Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maioria sofreu alterações de alguma forma, seja por inserção de passagens com humor, ou palavras aleatórias que nem sequer parecem suficientemente credíveis.'

const trap = justin.cloneNode(true)
const trapTitle = trap.querySelector('#titulo-principal')
const trapTitleB = trap.querySelector('#titulo-b')
trapTitle.classList.add('animated-text')
trapTitleB.classList.add('animated-text')

const targetJustin = document.querySelector('#justin')
const targetZara = document.querySelector('#zara')
const targetTrap = document.querySelector('#trap')
const targetDaya = document.querySelector('#daya')

targetDaya.addEventListener('click', () => {
  const hasText = document.querySelector('#textos')
  if (hasText) hasText.remove()
  const grid = document.querySelector('.grid')
  daya.forEach(image => grid.appendChild(image))
})

targetTrap.addEventListener('click', () => {
  const hasText = document.querySelector('#textos')
  if (hasText) {
    hasText.replaceWith(trap)
  } else {
    document.querySelectorAll('.images').forEach(image => image.remove())
    const grid = document.querySelector('.grid')
    grid.appendChild(trap)
  }
})

targetZara.addEventListener('click', () => {
  const hasText = document.querySelector('#textos')
  if (hasText) {
    hasText.replaceWith(zara)
  } else {
    document.querySelectorAll('.images').forEach(image => image.remove())
    const grid = document.querySelector('.grid')
    grid.appendChild(zara)
  }
})

targetJustin.addEventListener('click', () => {
  const hasText = document.querySelector('#textos')
  if (hasText) {
    hasText.replaceWith(justin)
  } else {
    document.querySelectorAll('.images').forEach(image => image.remove())
    const grid = document.querySelector('.grid')
    grid.appendChild(justin)
  }
})

