$(document).ready(function(){
    var isVisible = true;
    setInterval(function(){
        if(isVisible){
            $("#img").hide();
            isVisible = false;
        }
        else {
            $("#img").show();
            isVisible = true;
        }
    }, 500)
});