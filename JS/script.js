$(document).ready(function()
{
	
	$("#srch").click(function()
	{
    var query=$("#query").val();
		if (query==='')
		{
			$("#noval").show();
		}
		var link="https://en.wikipedia.org/w/api.php?action=opensearch&search="+query;
		$.ajax(
		{
			type: 'GET',
      url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + query,
      dataType: 'jsonp',
			success: function(result) {
        console.log(result);
        var obj = result.query.pages;
        for (var prop in obj) {
          $("ul").append('<a target="_blank" href="https://en.wikipedia.org/wiki?curid=' + obj[prop].pageid + '">' + '<li><h3 class="title ">' + obj[prop].title + '</h3><p class="text">' + obj[prop].extract + '</p></li></a>');
        }
      }
		});
	});
	$('.searchbar').keypress(function(e) 
	{
    	if (e.which == 13) 
    	{
      		$('#search').click();
      		return false;
    	}
  	});
});