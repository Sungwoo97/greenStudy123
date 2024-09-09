let sectionCount = $('#fullpage .section').length;

function initFullpage(){
  
  $('#fullpage').fullpage({
      //options here
      autoScrolling:true,
      //scrollHorizontally: true
      navigation:true,
      menu: '#menu',
      anchors:['section1', 'section2', 'section3', 'section4'],
      afterLoad: function(origin, destination, direction, trigger){  // 이전, 현재, 방향
        if(destination.index === sectionCount - 1){
          $('#top').addClass('active');
        }else{
          $('#top').removeClass('active');
        }
      }
  });
}
initFullpage();
$(window).resize(function(){
  if($(this).width() <= 500){
    fullpage_api.destroy('all');
  }else{
    initFullpage();
  }
})

$(document).on('click', '#prev', function(){
  fullpage_api.moveSectionUp();
});
$(document).on('click', '#next', function(){
  fullpage_api.moveSectionDown();
});
