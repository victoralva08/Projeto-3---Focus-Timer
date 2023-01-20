import Sounds from "./sounds.js" // Como Sounds (a função factory criada agora) retorna um objeto, podemos usá-la diretamente. 


export default function Timer({ // criação da factory: uma função que retorna um objeto.
    minutesDisplay,
    secondsDisplay,
    resetControls
}) { // realização do 'destructiring', ou seja, os parâmetros tornam-se propriedades de um objeto que COMPORTAM TODAS AS DEPENDÊNCIAS (variáveis) aplicadas nas funções deste escopo. Isso se chama INJEÇÃO DE DEPENDÊNCIAS, e acontece a partir da factory.

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function reset(){
        clearTimeout(timerTimeOut)
        updateDisplayText(minutes, '00')
    }

    function updateDisplayText(newMinutes, seconds){
        newMinutes = newMinutes === undefined ? minutes : newMinutes // Leia-se: a variável newMinutes é undefined? Então insira minutes. Senão, insira newMinutes.
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, 0)
        secondsDisplay.textContent = String(seconds).padStart(2, 0)

    }

    function countdown(){

        timerTimeOut = setTimeout(function(){ // Função do JS que a partir do tempo definido (em ms) executa uma função de callback. ELa possui um retorno numérico (passar o cursor por cima da função para vê-lo), que será aplicado para interromper o cronômetro. Por isso, esse valor é inserido em uma variável para ser utilizada como id na função clearTimeout().

            let minutes = minutesDisplay.textContent // atenção: esta variável minutes existe somente neste escopo.
            let seconds = Number(secondsDisplay.textContent)

            if (minutes == 0 && seconds == '00'){ // Uma forma alternativa seria simplesmente atribuir 00 à variável seconds na linha anterior.
                
                Sounds().timeEnd() // execução da função time.End dentro da função factory Sounds
                resetControls()
                updateDisplayText()
                return 

            }

            if (seconds == 0){

                seconds = 60
                --minutes
            // minutesDisplay.textContent = String(minutes - 1).padStart(2, 0)
            // updateTimerDisplayText(String(minutes - 1), seconds)

            }


            // secondsDisplay.textContent = String(seconds - 1).padStart(2, 0)
            updateDisplayText(minutes, String(seconds - 1))

            countdown() // Processo de recurssão.

        }, 1000) 
    
    }

    function updateMinutes(newMinutes){
        minutes = newMinutes
    }

    function hold(){
        clearTimeout(timerTimeOut)
    }

    return { // short-hand return: o retorno direto de objetos cuja as propriedades recebem uma função como valor de mesmo nome.
            countdown,
            reset,
            updateDisplayText,
            updateMinutes,
            hold
    }

}

// Resumo da função factory:
// Reúna todas as funções necessárias para o algoritmo na função factory. Ela irá retornar um objeto com as respectivas funções para serem chamadas como propriedade do mesmo.
// Caso a factory precise de dependências (ou seja, variáveis que estão presentes nas funções que ela comporta), realiza-se a injeção de dependêcias por meio do destructiring.