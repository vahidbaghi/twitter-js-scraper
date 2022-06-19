var i = 1;
var dict = {};
var like_regex = /\b(\d+) Like|Likes\b/;
var retweet_regex = /\b(\d+) Retweet|Retweets\b/;
var reply_regex = /\b(\d+) Repl(ies|y)\. Reply\b/;
var time_regex =  /\btime datetime=\"(.*?)\">\b/;
var status_regex = /\b\/status\/(\d+)\b/;
            
function loop() {      
    setTimeout(function() { 
    window.scrollBy(0,1000);
    var element = document.getElementsByClassName("css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-kzbkwu");
    for(var index=0;index<element.length;index++)
    {
       try {
	   var reply = element[index].innerHTML.match(reply_regex);
           var like = element[index].innerHTML.match(like_regex);
           var retweet = element[index].innerHTML.match(retweet_regex);
		   var time = element[index].innerHTML.match(time_regex);
       var status = element[index].innerHTML.match(status_regex);
           dict[element[index].innerText.split("\n")[1].concat("-"+time[1])] = {"like":`${like[1]}`, "reply":`${reply[1]}`, "retweet":`${retweet[1]}`, "time":`${time[1]}`, "text":`${element[index].innerText}`, "status":`${status[1]}`};
       } 
       catch (error) {
         console.log(error)
       }
    }
    i++;                
    if (i < 100000) {       
      loop();            
    }                      
  }, 500)
}
loop();