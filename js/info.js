var click_count = 0;
$(function(){
    $(".title-block").click(function(){
        if(click_count == 0){
            $("#main_icon").html("camera_enhance");
            ++click_count;
        } else {
            $("#main_icon").html("photo_camera");
            --click_count;
        }
    });
});