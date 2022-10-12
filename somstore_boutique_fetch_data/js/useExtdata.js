let data, output="";
let collection_body=document.getElementsByClassName("collection-body");


document.addEventListener("DOMContentLoaded", async ()=>{

    data = await fetch("https://fakestoreapi.com/products",{method:"GET"})
                    .then((response) => response.json().then(res => ({status: response.status, data: res})))
                    .then((apiResponse) => {
                        // console.log(apiResponse.data)
                        return apiResponse.data
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        // return "Failed"
                    });



    console.log(data);



    

for (let index = 0; index < collection_body.length; index++) {


    for (let nth = 0; nth < data.length; nth++) {
        
        output+=`<div class="product"> <img src="${data[nth].image}" alt="official_sweater">  <div class="description">${data[nth].title}</div>  <div class="price">Ksh. <span value="2400" style="background: cornflowerblue; color: white; padding: 1px 8px;">${data[nth].price} /=</span></div> <div class="item-count">Items remaining ${data[nth].rating.count}</div></div>`;
    }

    collection_body[index].innerHTML=output;
}







moveNav();//call move nav func
addToCartButton();//call the addToCartButton
updateCopyRight();
updateFooterSection();
createCartComponent();
cartFunctionality();
removeItemFromCart();
changeBannerImgs();




//function to change images
function changeBannerImgs(){
    let counter = 0;
    setInterval(() => {
        
        counter+=1;
        let banner = document.querySelector("img");
            
        
        

        if (counter>4) {
            
            counter=1;
            banner.setAttribute("src", "../images/children"+counter+".jpg");
        } else {
            banner.setAttribute("src", "../images/children"+counter+".jpg");
        }
        // console.log(counter);
        
        
    }, 3000);
}//function end





//dynamically updating footer section
function updateFooterSection() {
        
    let footerListing = document.querySelectorAll(".listing"), c=4, l = ["home","about us", "contact: &#9742;", "faq: &commat;mika", "new"];
    let footerListingStyle = "style=' padding: 2px 4px; color:white; text-decoration: none; text-transform: capitalize; width:100%; opacity: 0.8' ";

    footerListing.forEach(element => {

    c +=1;                
    
    element.innerHTML =  "<a href='#' " + `${footerListingStyle}` + ">" + l[(c%5)] + "</a>";
});
}//end of footer sextion update



//copyright function
function updateCopyRight(){
        
    let year = new Date().getFullYear();
    let copyRight = $(".copyright");
    copyRight.html(copyRight.html()+year);
    // console.log(copyRight);
}//end of copyright function




 //function to move the navigation bar
 function moveNav() {
    // $('.backtotop').css({'display': 'none'});
    
    let nav = document.getElementById("nav-bar");

    $(window).scroll(function(e) {
        e.preventDefault();
        if ($(this).scrollTop() > 20) {

            nav.style.top = "0px";

        } else {            

            nav.style.top = "100px";
            
        }
        e.stopPropagation();
    });

    
}//function end




//function to insert add to cart button and hide it
function addToCartButton() {
    
    let prodClass = document.getElementsByClassName("product");
    
    for (let index = 0; index < prodClass.length; index++) {
        const element = prodClass[index];
        //element.innerHTML += '<div class="cart-btn"><input type="button" value="Add To Cart"></div>'; laymans way of doing it
        //console.log(element);
        let div = document.createElement("div");
        div.setAttribute("class","cart-btn");
        let input = document.createElement("input");
        input.setAttribute("type","button");
        input.setAttribute("value","Add To Cart")
        input.setAttribute("class","cart-btn-input");
        div.appendChild(input);
        element.appendChild(div);
        

     //    element.lastElementChild.style.visibility = "hidden";    // hiding button by default

        element.addEventListener("mouseover",(e)=>{
            element.style.cursor = "pointer";
            element.lastElementChild.style.visibility = "visible"; //returning it when mouse enters div
            element.lastElementChild.lastElementChild.style.background = "red";
            element.style.outline="1px solid lightblue"
            e.stopPropagation();
        });

        element.addEventListener("mouseout",(e)=>{
         element.style.opacity = 1;
         // element.lastElementChild.style.visibility = "hidden"; //rehiding it when mouse leaves div
         element.lastElementChild.lastElementChild.style.background = "rgb(221, 135, 135)";
         element.style.outline="none"
         e.stopPropagation();
     });

        
        
    }   
    

    
        
}    //end of add to cart button













//function to insert add to cart button and hide it
function addToCartButton() {
    
    let prodClass = document.getElementsByClassName("product");
    
    for (let index = 0; index < prodClass.length; index++) {
        const element = prodClass[index];
        //element.innerHTML += '<div class="cart-btn"><input type="button" value="Add To Cart"></div>'; laymans way of doing it
        //console.log(element);
        let div = document.createElement("div");
        div.setAttribute("class","cart-btn");
        let input = document.createElement("input");
        input.setAttribute("type","button");
        input.setAttribute("value","Add To Cart")
        input.setAttribute("class","cart-btn-input");
        div.appendChild(input);
        element.appendChild(div);
        

     //    element.lastElementChild.style.visibility = "hidden";    // hiding button by default

        element.addEventListener("mouseover",(e)=>{
            element.style.cursor = "pointer";
            element.lastElementChild.style.visibility = "visible"; //returning it when mouse enters div
            element.lastElementChild.lastElementChild.style.background = "red";
         //    element.style.outline="1px solid lightblue"
            e.stopPropagation();
        });

        element.addEventListener("mouseout",(e)=>{
         element.style.opacity = 1;
         // element.lastElementChild.style.visibility = "hidden"; //rehiding it when mouse leaves div
         element.lastElementChild.lastElementChild.style.background = "rgb(221, 135, 135)";
         e.stopPropagation();
     });

        
        
    }   
    

    
        
}    //end of add to cart button


//    The cart component function
function createCartComponent() {
 //was a dynamic creation, i changed it to static
 // let cartComponent = document.createElement("div");
 // cartComponent.setAttribute("id","cart-component");
 // cartComponent.append(document.createTextNode("This is cart component"));
 // document.body.firstElementChild.appendChild(cartComponent);
 // //console.log(cartComponent);
 // let styling = {"visibility":"hidden","z-index":"210","left":"60%","top":"200px","width":"38%",
 //                 "height":"40vh","background-color":"white","color":"black","position":"absolute"};
 // $("#cart-component").css(styling);
 
 
 //display and hide cart on clicking link
 let click = false;
 $("#cart-link").click("click",(e)=>{
     e.preventDefault;
     if (click == false) {
         $("#cart-component").css({"visibility":"visible"});
         click = true;
     } else {
         $("#cart-component").css({"visibility":"hidden"});
         click = false;
         
         
     }//end

     $("#cart-close").click(function (e) { 
         e.preventDefault();
         $("#cart-component").css({"visibility":"hidden"});
         click = false;
         // window.open("file:///C:/Users/B-Raf%20%20(Bobby)/Desktop/somstore_boutique/html/home.html#","_blank", "noopener, width= 400, height=400, scoll=yes", );
         e.stopPropagation();
     });
    
     e.stopPropagation();
 });
 
}

 // cart functionality
 function cartFunctionality() {
     let cartBtns = document.querySelectorAll(".cart-btn-input");
     let itemImage;
     let description;
     let price;
     let total = 0;
     // console.log("j");

     for (let index = 0; index < cartBtns.length; index++) {
         const element = cartBtns[index];

         

         element.addEventListener("click",(e)=>{
             price = element.parentNode.parentNode.children.item(2).children.item(0).innerText.replace(" /=","");
             description = element.parentNode.parentNode.children.item(1).innerText.replace(" /=","");
             itemImage = element.parentNode.parentNode.children.item(0).cloneNode();
             // image = element.parentNode.parentNode.children.item(0).getAttribute("src");
             //console.log(element.parentNode.parentNode.children.item(0).getAttribute("src"));
             let itemContainer = document.getElementById("cart-body-items-container");
             total += parseFloat(price);

             document.getElementById("cart-price").innerText = "Ksh. " + total;

                     

                 let cartBodyContent = document.createElement("div");
                     cartBodyContent.setAttribute("class","cart-body-content");
                 let cartItem = document.createElement("div");
                     cartItem.setAttribute("class","cart-item");
                     cartItem.appendChild(itemImage);
                 let cartDescription = document.createElement("div");
                     cartDescription.setAttribute("class","cart-description");
                     cartDescription.appendChild(document.createTextNode(description));
                 let cartPrice = document.createElement("div");
                     cartPrice.setAttribute("class","cart-price");
                     cartPrice.appendChild(document.createTextNode("Ksh. "+price));

                     cartBodyContent.appendChild(cartItem);
                     cartBodyContent.appendChild(cartDescription);
                     cartBodyContent.appendChild(cartPrice);

                     // console.log(cartBodyContent);

                     itemContainer.appendChild(cartBodyContent);
                     e.stopPropagation();
         });
         
         
     }

     




     
 }

 //extended cart functionality
 async function removeItemFromCart(){
     
     let itemContainer = document.getElementById("cart-body-items-container");
         // console.log(itemContainer);
         let remPrice;
         itemContainer.addEventListener("click", function(e){

             

             if(e.target !== e.currentTarget){
                 if(e.target.parentNode == e.currentTarget){
                     remPrice = parseFloat(e.target.children.item(2).innerText.replace("Ksh. ","") );
                     e.target.outerHTML = "";
                 }else if (e.target.parentNode.parentNode == e.currentTarget) {
                     remPrice = parseFloat(e.target.parentNode.children.item(2).innerText.replace("Ksh.","") );
                     e.target.parentNode.outerHTML = "";
                 }else if (e.target.parentNode.parentNode.parentNode == e.currentTarget) {
                     remPrice = parseFloat(e.target.parentNode.parentNode.children.item(2).innerText.replace("Ksh.","") );
                     e.target.parentNode.parentNode.outerHTML = "";
                 }
                 
                 if (isNaN(remPrice)) {
                     remPrice = 0;
                 } 
                 //console.log(remPrice);
                 let total = parseFloat(document.getElementById("cart-price").innerText.replace("Ksh. ","") );
                 document.getElementById("cart-price").innerText = "Ksh. " + (total - remPrice);
             }

             e.stopPropagation();
         });

 }


















})









    


    
    
        
    