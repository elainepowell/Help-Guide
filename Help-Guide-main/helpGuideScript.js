var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++)
{
  coll[i].addEventListener("click", function()
  {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight)
    {
      content.style.maxHeight = null;
    } else
    {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
 }

function openContent()
{
	//var hash = window.location.hash; //Leaves # character
	//alert("This is what is selected: " + hash);
	//var linkedContent = document.getElementById("anchor").name;
	//var anchors = document.anchors[0].innerHTML;
	//var selectedContent = document.getElementsByName(linkedContent).elements;
	//var selectedContent = linkedContent.nextElementSibling;

	if (window.location.hash)
	{
		var hash = window.location.hash; //Leaves # character
		alert("This is what is selected: " + hash);
		return (hash);
		hash.style.maxHeight = hash.scrollHeight + "px";
	}
	else
	{
		return ('');
	}
};

/*$(document).ready(function()
{
   $(expandByAnchor()).removeClass('mw-collapsed');  
});
 
var expandByAnchor = function()
{
   if(window.location.hash) 
   {
      var hash = window.location.hash; //Leaves # character
      return (hash);      
   } 
   else
   {
      return ('');
   }
};*/