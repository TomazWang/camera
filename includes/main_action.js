function main_action(sym, isMobile) {
    console.log("click on camera");

    var dataUrl = "data/data.json",
        imgUrl = "images/",
        memo_words_left = "30%",
        someDate;

    if (isMobile) {
        dataUrl = "../data/data.json",
        memo_words_left = "15%",
        imgUrl = "../images/";
    }

    // -- getting photos
    console.log("get photo ...")

    

    $.ajax({

        url: dataUrl,
        dataType: "json",
        success: function(result) {
            afterAjax(result);
        },
        error: function(jqFXR, status, error) {
            console.log("ajax fail :: " + "\n\t" + status + ",\n\t " + error);
        }
    });

    // $.getJSON("data/data.json", afterAjax);


    function afterAjax(result) {

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

        // $("#Stage_photo0").attr("src", someDate.p0);
        // $("#Stage_photo1").attr("src", someDate.p1);

        var src_p1 = imgUrl + someDate.dateCode + "/" + someDate.dateCode + "1.jpg";
        var src_p2 = imgUrl + someDate.dateCode + "/" + someDate.dateCode + "2.jpg";

        $("#Stage_photo0").attr("src", src_p1);
        $("#Stage_photo1").attr("src", src_p2);

        $("#Stage_photos").css({
            visibility: " visible ",
            top: "94px",
        }).show();

        setTimeout(function() {
            sym.play("photoIn");
        }, 200);


        // -- showing text
        var pos_top = $("#Stage_photos").position().top + $("#Stage_photo_paper1").height() + 120,
            pos_left = $("#Stage_photos").position().left;

        console.log(pos_top + " , " + pos_left);
        $("#memo_title").text(someDate.title);
        $("#memo_txt").text(someDate.txt);

        $("#memo_words").css({
            
            position: "absolute",
            top: (pos_top) + "px",
            // left : ($(window).width()/2 - $("#memo_words").width()) + "px",
            left : memo_words_left,
            visibility: "visible"
        });

        // $("#memo_words").css({
        //     position: "absolute",
        //     top: (pos_top) + "px",
        //     left: (pos_left) + "px",
        //     width: ($("#Stage_photos").width() - 50) + "px",
        //     visibility: "visible"
        // });


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

    }
}
