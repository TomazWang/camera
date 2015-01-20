/***********************
 * Adobe Edge Animate Composition Actions
 *
 * Edit this file with caution, being careful to preserve
 * function signatures and comments starting with 'Edge' to maintain the
 * ability to interact with these actions from within Adobe Edge Animate
 *
 ***********************/
(function($, Edge, compId) {
   var Composition = Edge.Composition,
      Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {

      var isCameraDown = false;

      Symbol.bindElementAction(compId, symbolName, "${camera_body}", "mousedown", function(sym, e) {
         console.log("mousedown on camera - from edge animate");
         $("#Stage_camera_body").css("box-shadow", "rgba(0, 0, 0, 0.458824) 0px 0px 0px 0px");
         $("#Stage_camera_body").css("top", "16px").css("left", "23px");
         isCameraDown = true;
      });


      Symbol.bindElementAction(compId, symbolName, "${camera_body}", "mouseup", function(sym, e) {
         console.log("mouseup on camera - from edge animate");
         $("#Stage_camera_body").css("box-shadow", "rgba(0, 0, 0, 0.458824) 23px 16px 16px 0px");
         $("#Stage_camera_body").css("top", "0px").css("left", "0px");
         isCameraDown = false;
      });


      Symbol.bindElementAction(compId, symbolName, "${camera_body}", "mouseout", function(sym, e) {

         if (isCameraDown) {
            console.log("mouseout on camera - from edge animate");
            $("#Stage_camera_body").css("box-shadow", "rgba(0, 0, 0, 0.458824) 23px 16px 16px 0px");
            $("#Stage_camera_body").css("top", "0px").css("left", "0px");
            isCameraDown = false;
         }

      });

      Symbol.bindElementAction(compId, symbolName, "${camera_body}", "click", function(sym, e) {
         console.log("click on camera - from edge animate");


         // -- getting photos
         console.log("get photo...")

         var someDate;

         $.getJSON("data/data.json", function(result) {

            console.log(result);
            var sel = Math.floor(Math.random() * result.length);
            console.log("sel = " + sel);
            someDate = result[sel];

            // console.log(someDate);



            // console.log("src for p0 = " + someDate.p1);
            // console.log("src for p1 = " + someDate.p2);
            // console.log("words for p = " + someDate.txt);


            // -- turn off camera button
            $("#Stage_Group").css({
               top: "-30%",
               visibility: "hidden",
            });

            // -- showing photos

            // $("#Stage_photo0").css({backgroundImage : "url("+someDate.p0+")",});
            // $("#Stage_photo1").css({backgroundImage : "url("+someDate.p1+")",});

            $("#Stage_photo0").attr("src", someDate.p0);
            $("#Stage_photo1").attr("src", someDate.p1);

            $("#Stage_photos").css({
               visibility: " visible ",
               top: "94px",
            }).show();


            sym.play("photoIn");


            // -- showing text
            var pos_top = $("#Stage_photos").position().top + $("#Stage_photo_paper1").height() + 160,
               pos_left = $("#Stage_photos").position().left;

            console.log(pos_top + " , " + pos_left);
            $("#memo_words").text(someDate.txt);

            $("#memo_words").css({
               position: "absolute",
               top: (pos_top) + "px",
               left: (pos_left - 10) + "px",
               width: ($("#Stage_photos").width() - 20) + "px",
               visibility: "visible"
            });


            $("#Stage_photos").click(function() {

               // -- turn off text
               console.log("turn off text");

               $("#memo_words").css({
                  visibility: "hidden",
               });


               // -- turn on camera
               console.log("turn off camera");
               $("#Stage_Group").css({
                  top: "30%",
                  visibility: "visible",
               });
               sym.play("page_start");



               // -- turn off photos
               console.log("turn off photos");
               $(this).off("click");
               $(this).css({
                  top: "-800px",
                  visibility: "hidden",
               });
            });

         });
      });

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
      });

      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //Edge symbol: 'main_circle'
   (function(symbolName) {

   })("main_circle");
   //Edge symbol end:'main_circle'

   //=========================================================

   //Edge symbol: 'circles'
   (function(symbolName) {

   })("circles");
   //Edge symbol end:'circles'

   //=========================================================

   //Edge symbol: 'lence'
   (function(symbolName) {

   })("lence");
   //Edge symbol end:'lence'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-17128933");