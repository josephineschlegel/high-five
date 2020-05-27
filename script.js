//STICKY NAV BAR//
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}




//###############   Instagram short feed    #########



const url = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=IGQVJXSkVjekY1dlg3V3hneklBYWRiOWFBOS12QnA4ZAi01TlE5aWY1cE83XzdBbXdiZAVluU0x5V3BRTGxwWlJNS1BjbkwzcXVaWmtERUlxdkJDc3VSMXVuUnNNd1g0RHllQmVBV1J1SllGdmVQWmROdAZDZD';

fetch(url)
    .then(res => res.json())
    .then(handleData)

function handleData(feed) {
//    console.log(feed)

    for (let i = 0; i <= 3; i++) {
        showFeedFrontPage(feed.data[i])
        //        console.log(x)
    }
}








function showFeedFrontPage(feed) {
    const templateFrontPage = document.querySelector("#templateWrapperFrontPage").content;
    const clone = templateFrontPage.cloneNode(true);

    clone.querySelector(".postImg").src = feed.media_url;
//    console.log(feed.media_url)
    document.querySelector(".instaFeed").appendChild(clone);
}










