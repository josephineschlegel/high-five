//SHOP ITEM//
fetch("http://andreimihutoni.com/wp_tate/wp-json/wp/v2/item")
.then(res=>res.json())
.then(handleData)

function handleData(items){
    console.log(items);
    items.forEach(showItems)
}

function showItems(item){
    console.log(item)
    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector(".oneImage").src = item.image.guid;
    copy.querySelector("h1").textContent = item.title.rendered;
    copy.querySelector(".price span").textContent = item.price;



    document.querySelector("main").appendChild(copy);
}
