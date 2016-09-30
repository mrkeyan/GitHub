function message(val){
    $(".message").text(val);
}

$(document).ready(function(){
    //set input to previously saved value
    chrome.storage.local.get("definedURL", function(result){
        if(result.definedURL!=undefined){
            $(".urlinput").attr("placeholder",result.definedURL);
        }else{
            $(".urlinput").attr("placeholder","type url here...");
        
        }
    });
    $(".urlbutton").click(function(){
    $(".message").text($(".urlinput").val());
    chrome.storage.local.set({'definedURL': $(".urlinput").val()}, function() {
          // Notify that we saved.
          message('Settings saved');
        });

  });

  //allow update when enter is pressed
  $('input').keypress(function (e) {
    if (e.which == 13) {
      $(".urlbutton").click();
      return false;
    }
  });
});