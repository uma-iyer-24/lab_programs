$(document).ready(function(){
    var stars = 0;
    $(".star").click(function(){
        stars = $(this).data("value");
        $(".star").each(function(){
            if($(this).data("value") <= stars){
                $(this).css("color", "lightgreen");
            }
            else{
                $(this).css("color", "black");
            }
        });
        $("#ratingText").text("Your Rating : " + stars + "/5 Stars");
    });
});