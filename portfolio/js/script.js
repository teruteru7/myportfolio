$(function(){

  $('.menu').click(function(){
      $('.modal').fadeIn();
      $('.menu').fadeOut();
  });

  $('#menu2').click(function(){
      $('.modal').fadeOut();
      $('.menu').fadeIn();
  });

  $(document).ready(function(){
      $('.sentence2').slideDown(2000);
  });

	$(window).on('scroll touchmove', function(){
			$('.menu').stop();
			$('.menu').css('display', 'none').fadeIn('50');
	});
});
