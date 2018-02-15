$(document).ready(function(){
	var theurl = "https://dog.ceo/api/breeds/list/all";
	$.ajax({
		url: theurl,
		dataType: "json",
		
		success : function(json){
			
			var result = "";
			
			var dogs = [json.message.length];
			dogs = Object.getOwnPropertyNames(json.message);
			
			for (var i = 0; i < 80; i++){
				
				result += "<option value = \""+dogs[i]+"\"> "+dogs[i]+"</option>\n";
				//result += dogs[i];
				//result += "\"> ";
				//result += dogs[i];
				//result += "</option>\n";
			} 
			
			$("#dropdown").html(result);
		}
	})
});

function selectchange(){
	var breed = document.getElementById("dropdown").value;
	var theurl = "https://dog.ceo/api/breed/" + breed + "/images/random";
	var result = "";
	$.ajax({
		url: theurl,
		dataType: "json",
	
		success : function(json){
			result += "<img src = \""+json.message+"\">";
			console.log(result);
			
			$("#dogPic").html(result);
		}
	})
}