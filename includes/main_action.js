var symbol,photoQueue;

var dataUrl,imgUrl,includesUrl;

var camTop,memo_words_left;

function before(isMobile, sym) {
    console.log("pre-excute");
    console.log(isMobile);
    symbol = sym;

    if (isMobile) {
        dataUrl = "../data/data.json";
        imgUrl = "../images/";
        includesUrl = "../includes/";
        
        memo_words_left = "15%";
        camTop = "20%";
        
    }
    else {
        dataUrl = "./data/data.json";
        imgUrl = "./images/";
        includesUrl = "./includes/";
        
        memo_words_left = "30%";
        camTop = "30%";
    }
    getPhotos();
    photoQueue = new Array();
}

function getPhotos() {

    // -- getting photos
    console.info("get photo ...");

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
}

function afterAjax(result) {

    console.log(result);

    for (; photoQueue.length < 3;) {

        var sel = Math.floor(Math.random() * result.length);
        // console.log("sel = " + sel);

        var someDate = result[sel];
        // console.log("someDate : \n"+someDate);

        var src_p1 = imgUrl + someDate.dateCode + "/" + someDate.dateCode + "1.jpg";
        var src_p2 = imgUrl + someDate.dateCode + "/" + someDate.dateCode + "2.jpg";

        $.getScript((includesUrl + "jquery.preload.min.js"), function() {
            $.preload(src_p1, src_p2);
        });

        var photo = {
            p1: src_p1,
            p2: src_p2,
            title: someDate.title,
            txt: someDate.txt
        };
        // console.log("photo:")
        // console.log(photo);

        photoQueue.push(photo);
        // console.log("photoQueue: \n"+photoQueue);
    }

    symbol.play("page_start");


}



function main_action() {

    console.info("click on camera");

    if (photoQueue.length < 3) {
        getPhotos();
    }
    showPhoto();
}



function showPhoto() {

    console.info("Showing photos...");

    // -- turn off camera button
    $("#Stage_Group").css({
        top: "-30%",
        visibility: "hidden",
    });

    // -- showing photos

    console.log(photoQueue);

    var photo = photoQueue[0];
    photoQueue.shift();
    console.log(photo);


    $("#Stage_photo0").attr("src", photo.p1);
    $("#Stage_photo1").attr("src", photo.p2);

    $("#Stage_photos").css({
        visibility: " visible ",
        top: "94px",
    }).show();

    setTimeout(function() {
        symbol.play("photoIn");
    }, 200);


    // -- showing text
    var pos_top = $("#Stage_photos").position().top + $("#Stage_photo_paper1").height() + 120,
        pos_left = $("#Stage_photos").position().left;

    console.log(pos_top + " , " + pos_left);
    $("#memo_title").text(photo.title);
    $("#memo_txt").text(photo.txt);

    $("#memo_words").css({

        position: "absolute",
        top: (pos_top) + "px",
        left: memo_words_left,
        visibility: "visible"
    });



    $("#Stage_photos").click(function() {

        // -- turn off text
        // console.log("turn off text");

        $("#memo_words").css({
            visibility: "hidden",
        });


        // -- turn on camera
        // console.log("turn off camera");
        $("#Stage_Group").css({
            top: camTop,
            visibility: "visible",
        });
        symbol.play("page_start");



        // -- turn off photos
        // console.log("turn off photos");
        $(this).off("click");
        $(this).css({
            top: "-800px",
            visibility: "hidden",
        });

        symbol.play("page_start");
    });

}
