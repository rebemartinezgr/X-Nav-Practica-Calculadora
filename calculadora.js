

$(document).ready(function() {
	 $("#display").val("");

	$("#display").change(function(){
		console.log("cambia de valor");
	});

	 $(".bot").click(function(e){
		e.preventDefault();
         	var a = $(this).attr("id");
          	$("#display").val($("#display").val() + a); 
	});

	$("#borra").click(function() {
		$("#display").val("");
	});


	$("#igual").click(function() {
		$("#display").val(eval($("#display").val()));
	});
});


