$(function(){
  $('.menuburger').on('click', function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('header').removeClass('active');
      $('.main').removeClass('active');
      $('.main-competences').removeClass('active');
    }
    else{
    $(this).addClass('active');
    $('header').addClass('active');
    $('.main').addClass('active');
    $('.main-competences').addClass('active');
  }
  });
  /** Chanegement de lien active */
  $('.menulink li a').on('click', function(){
    $('.menulink li').removeClass('active');
    $(this).parent().addClass('active')
  });
});