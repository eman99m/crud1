
var productNameInput = document.getElementById('productname'); 
var productprice = document.getElementById('productprice'); 
var productcateogry  = document.getElementById('productcateogry'); 
var productdesc = document.getElementById('productdesc'); 

//=========ADD PRODUCT=============
var prodlist=[];
function addProduct(){
var product= {
    code:productNameInput.value,
    price:productprice.value,
    category:productcateogry.value,
    desc:productdesc.value
}

//========PUSH PRODUCT TO ARRAY=============
prodlist.push(product);

console.log(prodlist);

//=============calling function      Display Data=================
displayData();
//=========       calling function  INPUTS RESET==============
clearInputs();
}

//============RESERT DATA===============
 function clearInputs (){
    productNameInput.value='';
    productprice.value='';
    productcateogry.value='';
    productdesc.value='';
}

//=============Display Data=================
function displayData(){
var cartona='';
for(var i=0;i<prodlist.length;i++){
cartona+=`   <div class="col-md-4">
<img src="images/desktop1 (2).jpg " alt="natural    ">
<h2 class="h4 ">productname <span class="fs-6">${prodlist[0].code}</span></h2>
<h2 class="h4 ">productprice <span class="fs-6">${prodlist[1].price}</span></h2>
<h2 class="h4 ">productcateogry <span class="fs-6">${prodlist[2].category}</span></h2>
<h2 class="h4 ">productdesc <span class="fs-6">${prodlist[3].desc}</span></h2> 
</div>
`

}
document.getElementById('demo').innerHTML=cartona;


}



