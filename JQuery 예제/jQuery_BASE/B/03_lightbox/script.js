const images = $('.gallery img');
const lightboxOverlay = $('#lightbox-overlay');
const lightboxImage = $('#lightbox-image');

/*
*/


images.click(function(){
  let targetUrl = $(this).attr('data-lightbox');
  lightboxImage.attr('src',targetUrl);
  lightboxOverlay.addClass('visible');

});
lightboxOverlay.click(function(){
  lightboxOverlay.removeClass('visible');
})
