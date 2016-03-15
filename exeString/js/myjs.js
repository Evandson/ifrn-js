function procuraString(texto) {
	var info = "O Associazione Calcio Milan, frequentemente abreviado em AC Milan ou Milan, é uma das principais e mais bem sucedidas equipes de futebol da Itália e do mundo. Atualmente, participa da Série A do campeonato italiano. Partilha com o seu maior rival, a Internazionale, o Estádio Giuseppe Meazza, que no passado tinha o nome de Estádio San Siro, como ainda preferem chamá-lo atualmente os torcedores Milanistas, pois Giuseppe Meazza, que jogou em ambos os clubes teve maior destaque na Inter. O estádio tem capacidade para 85.117 espectadores, e é palco onde é disputado o clássico de Milão, Derby della Madonnina.";
	var strInfo = info.toLowerCase();
	var procurar = document.getElementById("texto").value;
	var strProcurar = procurar.toLowerCase();
	
	if (strInfo.indexOf(strProcurar) != -1){
		document.getElementById("demo").innerHTML = "<b>Encontramos algo:</b><br><br>"+info;
	} else {
		document.getElementById("demo").innerHTML = "<b>Pesquisa não encotrada!</b>";
	}
}

function substituicao(txt) {
    var acentuadas = 'áàéêíóôúÁÀÉÊÍÓÔÚ';
    var naoAcentuadas = 'aaeeioouAAEEIOOU';
    var novaPalavra = '';
    for(i = 0; i < txt.length; i++) {
      if (acentuadas.search(txt.substr(i, 1)) >= 0) {
      novaPalavra += naoAcentuadas.substr(acentuadas.search(txt.substr(i, 1)), 1);
      }
      else {
       novaPalavra += txt.substr(i, 1);
      }
    }
    return document.getElementById("subs").innerHTML = "<b>Texto com Substituição:</b><br>" + novaPalavra.toLowerCase();
}

function inverter(texto){
    var info = document.getElementById("texto").value;
    var strInfo = info.toString().split("");
    var inversao = strInfo.reverse().join("");
    document.getElementById("demo").innerHTML = "<br><b>Texto Invertido:</b><br>"+inversao;
}

function soNumeros(e){
	var tecla = window.event?event.keyCode:e.wich;
	if (tecla > 47 && tecla < 58){
		return true;
	} else {
		return false;
	}
}

function tamanhoCPF(cpf) {
	var capture = document.getElementById("cpf").value;
	if (capture.length == 11){
		document.getElementById("campCPF").innerHTML = "Tamanho compatível!"
	} else {
		document.getElementById("campCPF").innerHTML = "Tamanho incompatível!"
	}
}

function tamanhoTel(tel) {
	var capture = document.getElementById("tel").value;
	if (capture.length == 10){
		document.getElementById("campTel").innerHTML = "Tamanho compatível!"
	} else {
		document.getElementById("campTel").innerHTML = "Tamanho incompatível!"
	}
}