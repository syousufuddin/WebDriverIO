import baseTest from "../jupitorToys/baseTest.ts";

class shopPage extends baseTest{
    constructor() {
        super();
    }
    
    public async getProductCount() {
        return $$(".product").length;
    }

    public async getToyIds(toyId:string){
        return $$(`//li[@id='${toyId}']`)
    }

    public async buyButton(toyId:string){
        //return $(`//li[@id='${toyId}']//a`)
        return $("//h4[@class='product-title']")
    }

    public async toyTitle(toyId:string){
       return $(`//li[@id='${toyId}']//h4`)
    }

    public async toyContainer(toy: string){
        await this.waitUntillVisible(await this.toysContainer);
        const toysContainer  = await (await this.toysContainer).$$(".//li[contains(@class,\"product\")]");
        console.log("Toys items present in the page: " + toysContainer.length);
        if(toysContainer.length === 0)
            throw new Error("No items are present in the page");

        const toyContainer = await toysContainer.filter(async function (elem) {
            return (await elem.getText()).includes(toy);
        });
        
        if(toyContainer.length === 0)
            throw new Error(toy + " is not present in the page");

        return toyContainer.at(0);
    }


    async AddToys(toy:string, quantity:number) : Promise<this> {
        let toyContainer = await this.toyContainer(toy)
               
           for (let i = 0; i < quantity; i++)
            {
               await this.click(await toyContainer?.$(".//a[text()='Buy']"))
               await this.waitUntillVisible(await $("//div[@class=\"cdk-overlay-container\"]"))
            };
            return this;
        
    }
    public get toysContainer() {
        return $(".products");
    }
    public async getToyPrice(toy: string): Promise<any> {
        let toyContainer = await this.toyContainer(toy);
        let price = (await (await toyContainer?.$(".//span[contains(@class,'product-price')]"))?.getText())?.trim().replace("$","");
        return price;
    }

   
   

   /* public async ToyContainer(toy: string) {
        let toyTitle = await $("//h4[text()=\""+toy+ "\"]")
        if(toyTitle) {
            return $(toyTitle)
        }
        return null
    } */


}
export default new shopPage()