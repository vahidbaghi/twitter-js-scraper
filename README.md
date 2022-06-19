# Twitter JS Scraper
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
## Introduction
There are many tools available for collecting tweets. Some of these tools make use of the official Twitter API, which has a number of limitations. Other tools collect tweets using selenium and Python. This repository allows you to collect tweets using just your web browser.

## Usage
Open your browser. For me, it is Firefox. Search on Twitter for the phrase you want. As an example, I search for [#Elon Musk](https://twitter.com/search?q=%23ElonMusk&src=typeahead_click&f=live). Click the latest tab to see the latest tweets. Advanced Search can be used as well. Right-click the screen and click Inspect (Q). Then click the Console tab.

Use the code in the tweet_collector.js file to collect tweet text, number of likes, retweets, replies, tweet ID (Status), time and username. Copy the code and paste it into the Console tab, and then press Enter. By doing this, the script will run and automatically scroll the page and collect tweets. When the scrolling is complete, or you have collected the desired amount of tweets, paste the code inside extract_tweets.js in the console tab and press Enter. This will save a file called tweets.txt. In the tweet_collector.js file, the number 100000 indicates the number of times you want to scroll. The number 500 also indicates that scrolling is performed every 500 milliseconds. Adjust these values to suit your needs.

To collect usernames of people who:
-Liked a tweet
-Retweeted a tweet
-Followers of a person
-Following if a person
Use the code in the username_collector.js file. For example, I open the [Elon Musk following](https://twitter.com/elonmusk/following) page. Then paste the above code in the Console tab and then press Enter. Use the code in the extract_usernames.js file to save the collected usernames. If you open the page of people who liked / retweeted a tweet and use the code inside username_collector.js file, you will notice that the scrolling does not work properly. This problem is solved using the following method:
![](https://i.imgur.com/07w6i5V.gif)

## License

The project is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
