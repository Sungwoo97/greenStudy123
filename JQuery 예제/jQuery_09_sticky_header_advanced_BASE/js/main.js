$(function () {
  const header = $('.page-header');
  const headerOST = header.offset().top;
  const headerHeight = header.innerHeight(); 
  const headerClone = header.contents().clone(); //header 요소 안의 모든 컨텐츠를 복사
  const headerCloneContainer = $('<div class="page-header-clone"></div>');
  const body = $('body');

  console.log(headerOST, headerHeight);
  
  headerCloneContainer.html(headerClone);
//haederCloneContainer를 body의 내용뒤에 추가
  headerCloneContainer.appendTo(body);   
  
  
  let headerMaxHeight = headerOST + headerHeight;
  $(window).scroll(function(){
    if(headerMaxHeight < $(this).scrollTop()){
      headerCloneContainer.addClass('visible');
    }else{
      headerCloneContainer.removeClass('visible');
    }
  });
});
