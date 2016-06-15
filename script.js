$.ajax(
    {url: "http://api.giphy.com/v1/gifs/search?q=snl+funny&api_key=dc6zaTOxFJmzC&rating=pg", 
  success: function(result){
    
      var container = "";

    for (var index in result.data){ 
       var dogGif = result.data[index];
       console.log(dogGif.images.original.url);
      
        var image = "<p><img src='"+dogGif.images.original.url+"' /><p>";
        container = container + image;
    }
      
    $("#container").html(container);  
      
     
         //console.log(result)
    },
  
  
  error:function(error){
        console.log(error);
  }
});