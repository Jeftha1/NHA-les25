$(document).ready(function() {
	$("#bereken").click(function(){
		var naam = $("#naam").val(); 
		var berekening = $('input[name="berekening"]:checked').val(); 
		var getal1 = parseInt($("#getal1").val()); 
		var getal2 = parseInt($("#getal2").val()); 
		if (berekening == "*"){
			resultaat = getal1 * getal2; 
		}
		if (berekening == "/"){
			resultaat = getal1 / getal2; 
		}
		if (berekening == "+"){
			resultaat = getal1 + getal2; 
		}
		if (berekening == "-"){
			resultaat = getal1 - getal2; 
		}
		window.alert("Welkom " + naam + ". Je berekening " + getal1 + " " + berekening +" " + getal2 + " geeft als resultaat " + resultaat + "."); 
	}); 
}); 