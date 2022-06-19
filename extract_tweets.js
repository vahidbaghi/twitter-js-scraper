var dictstring = JSON.stringify(dict);
var myBlob = new Blob([dictstring], {type: 'text/plain'});
var url = window.URL.createObjectURL(myBlob);
var anchor = document.createElement("a");
anchor.href = url;
anchor.download = "tweets.txt";
anchor.click();
window.URL.revokeObjectURL(url);