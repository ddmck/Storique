$(document).ready(function(){

	var imageSelection = function(){
		var weather = $(".weatherChoice").html();
		var house = "";
		var hair = "";
		var image_name = weather+house+hair+".jpeg";
		alert(image_name);
		
	}
	imageSelection();
	
	$("#chooseSunny").on("click",function(){
		$(".weatherChoice").html("sunny");
		imageSelection();
		
	});
	
	$("#chooseCloudy").on("click",function(){
		$(".weatherChoice").html("cloudy");
		imageSelection();
	
	});
	
	$(".chooseStone").on("click",function(){
		$(".houseChoice").html("stone");
		
	});
	
	$(".chooseWood").on("click",function(){
		$(".houseChoice").html("wooden");
		
	});
	
	$(".chooseRed").on("click",function(){
		$(".hairChoice").html("red");
		
	});
	
	$(".chooseGreen").on("click",function(){
		$(".hairChoice").html("green");
		
	});
	
	
});


