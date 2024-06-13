class shopPage{

    getProductCount() {
        return $$(".product").length;
    }

    getToyIds(toyId:string){
        return $$(`//li[@id='${toyId}']`)
    }

    buyButton(toyId:string){
        return $(`//li[@id='${toyId}']//a`)
    }

    toyTitle(toyId:string){
       return $(`//li[@id='${toyId}']//h4`)
    }

}
export default new shopPage()