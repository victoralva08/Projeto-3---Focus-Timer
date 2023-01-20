export default function Controls({
    btnPlay,
    btnPause,
    btnSet,
    btnStop
}){

    function reset(){ // A criação de funções é um processo de refatoração do código para evitar a repetição de blocos que devem estar presentes em diversas partes da lógica do código. Junto a isso se aplica o conceito de 'clean code', ou seja, a prática de atribuir nomes significativos e intuitivos para variáveis e funções de acordo com suas funcionalidades na lógica.

        btnPlay.classList.remove('hide')
        btnPause.classList.add('hide')
        btnSet.classList.remove('hide')
        btnStop.classList.add('hide')

    }

    function play(){

        btnPlay.classList.add('hide')
        btnPause.classList.remove('hide')
        btnStop.classList.remove('hide')
        btnSet.classList.add('hide')
    }

    function pause(){

        btnPlay.classList.remove('hide')
        btnPause.classList.add('hide')

    }

    function getMinutes(){

        let minutes = Number(prompt('Quantos minutos?'))

        if (!minutes){ // Leia-se: se NÃO minutes (ou seja, se minutes for null ou undefined)
            return false
        }
        
        return minutes

    }

    return {
        reset,
        play,
        pause,
        getMinutes
    }
}
