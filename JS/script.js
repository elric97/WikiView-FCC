$(document).ready(function()
{
  	$("#rand").click(function()
  	{
		window.open("https://en.wikipedia.org/wiki/Special:Random","_blank");
  	});	
	$("#srch").click(function()
	{
   		$("ul").empty();
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
			success: function(result) 
			{
        		var obj = result.query.pages; //get the number of pages
        		for (var prop in obj) 
				{//iterate throught page
        			$("ul").append('<a target="_blank" href="https://en.wikipedia.org/wiki?curid=' + obj[prop].pageid + '">' + '<li><h3 class="title ">' + obj[prop].title + '</h3><p class="text">' + obj[prop].extract + '</p></li></a>');
        			//creating links of the li elements here and makin the whole element a link
				}
      		}
		});
	});
	$('.searchbar').keypress(function(e) 
	{
    	if (e.which == 13) //for searching when pressing the enter key
    	{
      		$('#srch').click();
      		return false;
    	}
  	});
  
   $("ul li").mouseenter(function() //not working correctly will look into it 
   {
        $(this).fadeTo("slow",1);  
   }) 
});