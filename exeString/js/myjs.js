function procuraString(texto) {
	var info = "O Associazione Calcio Milan, frequentemente abreviado em AC Milan ou Milan, é uma das principais e mais bem sucedidas equipes de futebol da Itália e do mundo. Atualmente, participa da Série A do campeonato italiano. Partilha com o seu maior rival, a Internazionale, o Estádio Giuseppe Meazza, que no passado tinha o nome de Estádio San Siro, como ainda preferem chamá-lo atualmente os torcedores Milanistas, pois Giuseppe Meazza, que jogou em ambos os clubes teve maior destaque na Inter. O estádio tem capacidade para 85.117 espectadores, e é palco onde é disputado o clássico de Milão, Derby della Madonnina.";
	var strInfo = info.toLowerCase();
	var procurar = document.getElementById("texto").value;
	var strProcurar = procurar.toLowerCase();
	
	if (strInfo.indexOf(strProcurar) !== -1) {
		//var result = strInfo.substring(10, 80); 
		document.getElementById("demo").innerHTML = "<b>Encontramos algo:</b><br><br>"+info;
	} else {
		document.getElementById("demo").innerHTML = "<b>Pesquisa não encotrada!</b>";
	}
}