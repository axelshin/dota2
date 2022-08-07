function productsAmountSet(){
    var products__item = $('.products__item');
    if (products__item.length){
        products__item.parent().addClass('products--' + products__item.length);
    }
}
productsAmountSet();