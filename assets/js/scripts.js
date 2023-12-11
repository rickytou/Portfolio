$(function(){
  $('.menuburger').on('click', function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('header').removeClass('active');
       $('main').removeClass('active');
      // $('.main-competences').removeClass('active');
      // $('.main-education').removeClass('active');
    }
    else{
    $(this).addClass('active');
    $('header').addClass('active');
     $('main').addClass('active');
    // $('.main-competences').addClass('active');
    // $('.main-education').addClass('active');
  }
  });
  /** Chanegement de lien active */
  $('.menulink li a').on('click', function(){
    $('.menulink li').removeClass('active');
    $(this).parent().addClass('active')
  });


  /** Evenement */
  function isInViewport(element) {
    var rect = element[0].getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isPartiallyVisible(element) {
  var elementRect = element[0].getBoundingClientRect();
  var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;

  return (
      elementRect.top < windowInnerHeight &&
      elementRect.bottom >= 0
  );
}

$(window).on('scroll', function() {
  var elementCible = $('#formations');

  if (isPartiallyVisible(elementCible)) {
      $("#formations").addClass('anime');
  }
});

/** Hover */

$('.image-project').off('mouseenter').off('mouseleave')

  .on('mouseenter', function() { 
    $(this).addClass('active');
  })
  .on('mouseleave', function() { 
    $(this).removeClass('active');
  });



});