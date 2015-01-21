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

   var isMobile = true,
      isInitialized = false;


   //Edge symbol: 'stage'
   (function(symbolName) {

      var isCameraDown = false;

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         if (!isInitialized) {
            $.getScript("../includes/main_action.js", function() {
               before(isMobile, sym);
            });
            isInitialized = true;
         }
      });

      Symbol.bindElementAction(compId, symbolName, "${camera_body}", "click", function(sym, e) {

         $.getScript("../includes/main_action.js", function() {
            main_action();
         });
         console.log("click on camera - from edge animate mobile");

      });



      Symbol.bindElementAction(compId, symbolName, "${camera_body}", "mousedown", function(sym, e) {
         console.log("mousedown on camera - from edge animate mobile");
         $("#Stage_camera_body").css("box-shadow", "rgba(0, 0, 0, 0.458824) 0px 0px 0px 0px");
         $("#Stage_camera_body").css("top", "16px").css("left", "23px");
         isCameraDown = true;
      });


      Symbol.bindElementAction(compId, symbolName, "${camera_body}", "mouseup", function(sym, e) {
         console.log("mouseup on camera - from edge animate mobile");
         $("#Stage_camera_body").css("box-shadow", "rgba(0, 0, 0, 0.458824) 23px 16px 16px 0px");
         $("#Stage_camera_body").css("top", "0px").css("left", "0px");
         isCameraDown = false;
      });


      Symbol.bindElementAction(compId, symbolName, "${camera_body}", "mouseout", function(sym, e) {

         if (isCameraDown) {
            console.log("mouseout on camera - from edge animate mobile");
            $("#Stage_camera_body").css("box-shadow", "rgba(0, 0, 0, 0.458824) 23px 16px 16px 0px");
            $("#Stage_camera_body").css("top", "0px").css("left", "0px");
            isCameraDown = false;
         }

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