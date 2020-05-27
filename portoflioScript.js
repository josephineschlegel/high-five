const url = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=IGQVJXSkVjekY1dlg3V3hneklBYWRiOWFBOS12QnA4ZAi01TlE5aWY1cE83XzdBbXdiZAVluU0x5V3BRTGxwWlJNS1BjbkwzcXVaWmtERUlxdkJDc3VSMXVuUnNNd1g0RHllQmVBV1J1SllGdmVQWmROdAZDZD';

fetch(url)
    .then(res => res.json())
    .then(handleData)

function handleData(feed) {
//    console.log(feed)

    for (let i = 0; i <= 50; i++) {
        showFeedPortofolio(feed.data[i])
        //        console.log(x)
    }
}



function showFeedPortofolio(feed) {
    const templatePortofolio = document.querySelector("#templateWrapperPortofolio").content;
    const clone = templatePortofolio.cloneNode(true);

    clone.querySelector(".postImgPortofolio").src = feed.media_url;
    document.querySelector(".instaFeedPortofolio").appendChild(clone);
}

