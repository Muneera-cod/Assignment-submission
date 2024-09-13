function addToCart(...items){
    if (items.length===0){
        console.log("Your cart is empty")
    }
    else if (items.length === 1){
        console.log("Onne item added to your cart")
    }else{
        console.log("Many items added")
    }
}