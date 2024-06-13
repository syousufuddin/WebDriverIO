class homePage{

    startShopping(){
        return $("//a[contains(text(),'Start Shopping »')]")
    }
}
export default new homePage()