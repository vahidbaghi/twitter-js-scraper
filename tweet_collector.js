if (typeof window.tweetCollectorDict === 'undefined') {
    window.tweetCollectorDict = {};
}
if (typeof window.tweetCollectorUrlSet === 'undefined') {
    window.tweetCollectorUrlSet = new Set();
}

function collectTweetData() {
    let tweetElements = document.querySelectorAll('[data-testid="tweet"]');
    tweetElements.forEach(element => {
        try {
            let replyElement = element.querySelector('[data-testid="reply"]');
            let retweetElement = element.querySelector('[data-testid="retweet"]');
            let likeElement = element.querySelector('[data-testid="like"]');
            let timeElement = element.querySelector('time');
            let textElement = element.querySelector('[data-testid="tweetText"]');
            let tweetLink = element.querySelector('a[href*="/status/"]');

            let reply = replyElement ? replyElement.textContent.match(/(\d+)/) : null;
            let retweet = retweetElement ? retweetElement.textContent.match(/(\d+)/) : null;
            let like = likeElement ? likeElement.textContent.match(/(\d+)/) : null;
            let time = timeElement ? timeElement.getAttribute('datetime') : null;
            let status = tweetLink ? tweetLink.href.match(/\/status\/(\d+)/) : null;

            if (textElement && time && tweetLink) {
                let href = tweetLink.getAttribute('href');
                let userId = element.querySelector('a[href^="/"][role="link"]').getAttribute('href').replace('/', '');
                let fullUrl = `https://x.com${href.replace('/i/status/', `/${userId}/status/`)}`;
                
                if (!fullUrl.match(/\/(photo|video|media)\/\d+$/)) {
                    window.tweetCollectorUrlSet.add(fullUrl);
                    window.tweetCollectorDict[textElement.textContent.split("\n")[0] + "-" + time] = {
                        "like": like ? like[1] : "0",
                        "reply": reply ? reply[1] : "0",
                        "retweet": retweet ? retweet[1] : "0",
                        "time": time,
                        "text": textElement.textContent,
                        "status": status ? status[1] : "",
                        "url": fullUrl
                    };
                }
            }
        } catch (error) {
            console.log(error);
        }
    });
}

function exit() {
    window.collectedUrls = Array.from(window.tweetCollectorUrlSet);
    clearTimeout(window.tweetCollectorLoopTimeout);
}

function loop() {
    let i = 0;
    function iterate() {
        window.tweetCollectorLoopTimeout = setTimeout(function() {
            window.scrollBy(0, 1000);
            collectTweetData();
            
            i++;
            if (i < 100000) {
                iterate();
            } else {
                exit();
            }
        }, 500);
    }
    iterate();
}

if (typeof window.tweetCollectorLoopTimeout === 'undefined') {
    loop();
}
