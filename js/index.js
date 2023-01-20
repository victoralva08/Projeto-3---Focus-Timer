// default import
import Controls from "./controls.js"
import Timer from "./timer.js" // Importa da Timer(), uma função que retorna um objeto.
import Sounds from "./sounds.js"

// named import das variáveis (desestruturação de elementos)
import { 

    btnPlay,
    btnPause,
    btnStop,
    btnSet,
    btnSoundOn,
    btnSoundOff,
    minutesDisplay,
    secondsDisplay
    
} from "./elements.js"

// Funções Factory Importadas

const controls = Controls({
    btnPause,
    btnPlay,
    btnSet,
    btnStop
})

const timer = Timer({ // neste caso, as propriedades do objeto que servirá de argumento para a função possui os mesmos nomes dos parâmetros. Isso deve sempre ocorrer!
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

const sound = Sounds() // A função construtora Sound não possui dependências (ou seja, parâmetros e/ou argumentos.)



// Eventos

btnPlay.addEventListener('click', () => {

    controls.play()
    timer.countdown()
    sound.pressButton()

})

btnPause.addEventListener('click', () => {

    controls.pause()
    timer.hold()
    sound.pressButton()


})

btnStop.addEventListener('click', () => {

    controls.reset()
    timer.reset() // timer recebe o objeto retornado pela Timer(), que é a função factory.
    sound.pressButton()

})


btnSet.addEventListener('click', () => {
   let newMinutes = controls.getMinutes()
    
    if (!newMinutes){ 
        timer.reset()
    }
    
    timer.updateDisplayText(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})


btnSoundOff.addEventListener('click', () => {
    btnSoundOff.classList.toggle('hide')
    btnSoundOn.classList.toggle('hide')

    sound.bgAudio.play() // Atenção nesta parte: bgAudio é propriedade do objeto retornado pela função Sounds() (atribuida à variável sound). No entanto, bgAudio é um objeto criado a partir de uma função construtora (new Audio()). Por isso, ele também possui propriedades, como .play() (função que executa o áudio) e .pause()
})

btnSoundOn.addEventListener('click', () => {
    btnSoundOff.classList.toggle('hide')
    btnSoundOn.classList.toggle('hide')

    sound.pressButton()
    sound.bgAudio.pause()
})