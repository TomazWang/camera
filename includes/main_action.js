function getPhoto(){
    console.log("get photo...")

    var someDate;
    
     $.getJSON("data/data.json",function(result){
        
        console.log(result);
        var sel = Math.floor(Math.random()*result.length);
        console.log("sel = "+ sel);
        someDate = result[sel];
        
        console.log(someDate);

    });
}


