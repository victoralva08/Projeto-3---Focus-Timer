export default function (){
    // const buttonPress = new Audio()  usa-se uma função construtora para aplicar à variável buttonPress um argumento (áudio) que, na verdade, será um objeto cujas propriedades manipulam o arquivo de áudio (o executando ou pausando!): buttonPress.play, buttonPress.pause etc. Aqui, irão ser usados os arquivo que o mayk disponibilizou.

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

    bgAudio.loop = true // o true 'liga' a propriedade de loop do objeto bgAudio!

    function pressButton(){ // A função criada pressButton (que será retornada como propriedade do objeto da função factory) executa o áudio de buttonPressAudio, que é um objeto criado a partir da função construtora new Audio(). Portanto, a função play() é uma propriedade deste objeto!
        buttonPressAudio.play()
    }

    function timeEnd(){
        kitchenTimer.play()
    }

    return {
        pressButton,
        timeEnd,
        bgAudio
    }
   
}