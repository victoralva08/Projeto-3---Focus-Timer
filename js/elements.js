
// Variáveis: a parte vantajosa de criá-las apenas no index e depois injetá-las (como objeto argumento da factory), é que caso haja alguma alteração na classe do arquivo HTML, a alteração só precisará ser feita neste bloco do código, em que ocorre a atribuição dos valores das variáveis pelo querySelector.  Se para todos os arquivos .js houver a criação de variáveis, quando algo for alterado no HTML, será precisa mudar em todos os arquivos!

const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')
const btnSoundOn = document.querySelector('.sound-on')
const btnSoundOff = document.querySelector('.sound-off')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

export {
    btnPlay,
    btnPause,
    btnStop,
    btnSet,
    btnSoundOn,
    btnSoundOff,
    minutesDisplay,
    secondsDisplay
}