$(document).ready(function () {
    $("#MyAccordion").accordion();
  })




  $(document).ready(function () {
			
    $("#MyDOBPicker1").datepicker({
          showWeek: true,
          yearSuffix: "(DOB)",
          showAnim: "slide"
      });

      
      $("#MyDOBPicker2").datepicker();
      $("#MyDOBPicker2").datepicker("show");
      
  });




  $(document).ready(function(){
    $("#MyDiv").dialog({
     autoOpen: false,
     });
    $("#MyButton").click(function () {
        $("#MyDiv").dialog("open");
    });
});








$(document).ready(function() {
    $("#AgeRangeSlider").slider({
        orientation:"horizontal",
        min: 18,
        max: 100,
        value: 18,
        slide: function (event, ui) {
            $("#AgeValue").val(ui.value);
        }
    });
    $("#AgeValue").val($("#AgeRangeSlider").slider("value"));

    $("#PriceValue").slider({
      range: true,
        min: 1,
        max: 500,
        values: [1, 50],
       
       
        start: function (event, ui) {
            $("#startvalue")
           .val("₹" + ui.values[0]);
        },
        stop: function (event, ui) {
            $("#endvalue")
           .val("₹" + ui.values[1]);
        },
        change: function (event, ui) {
            $("#changevalue")
           .val("₹" + ui.values[0] + " - ₹" + ui.values[1]);
        },
        slide: function (event, ui) {
            $("#slidevalue")
           .val("₹" + ui.values[0] + " - ₹" + ui.values[1]);
        }
    });
});








$(document).ready(function () {
    $("#MyValueList").spinner();
 });








 $(document).ready(function(){
    $("#stars-default").rating('create',
       {
            coloron: 'red',
            onClick: function () {
               alert('rating is ' + this.attr('data-rating'));
               
            }
        });
    });



    (function ($) {

        $.fn.rating = function (method, options) {
            method = method || 'create';
            // This is the easiest way to have default options.
            var settings = $.extend({
                // These are the defaults.
                limit: 5,
                value: 0,
                glyph: "glyphicon-star",
                coloroff: "gray",
                coloron: "gold",
                size: "1.3em",
                cursor: "pointer",
                onClick: function () {
                },
                endofarray: "idontmatter"
            }, options);
            var style = "";
            style = style + "font-size:" + settings.size + "; ";
            style = style + "color:" + settings.coloroff + "; ";
            style = style + "cursor:" + settings.cursor + "; ";
    
    
            if (method == 'create') {
                //this.html('');	//junk whatever was there
    
                //initialize the data-rating property
                this.each(function () {
                    attr = $(this).attr('data-rating');
                    if (attr === undefined || attr === false) {
                        $(this).attr('data-rating', settings.value);
                    }
                });
    
                //bolt in the glyphs
                for (var i = 0; i < settings.limit; i++) {
                    this.append('<span data-value="' + (i + 1) + '" class="ratingicon glyphicon ' + settings.glyph + '" style="' + style + '" aria-hidden="true"></span>');
                }
    
                $('.ratingicon').mouseover(function () {
                    var starValue = $(this).data('value');
                    var ratingIcons = $('.ratingicon');
                    for (var i = 0; i < starValue; i++) {
                        $(ratingIcons[i]).css('color', settings.coloron);
                    }
                }).mouseout(function () {
                    var currentRate = $(this).parent().attr('data-rating');
                    var ratingIcons = $('.ratingicon');
                    for (var i = ratingIcons.length; i >= currentRate; i--) {
                        $(ratingIcons[i]).css('color', settings.coloroff);
                    }
                });
    
                //paint
                this.each(function () {
                    paint($(this));
                });
    
            }
            if (method == 'set') {
                this.attr('data-rating', options);
                this.each(function () {
                    paint($(this));
                });
            }
            if (method == 'get') {
                return this.attr('data-rating');
            }
            //register the click events
            this.find("span.ratingicon").click(function () {
                rating = $(this).attr('data-value');
                $(this).parent().attr('data-rating', rating);
                paint($(this).parent());
                settings.onClick.call($(this).parent());
            });
            function paint(div) {
                rating = parseInt(div.attr('data-rating'));
                div.find("input").val(rating);	//if there is an input in the div lets set it's value
                div.find("span.ratingicon").each(function () {	//now paint the stars
    
                    var rating = parseInt($(this).parent().attr('data-rating'));
                    var value = parseInt($(this).attr('data-value'));
                    if (value > rating) {
                        $(this).css('color', settings.coloroff);
                    }
                    else {
                        $(this).css('color', settings.coloron);
                    }
                })
            }
        };
    }(jQuery));












    $(document).ready(function () {
        $("#MyTabDiv").tabs();

      });
    