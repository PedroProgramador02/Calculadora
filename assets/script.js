function darkTheme(){
    let darkTheme = document.querySelector('#Noturn').checked
    if(darkTheme){
        document.documentElement.style.setProperty('--body', '#151416')
        document.documentElement.style.setProperty('--label', '#c9c9c9')
        document.documentElement.style.setProperty('--white', '#000807')
        document.documentElement.style.setProperty('--yellow', '#f1c40f')
        document.documentElement.style.setProperty('--calc', '#c9c9c9')
        document.documentElement.style.setProperty('--button', '#dfdfdf')
        document.documentElement.style.setProperty('--buttonH', '#b1b0b0')
        document.documentElement.style.setProperty('--especial', '#979797')
        document.documentElement.style.setProperty('--button2', '#b1b0b0')
        document.documentElement.style.setProperty('--especialH', '#bbbbbb')
    }
    else{
        document.documentElement.style.setProperty('--body', '#2ab3a6')
        document.documentElement.style.setProperty('--label', '#000807')
        document.documentElement.style.setProperty('--white', '#dfdfdf')
        document.documentElement.style.setProperty('--yellow', '#f1c40f')
        document.documentElement.style.setProperty('--calc', '#000807')
        document.documentElement.style.setProperty('--button', '#0C1A21')
        document.documentElement.style.setProperty('--buttonH', '#162f3b')
        document.documentElement.style.setProperty('--especial', '#228f84')
        document.documentElement.style.setProperty('--button2', '#1b7269')
        document.documentElement.style.setProperty('--especialH', '#18646b')
    }
}


const resultado = document.querySelector('.result');
const confirmar = document.querySelector('.btn igual');

/*
resultado é uma constante que se refere ao espaço do <p> com class = result.
resultado.innerHTML - Basicamente diz que o innerHTML irá receber o resultado.
*/

function insert(valor){
    resultado.innerHTML += valor; /*O insert recebe o valor do botão e a constante resultado recebe esse valor*/
}

function clean(){
    resultado.innerHTML = ''; /*Na função clean a constante resultado recebe nada*/
}

function backspace(){
    if(resultado.textContent){ /*Testa se tem algo no resultado*/
        let result = document.getElementById('resultado').innerHTML /*Basicamente puxa o que está no resultado*/
        resultado.innerHTML = result.substring(0, result.length -1); /*Devolve um result para o resultado com um digíto a menos*/
    } else {
        /*Se em resultado não houver nenhum valor, não é necessário fazer nada*/
    }
}

function confirma(){
    if(resultado.textContent != 'Erro'){
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML);
        /*eval está recebendo o que está em resultado, calculando, e retornando para resultado*/
    } else {
        document.getElementById('resultado').innerHTML = "Insira um valor";
    }
}