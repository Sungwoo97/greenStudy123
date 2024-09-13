$('.modal-container').hide();
$('.btn').click(function(){
  // $('.modal-container').addClass('active');
  $('.modal-container').fadeIn();
});
$('.modal-container').click(function(){
  // $(this).removeClass('active');
  $(this).fadeOut();
});