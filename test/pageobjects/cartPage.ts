class cartPage{

    getCart(){
        return $("//span[contains(text(),'Cart')]")
    }

    getCartItems(){
        return $$("//td[contains(@class, 'mat-column-item')]")
    }
    getCartItem(){
        return $("//td[contains(@class, 'mat-column-item')]")
    }

    getCheckout(){
        return $("//a[contains(text(), 'Check Out')]")
    }
}
export default new cartPage()