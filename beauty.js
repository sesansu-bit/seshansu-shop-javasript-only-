bagitStr = localStorage.getItem('bagit');
bagit= bagitStr ? JSON.parse(bagitStr) : [];
bagcountnum();
component5();


function addToBag(itemid){
    bagit.push(itemid);
localStorage.setItem('bagit', JSON.stringify(bagit));
bagcountnum();
}


function bagcountnum(){
    let bagcount =document.querySelector(".bagcount");
    if(bagit.length>0){
        bagcount.style.visibility ='visible';
    bagcount.innerText =bagit.length;
    }
    else{
        bagcount.style.visibility = 'hidden';
    }
}



function component5() {
	let beatcontainers = document.querySelector('.beatcontainers');
	if (!beatcontainers) {
	  return;
	}
	let innerHtml5 = '';
	iteme.forEach(item => {
	  innerHtml5 +=
`<div class="eachcontainer6">
            <img src="${item.image}">
            <div class="productrating5">${item.rating.stars} ⭐ | ${item.rating.count}</div>
             <div class="detailed5">
                 <div class="companyname5">${item.company}</div>
                 <div class="productname5">${item.item_name}</div>
                 <div class="price5">
                 <span class="ongoingprice5">Rs.${item.current_price}</span>
                 <span class="originalprice5">Rs.${item.original_price}</span>
                 <span class="discount5">(${item.discount_percentage}off)</span> 
                 </div>
                  <div class="addtocart5" onclick="addToBag(${item.id})">Add to Cart</div>
             
             </div>
        </div>
`
	});
    beatcontainers.innerHTML = innerHtml5;
  }

 
 
 
