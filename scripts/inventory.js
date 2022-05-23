function append(){
    let data =JSON.parse(localStorage.getItem("products"))||[];
let all_products=document.getElementById("all_products")
    data.forEach(function(el,index){
        let div=document.createElement("div")
        let img=document.createElement("img");
img.src =el.image;
        let type=document.createElement("type");
        type.innerText=el.type;
let desc=document.createElement("desc");
desc.innerText=el.desc;
let price=document.createElement("price");
price.innerText=el.price;

let btn=document.createElement("button");
btn.innerText="Remove Product"
btn.setAttribute("click",  function(index){remove(index)} );


div.append(img,type,desc,price,btn);
all_products.append(div);

    });
 
}
append();

function remove(index){
   let data=JSON.parse(localStorage.getItem("products"))||[];

   let newDAta=data.filter(function(el,index){

   });
}