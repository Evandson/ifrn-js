function somar(n1, n2){
        var n1 = document.getElementById("n1").value;
        var n2 = document.getElementById("n2").value;
        var soma = parseInt(n1) + parseInt(n2);
        document.getElementById('soma').value = soma
    }

function diminuir(n1, n2){
        var n1 = document.getElementById("n1").value;
        var n2 = document.getElementById("n2").value;
        var subt = parseInt(n1) - parseInt(n2);
        document.getElementById('subt').value = subt
    }

function dividir(n1, n2){
        var n1 = document.getElementById("n1").value;
        var n2 = document.getElementById("n2").value;
        var divi = parseInt(n1) / parseInt(n2);
        document.getElementById('divi').value = divi
    }

function multiplicar(n1, n2){
        var n1 = document.getElementById("n1").value;
        var n2 = document.getElementById("n2").value;
        var mult = parseInt(n1) * parseInt(n2);
        document.getElementById('mult').value = mult
    }


