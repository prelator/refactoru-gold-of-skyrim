//Define globally accessible variables
var counter = 0;
var pos_x;
var pos_y;

//=========== Begin ready function ==============
$(document).ready(function(){ 

  //====Show/hide instructions when mouse-over header====
  $("header").mouseenter(function(){
    $(".header-text").fadeIn(200);
  });

  $("header").mouseleave(function(){
    $(".header-text").fadeOut(200);
  });


  //Get mouse position within "#main-container";
  //Create new marker at mouse position 
  $("#map").on("click", function point_it(event){
    if ($("#popup").css('display') === 'none') {
      pos_x = event.offsetX ? (event.offsetX) : event.pageX-document.getElementById("main-container").offsetLeft;
      pos_y = event.offsetY ? (event.offsetY) : event.pageY-document.getElementById("main-container").offsetTop;
      console.log("x:" + pos_x + " Y:" + pos_y);
      counter = counter + 1;
      var newMarker = $("<img class='marker' src='marker.png'>");
      $(newMarker).attr('id', 'marker'+ counter).data('index',counter).appendTo("#main-container");
      $("#marker"+counter).css({"top": pos_y - 50, "left": pos_x - 13});
      $("#popup").show();
    } else {
      alert("Please submit the comment form before creating a new marker.");
      }
  });

  //Remove marker on double click
  $(document).on("dblclick", ".marker", function(){
    if ($("#popup").css('display') === 'none') {
      var comNum = $(this).data("index");
      $("#comment"+comNum).remove();
      $(this).remove();
    } else {
      alert("Please submit the comment form before deleting this marker.");
      }    
  });

  //Submit comment form
  $("#comment-form").submit(function(e){
    e.preventDefault();
    newComment = $("#enter-comment").val();
    $("#comment0").clone().attr('id', 'comment'+ counter).data("index", counter).appendTo("#main-container"); 
    $("#comment"+counter).find("h5").text("Marker " + counter + " comment:");
    $("#comment"+counter).find("p").text(newComment);
    $("#comment"+counter).css({"top": pos_y - 75, "left": pos_x + 15});
    $("#enter-comment").val('');
    $("#popup").hide();
  });

  //====== Show/hide comment when mouse-over marker ========
  $(document).on("mouseenter", ".marker", function(){
    var idnum = $(this).data("index");
    $("#comment"+idnum).fadeIn(200);
    }
  );

  $(document).on("mouseleave", ".marker", function(){
      var idnum = $(this).data("index");
      $("#comment"+idnum).fadeOut(200);
    }
  );

}); //============End ready function ====================