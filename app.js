const sounds = [
    'iluminati',
    'nani',
    'nope',
    'punch',
    'chupetin',
    'violin',
    'wombocombo'
]

const $container = document.querySelector('.container')

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.textContent = sound
    btn.addEventListener('click', () => {
        stopSounds()
        document.querySelector(`#${sound}`).play()
    })

    $container.appendChild(btn)
})

function stopSounds() {
    sounds.forEach(sound => document.querySelector(`#${sound}`).pause())
}