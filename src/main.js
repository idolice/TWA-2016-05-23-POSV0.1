//TODO: Please write code in this file.
function printInventory(inputs) {

    var products=[];
    inputs.forEach(function(e){
      if(products[e.barcode])
       products[e.barcode].num++;
       else{
         products[e.barcode]=new Object();
         products[e.barcode].num=1;
         products[e.barcode].name=e.name;
         products[e.barcode].barcode=e.barcode;
         products[e.barcode].price=e.price;
         products[e.barcode].unit=e.unit;
       }
    });

    var total=0;

    var text="***<没钱赚商店>购物清单***\n";
    for(var i=0;i<products.length;i++)
    {
      var val=products[i].num.*products[i].price;
      text=text+"名称："+products[i].name+"，数量："+products[i].num+products[i].unit.toFixed(2)+"，单价："+products[i].price.toFixed(2)+"（元），小计："+val.toFixed(2).+"（元）"+"\n";
      total+=products[i].num*products[i].price;

    };
    text=text+"总计："+total.toFixed(2)+"（元）";
    text=text+"**********************"
    console.log(text);


}