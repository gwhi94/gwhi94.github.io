
$("#arrowOne").click(function(){
	$('html,body').animate({
		scrollTop: $("#about").offset().top -15},
		900);
	});



window.onscroll = function(){stickyNav()};

var navBar = document.getElementById("stickyNav");

var sticky = navBar.offsetTop;

function stickyNav(){
	if(window.pageYOffset >= sticky){
		navBar.classList.add("sticky")
	}else{
		navBar.classList.remove("sticky");
	}
}


$("#stickyNav a").on('click', function(event){
	if(this.hash !== ""){
		event.preventDefault();

		var hash = this.hash;

		$("html,body").animate({
			scrollTop:$(hash).offset().top
		},900,function(){
			window.location.hash=hash;

		});
	}

});


$("#pCardOne").flip({
  axis:'y',
  trigger: 'click',
  speed:200
});
$("#pCardTwo").flip({
  axis:'y',
  trigger: 'click',
  speed:200
});
$("#pCardThree").flip({
  axis:'y',
  trigger: 'click',
  speed:200
});
$("#pCardFour").flip({
  axis:'y',
  trigger: 'click',
  speed:200
});
$("#pCardFive").flip({
  axis:'y',
  trigger: 'click',
  speed:200
});
$("#pCardSix").flip({
  axis:'y',
  trigger: 'click',
  speed:200
});
$("#pCardSeven").flip({
  axis:'y',
  trigger: 'click',
  speed:200
});
$("#pCardEight").flip({
  axis:'y',
  trigger: 'click',
  speed:200
});
$("#pCardNine").flip({
  axis:'y',
  trigger: 'click',
  speed:200
});

$(".card").hover(function(){
    $(this).css("border","4px solid #44bd32");
    }, function(){
      $(this).css('border','4px solid rgb(64,196,255)');
    });

