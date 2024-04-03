var itemCountsString = JSON.stringify(itemCounts, null, 2);

var myBlob = new Blob([itemCountsString], {type: 'application/json'});
var url = window.URL.createObjectURL(myBlob);
var anchor = document.createElement("a");
anchor.href = url;
anchor.download = "itemCounts.json"; // Change the file name to reflect the content
anchor.click();
window.URL.revokeObjectURL(url);