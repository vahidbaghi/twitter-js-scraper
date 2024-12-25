var i = 1;
var itemCounts = {};

function exit() {
    window.collectedLikes = itemCounts;
    clearTimeout(window.likesCollectorLoopTimeout);
}

function loop() {      
    window.likesCollectorLoopTimeout = setTimeout(function() { 
        window.scrollBy(0,1000);
        
        const divs = document.querySelectorAll('div');
        divs.forEach(div => {
            if (div.getAttribute('data-testid') && div.getAttribute('data-testid').includes('UserAvatar-Container-') && div.closest(`[role="list"]`)) {
                var itemId = div.getAttribute('data-testid').replace('UserAvatar-Container-', "");
                if (itemCounts[itemId]) {
                    itemCounts[itemId]++;
                } else {
                    itemCounts[itemId] = 1;
                }
            }
        });
        i++;                
        if (i < 10000) {       
            loop();            
        } else {
            exit();
        }                      
    }, 500)
}
loop();
