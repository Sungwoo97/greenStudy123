var waypoints = $('.animate__animated').waypoint(function() {

  let effectName = $(this.element).attr('data-effect');
  $(this.element).addClass(effectName);
}, {
  offset: '65%' // 위에서부터
})