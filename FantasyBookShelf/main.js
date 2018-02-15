$(document).ready(function(){
    var theurl="https://dog.ceo/dog-api/breeds-image-random";
    var result="";
    $.ajax({
        url: 'theurl'
        dataType: "json",
        
        success: function(json){
        result += "<img src = \ "";
        result += json.message;
        result += "\">";
        console.log(result);
        $("#dogPic").html(result);
    }
     
        
    }
    })
})