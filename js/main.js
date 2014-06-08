$(document).ready(function(){
	$(".weatherImage").fadeOut()
	$(".millImage").fadeOut()
	$(".girlImage").fadeOut()
	var imageSelection = function(){
		var weather = $(".weatherChoice").html();
		var house = $(".houseChoice").html();
		var hair = $(".hairChoice").html();
		var image_name = weather+"_"+house+"_"+hair+".jpeg";
		if (image_name === "__.jpeg") {
			image_name = "default.jpeg";
		};

		$(".imageChoice").fadeOut('slow',function(){
			$(this).html("<img src='img/" + image_name + "' height='200' width='200'>").fadeIn('slow')
		})
		
	}
	var choiceUpdater = function(selector,choice){
		$(selector).html(choice);
		imageSelection();
	}
		
	imageSelection();

	$("#chooseSunny").on("click",function(){
		choiceUpdater(".weatherChoice","sunny");
		$(".weatherImage").fadeTo('default', .5, function(){
			$(this).attr("src","img/sunny_weather.jpg").fadeTo('slow', 1)
		});
	});
	
	$("#chooseCloudy").on("click",function(){
		choiceUpdater(".weatherChoice","cloudy");
		$(".weatherImage").fadeTo('default', .5, function(){
			$(this).attr("src","img/cloudy_weather.jpg").fadeTo('slow', 1)
		});
		
	});
	
	$(".chooseOld").on("click",function(){
		choiceUpdater(".houseChoice","an old");
		$(".millImage").fadeTo('default', .5, function(){
			$(this).attr("src","img/old_mill.png").fadeTo('slow', 1)
		});
		
	});
	
	$(".chooseNew").on("click",function(){
		
		choiceUpdater(".houseChoice","a new");
		$(".millImage").fadeTo('default', .5, function(){
			$(this).attr("src","img/new_mill.png").fadeTo('slow', 1)
		});
		
	});
	
	$(".chooseRed").on("click",function(){
		choiceUpdater(".dressChoice","red");
			$(".girlImage").fadeTo('default', .5, function(){
			$(this).attr("src","img/red_dress.png").fadeTo('slow', 1)
		});
		
	});
	
	
	
	$(".chooseBlue").on("click",function(){
		choiceUpdater(".dressChoice","blue");
			$(".girlImage").fadeTo('default', .5, function(){
			$(this).attr("src","img/blue_dress.png").fadeTo('slow', 1)
		});
		
	
	
	});
	
	
});


