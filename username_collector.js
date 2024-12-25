var i = 1;
var set = new Set();             

function exit() {
    window.collectedUsernames = Array.from(set);
    clearTimeout(window.usernameCollectorLoopTimeout);
}

function loop() {      
    window.usernameCollectorLoopTimeout = setTimeout(function() { 
        window.scrollBy(0,1000);
        var element = document.getElementsByClassName("css-901oao css-bfa6kz r-14j79pv r-18u37iz r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0");
        for(var j=0;j<element.length;j++)
        {
            try 
            {
                set.add(element[j].innerText);
            }
            catch (error) {}
            console.log(set.size);
        }
        i++;                
        if (i < 10000) {       
            loop();            
        } else {
            exit();
        }                      
    }, 500)
}
loop();