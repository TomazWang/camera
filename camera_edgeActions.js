/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      var isCameraDown = false;
      
      Symbol.bindElementAction(compId, symbolName, "${camera_body}", "mousedown", function(sym, e) {
         console.log("mousedown on camera - from edge animate");
         $("#Stage_camera_body").css("box-shadow","rgba(0, 0, 0, 0.458824) 0px 0px 0px 0px");
         $("#Stage_camera_body").css("top","16px").css("left","23px");
         isCameraDown = true;
      });
      
      
      Symbol.bindElementAction(compId, symbolName, "${camera_body}", "mouseup", function(sym, e) {
         console.log("mouseup on camera - from edge animate");
         $("#Stage_camera_body").css("box-shadow","rgba(0, 0, 0, 0.458824) 23px 16px 16px 0px");
         $("#Stage_camera_body").css("top","0px").css("left","0px");
         isCameraDown = false;
      });

      
      Symbol.bindElementAction(compId, symbolName, "${camera_body}", "mouseout", function(sym, e) {
        
         if(isCameraDown){
            console.log("mouseout on camera - from edge animate");
            $("#Stage_camera_body").css("box-shadow","rgba(0, 0, 0, 0.458824) 23px 16px 16px 0px");
            $("#Stage_camera_body").css("top","0px").css("left","0px");
            isCameraDown = false;
         }
            
      });
      
      Symbol.bindElementAction(compId, symbolName, "${camera_body}", "click", function(sym, e) {
         console.log("click on camera - from edge animate");
         var p_srcs = getPhoto();
         console.log("src for p0 = "+p_srcs[0]);
         console.log("src for p1 = "+p_srcs[1]);
         $("#Stage_Group").hide();
         
         var pos_top = $("#Stage_photo_paper1").position().top + $("#Stage_photo_paper1").height() + 160,
            pos_left = $("#Stage_photo_paper1").position().left;
         
         console.log(pos_left);
         $("#memo_words_container").css({
            position : "absolute",
            top :(pos_top) + "px",
            textAlign:"center"
         }).show();
         
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