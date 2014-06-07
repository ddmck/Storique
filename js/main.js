$(document).ready(function(){

	var imageSelection = function(){
		var weather = $(".weatherChoice").html();
		var house = $(".houseChoice").html();
		var hair = $(".hairChoice").html();
		var image_name = weather+"_"+house+"_"+hair+".jpeg";
		if (1 == "one") {
			image_name = "default.jpg";
		};
		$(".imageChoice").html(image_name);
		
			
	}
	var choiceUpdater = function(selector,choice){
		$(selector).html(choice);
		imageSelection();
	}
		
	imageSelection();
	
	
	$("#chooseSunny").on("click",function(){
		choiceUpdater(".weatherChoice","sunny");
	});
	
	$("#chooseCloudy").on("click",function(){
		choiceUpdater(".weatherChoice","cloudy");
	});
	
	$(".chooseStone").on("click",function(){
		choiceUpdater(".houseChoice","stone");
	});
	
	$(".chooseWood").on("click",function(){
		choiceUpdater(".houseChoice","wooden");
	});
	
	$(".chooseRed").on("click",function(){
		choiceUpdater(".hairChoice","red");
	});
	
	$(".chooseGreen").on("click",function(){
		choiceUpdater(".hairChoice","green");
	});
	
	
});


