var followers = ""
set.forEach(function(values) 
{ 
     followers+=values+"\n"
});
var myBlob = new Blob([followers], {type: 'text/plain'});
var url = window.URL.createObjectURL(myBlob);
var anchor = document.createElement("a");
anchor.href = url;
anchor.download = "followers.txt";
anchor.click();
window.URL.revokeObjectURL(url);