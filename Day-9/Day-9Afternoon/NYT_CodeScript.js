$(document).ready(function() {
 var url= "https://api.nytimes.com//svc/search/v2/articlesearch.json" + "?api-key=af618dc34e8f43d5aced617c9762e224";
 $(document).keypress(function(e){
   if (e.keyCode ==13 ) {
     var searched = $("#search-input").val();
     url=url + "&q=" + searched;

     $.ajax ({
       url: url,
       method: "GET",
       success: handleResponse,
       error: function(error) {
         alert("error!");
       }
     });
   }
 });
});

function handleResponse(response) {
 for (var i=0; i<response.response.docs.length; i++) {
   $("#list").append("<div>"+response.response.docs[i].headline.main+"</div>");
   console.log(response.response.docs[i].headline.main);
 }
}