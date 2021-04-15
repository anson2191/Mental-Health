var vw = document.documentElement.clientWidth * 0.01;
var display = 1;
var newleft;

/*function scroll_to_home() {
	document.getElementById("home").scrollIntoView({block:'start', behavior:'smooth'});
}

function scroll_to_about() {
	document.getElementById("about").scrollIntoView({block:'start', behavior:'smooth'});
}*/


let scrollToSection = function(secID){
    let sec = document.getElementById(secID);
    window.scrollTo(0, sec.offsetTop);
}


function transparent() {
	if(display==1) {
		$(".sticker:nth-child(1)").animate({opacity: 1});
		$(".sticker:nth-child(2)").animate({opacity: 0.2});
		$(".sticker:nth-child(3)").animate({opacity: 0.2});
		$(".sticker:nth-child(4)").animate({opacity: 0.2});
		$(".sticker:nth-child(5)").animate({opacity: 0.2});
		$(".sticker:nth-child(6)").animate({opacity: 0.2});
		$(".sticker:nth-child(7)").animate({opacity: 0.2});
		
	}
	else if(display==2) {
		$(".sticker:nth-child(1)").animate({opacity: 0.2});
		$(".sticker:nth-child(2)").animate({opacity: 1});
		$(".sticker:nth-child(3)").animate({opacity: 0.2});
		$(".sticker:nth-child(4)").animate({opacity: 0.2});
		$(".sticker:nth-child(5)").animate({opacity: 0.2});
		$(".sticker:nth-child(6)").animate({opacity: 0.2});
		$(".sticker:nth-child(7)").animate({opacity: 0.2});
	}
	else if(display==3) {
		$(".sticker:nth-child(1)").animate({opacity: 0.2});
		$(".sticker:nth-child(2)").animate({opacity: 0.2});
		$(".sticker:nth-child(3)").animate({opacity: 1});
		$(".sticker:nth-child(4)").animate({opacity: 0.2});
		$(".sticker:nth-child(5)").animate({opacity: 0.2});
		$(".sticker:nth-child(6)").animate({opacity: 0.2});
		$(".sticker:nth-child(7)").animate({opacity: 0.2});
	}
	else if(display==4) {
		$(".sticker:nth-child(1)").animate({opacity: 0.2});
		$(".sticker:nth-child(2)").animate({opacity: 0.2});
		$(".sticker:nth-child(3)").animate({opacity: 0.2});
		$(".sticker:nth-child(4)").animate({opacity: 1});
		$(".sticker:nth-child(5)").animate({opacity: 0.2});
		$(".sticker:nth-child(6)").animate({opacity: 0.2});
		$(".sticker:nth-child(7)").animate({opacity: 0.2});
	}
	else if(display==5) {
		$(".sticker:nth-child(1)").animate({opacity: 0.2});
		$(".sticker:nth-child(2)").animate({opacity: 0.2});
		$(".sticker:nth-child(3)").animate({opacity: 0.2});
		$(".sticker:nth-child(4)").animate({opacity: 0.2});
		$(".sticker:nth-child(5)").animate({opacity: 1});
		$(".sticker:nth-child(6)").animate({opacity: 0.2});
		$(".sticker:nth-child(7)").animate({opacity: 0.2});
	}
	else if(display==6) {
		$(".sticker:nth-child(1)").animate({opacity: 0.2});
		$(".sticker:nth-child(2)").animate({opacity: 0.2});
		$(".sticker:nth-child(3)").animate({opacity: 0.2});
		$(".sticker:nth-child(4)").animate({opacity: 0.2});
		$(".sticker:nth-child(5)").animate({opacity: 0.2});
		$(".sticker:nth-child(6)").animate({opacity: 1});
		$(".sticker:nth-child(7)").animate({opacity: 0.2});
	}
	else if(display==7) {
		$(".sticker:nth-child(1)").animate({opacity: 0.2});
		$(".sticker:nth-child(2)").animate({opacity: 0.2});
		$(".sticker:nth-child(3)").animate({opacity: 0.2});
		$(".sticker:nth-child(4)").animate({opacity: 0.2});
		$(".sticker:nth-child(5)").animate({opacity: 0.2});
		$(".sticker:nth-child(6)").animate({opacity: 0.2});
		$(".sticker:nth-child(7)").animate({opacity: 1});
	}
	
	if(display==1) {
		setTimeout( () => {
			document.getElementById("button_left").style = ("opacity: 0.2");
		}, 500)
	}
	else {
		setTimeout( () => {
			document.getElementById("button_left").style = ("opacity: 1");
		}, 500)
	}
	
	if(display==7) {
		setTimeout( () => {
			document.getElementById("button_right").style = ("opacity: 0.2");
		}, 500)
	}
	else {
		setTimeout( () => {
			document.getElementById("button_right").style = ("opacity: 1");
		}, 500)
	}	
}

function scroll_right() {
	if(display==7) {
		
	}
	else {
		//scroll_to_card(display+1);
		display = display + 1;
		newleft = 0 - 51*(display - 1);
		$("#card_box").animate({left: newleft+'vw'});
		transparent();
	}
}


function scroll_left() {
	if(display==1) {
		
	}
	else {
		//scroll_to_card(display-1);
		display = display - 1;
		newleft = 0 - 51*(display - 1);
		$("#card_box").animate({left: newleft+'vw'});
		transparent();
	}
}

function scroll_to_card(card_number) {
	if(card_number==1){
		display = 1;
		newleft = 0 - 51*(display - 1);
		$("#card_box").animate({left: newleft+'vw'});
	}
	else if(card_number==2){
		display = 2;
		newleft = 0 - 51*(display - 1);
		$("#card_box").animate({left: newleft+'vw'});	
	}
	else if(card_number==3){
		display = 3;
		newleft = 0 - 51*(display - 1);
		$("#card_box").animate({left: newleft+'vw'});
	}
	else if(card_number==4){
		display = 4;
		newleft = 0 - 51*(display - 1);
		$("#card_box").animate({left: newleft+'vw'});
	}
	else if(card_number==5){
		display = 5;
		newleft = 0 - 51*(display - 1);
		$("#card_box").animate({left: newleft+'vw'});
	}
	else if(card_number==6){
		display = 6;
		newleft = 0 - 51*(display - 1);
		$("#card_box").animate({left: newleft+'vw'});
	}
	else if(card_number==7){
		display = 7;
		newleft = 0 - 51*(display - 1);
		$("#card_box").animate({left: newleft+'vw'});
	}
	
	transparent();
}

/* function scroll_to_card(card_number) {
	if(card_number==1){
		document.getElementById("card1").scrollIntoView({inline:'start', behavior:'smooth'});
		display = 1;
		
	}
	else if(card_number==2){
		document.getElementById("card2").scrollIntoView({inline:'start', behavior:'smooth'});
		display = 2;		
	}
	else if(card_number==3){
		document.getElementById("card3").scrollIntoView({inline:'start', behavior:'smooth'});
		display = 3;
	}
	else if(card_number==4){
		document.getElementById("card4").scrollIntoView({inline:'start', behavior:'smooth'});
		display = 4;
	}
	else if(card_number==5){
		document.getElementById("card5").scrollIntoView({inline:'start', behavior:'smooth'});
		display = 5;
	}
	else if(card_number==6){
		document.getElementById("card6").scrollIntoView({inline:'start', behavior:'smooth'});
		display = 6;
	}
	else if(card_number==7){
		document.getElementById("card7").scrollIntoView({inline:'start', behavior:'smooth'});
		display = 7;
	}
	
	transparent(display);
} */