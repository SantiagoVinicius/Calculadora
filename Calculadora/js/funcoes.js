function Inserir0(){
    document.getElementById("visor").value += 0;
}

function Inserir7(){
    document.getElementById("visor").value += 7;
}

function Inserir8(){
    document.getElementById("visor").value += 8;
}

function InserirMais(){
    document.getElementById("visor").value += "+";
}

function InserirMulti(){
    document.getElementById("visor").value += "*";
}

function Inserir9(){
    document.getElementById("visor").value += 9;
}
 
function InserirDiv(){
    document.getElementById("visor").value += "/";
}

function Inserir4(){
    document.getElementById("visor").value += 4;
}

function Inserir5(){
    document.getElementById("visor").value += 5;
}

function Inserir6(){
    document.getElementById("visor").value += 6;
}

function InserirSub(){
    document.getElementById("visor").value += "-";
}

function Inserir1(){
    document.getElementById("visor").value += 1;
}

function Inserir2(){
    document.getElementById("visor").value += 2;
}

function Inserir3(){
    document.getElementById("visor").value += 3;
}

function InserirPt(){
    document.getElementById("visor").value += ".";
}

function LimparVisor(){
    document.getElementById("visor").value = "";
}

function RaizQuadrada(){
    let numero = document.getElementById("visor").value;
    document.getElementById("visor").value = Math.sqrt(numero);
}

function Calcular(){
    //pegar o texto do visor
    let expresao= document.getElementById("visor").value;


    //converter em expressão numérica e calcular
    let resultado = eval(expresao);

    //mostrar o resultado do cálculo no visor no visor
    document.getElementById("visor").value = resultado;
}

function Apagar(){
let conteudo = document.getElementById("visor").value;
document.getElementById("visor").value = conteudo.substring(0, conteudo.length - 1);
}
