$(document).ready(function () {
    $("#MyDiv").draggable();

    $("#MyHomeDiv span").draggable({
     containment: "#MyHomeDiv"
    });

    $("#MyHorizontalDiv span").draggable({
        axis: "x"
    });

    $("#MyVerticalDiv span").draggable({
        axis: "y"
    });


    $("#MyFiftyPixelDiv span").draggable({
        distance: 200
    });

    $("#MyThreeSecondsDelayDiv span").draggable({
        delay:1000
    });
    
   });















   $(document).ready(function () {
		  
    $("#Students").draggable();

    $("#Sky").droppable({ 
     accept: "#Students",
        drop:function(event, ui) {
            $(this).addClass("MyCls").find("p").html("Done.....");
            
        }
    });
    
});
















$(document).ready(function(){
    $("#MyDiv12").resizable();
});















$(document).ready(function () {
    
 $("#sortable-10").sortable();
  
 $("#sortable-11").sortable();
 $("#sortable-10").sortable({
   connectWith: " #sortable-11,#sortable-10"
});
$("#sortable-11").sortable({
connectWith: "#sortable-10, #sortable-11"


    });

});