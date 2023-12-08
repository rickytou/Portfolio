$(function(){
  $('.menuburger').on('click', function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('header').removeClass('active');
      $('.main').removeClass('active');
    }
    else{
    $(this).addClass('active');
    $('header').addClass('active');
    $('.main').addClass('active');
  }
  });
});