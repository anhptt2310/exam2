$(document).ready(function(){

	var count = 0;
	var oldColor = "#D45253";
	$(".circle").click(function(event){
		//refer : stack overflow
		function ColorLuminance(hex, lum) {
		    // validate hex string
			    hex = String(hex).replace(/[^0-9a-f]/gi, '');
			    if (hex.length < 6) {
			        hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
			    }
			    lum = lum || 0;
			    console.log(lum);
			    // convert to decimal and change luminosity
			    var rgb = "#", c, i;
			    for (i = 0; i < 3; i++) {
			        c = parseInt(hex.substr(i*2,2), 16);
			        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
			        rgb += c;
			    }
			    return rgb;
		}
		var newColor = ColorLuminance(oldColor, -0.1);
		oldColor = newColor;
		if(count<8){
			count++;
			$(this).css("background-color" , newColor);
		}
		else{
			$(this).css("background-color" , "#000");
		}
	});
});