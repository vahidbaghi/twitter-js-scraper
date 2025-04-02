var urlString = Array.from(window.tweetCollectorUrlSet).join('\n');
var myBlob = new Blob([urlString], {type: 'text/plain'});
var url = window.URL.createObjectURL(myBlob);
var anchor = document.createElement("a");
anchor.href = url;
anchor.download = "urls.txt";
anchor.click();
window.URL.revokeObjectURL(url);
