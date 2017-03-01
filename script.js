$(document).ready(function(){

  $('#search').click(function(){

    var searchTerm = $('#searchTerm').val();
    var url = "http://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?"



    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType:"json",
      success: function(data){
        $("#output").html(" ");
        for(var i=0; i<data[1].length; i++){
          $('#output').prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
      },
      error:function(errorMessage){
        alert("Error");
      }
    });
  });
});
