
let bagit;
let bagitStr = localStorage.getItem('bagit');
bagit= bagitStr ? JSON.parse(bagitStr) : [];
bagcountnum();
component();
component2();


function addToBag(itemid){
bagit.push(itemid);
localStorage.setItem('bagit', JSON.stringify(bagit));
bagcountnum();
}

function bagcountnum(){
    let bagcount =document.querySelector(".bagcount");
    if(bagit.length>0){
        bagcount.style.visibility ='visible';
    bagcount.innerText = bagit.length;
    }
    else{
        bagcount.style.visibility = 'hidden';
    }
}


function component(){
let trendycontainers=document.querySelector(".trendycontainers");
if (!trendycontainers) {
    return;
  }
let innerHtml='';
itema.forEach(item => {
    innerHtml += `<div class="eachcontainer0">
            <img src="${item.image}">
            <div class="productrating0">${item.rating.stars} ⭐ | ${item.rating.count}</div>
             <div class="detailed0">
                 <div class="companyname0">${item.company}</div>
                 <div class="productname0">${item.item_name}</div>
                 <div class="price0">
                 <span class="ongoingprice0">Rs.${item.current_price}</span>
                 <span class="originalprice0">Rs.${item.original_price}</span>
                 <span class="discount0">(${item.discount_percentage}off)</span> 
                 </div>
                 <div class="addtocart0" onclick="addToBag(${item.id})">Add to Cart</div>
             </div>
        </div>`
});
trendycontainers.innerHTML= innerHtml;
}



function component2(){
    let topqualitycontainers=document.querySelector(".topqualitycontainers");
    if (!topqualitycontainers) {
        return;
      }
    let innerHtml2='';
    itemb.forEach(item => {
        innerHtml2 += `<div class="eachcontainer1">
        <img src="${item.image}">
        <div class="productrating2">${item.rating.stars} ⭐ | ${item.rating.count}</div>
         <div class="detailed2">
             <div class="companyname2">${item.company}</div>
             <div class="productname2">${item.item_name}</div>
             <div class="price2">
             <span class="ongoingprice2">Rs.${item.current_price}</span>
             <span class="originalprice2">Rs.${item.original_price}</span>
             <span class="discount2">(${item.discount_percentage}off)</span> 
             </div>
             <div class="addtocart2" onclick="addToBag(${item.id})">Add to Cart</div>
         </div>
    </div>`
  });
  topqualitycontainers.innerHTML= innerHtml2;
    }


  



