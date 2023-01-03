$(document).ready(function(){
  var $moveable = $('.container');
  var rectPosY = parseInt($('.container').css('top'), 10);
  var rectPosX = parseInt($('.container').css('left'), 10);
  $(document).mousemove(function(e){
      $moveable.css({'top': rectPosY+e.pageY/40,'left': rectPosX+e.pageX/40});
  });
});