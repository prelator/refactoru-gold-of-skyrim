
  var counter = 0;


//=========== Begin ready function ==============
$(document).ready(function(){ 



  $("#map").on("click", function point_it(event){
    pos_x = event.offsetX ? (event.offsetX) : event.pageX-document.getElementById("main-container").offsetLeft;
    pos_y = event.offsetY ? (event.offsetY) : event.pageY-document.getElementById("main-container").offsetTop;
    console.log("x:" + pos_x + " Y:" + pos_y);
    counter = counter + 1;
    var newMarker = $("<img class='marker' src='marker.png'>");
    $(newMarker).attr('id', 'marker'+ counter).appendTo("#main-container");
    $("#marker"+counter).css({"top": pos_y - 50, "left": pos_x - 13}); 

  });














}); //============End ready function ====================