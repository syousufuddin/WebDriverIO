import baseTest from "../jupitorToys/baseTest.ts";

class cartPage extends baseTest{

    public async getCart(){
        return $("//span[contains(text(),'Cart')]")
    }

    public async getCartItems(){
        return $$("//td[contains(@class, 'mat-column-item')]")
    }
    public async getCartItem(){
        return $("//td[contains(@class, 'mat-column-item')]")
    }

    public async getToyQuantity(toyName : string) : Promise<string> {
        const toyRowContainer = this.toyRowContainer(toyName);
        console.log(toyName + "'s quantity : " + await (await (await toyRowContainer).$("<input>")).getAttribute("ng-reflect-value"));
        return await (await (await toyRowContainer).$("<input>")).getAttribute("ng-reflect-value");
    }

    public async getToyPrice(toyName: string) : Promise<string> {
        const toyRowContainer = this.toyRowContainer(toyName);
        console.log(toyName + "'s price : " + await (await (await toyRowContainer).$(".//td[4]")).getText());
        return await (await (await toyRowContainer).$(".//td[4]")).getText();
    }

    public async getTotalPrice() {
        console.log("Total price : "+ await (await this.totalPrice).getText());
        return await (await this.totalPrice).getText();
    }
    public async toyRowContainer(toyName : string) : Promise<WebdriverIO.Element> {
        await this.waitUntillVisible(await (await this.tableContainer).$(".//td[text()=\" " + toyName + " \"]/.."));
        return await (await this.tableContainer).$(".//td[text()=\" " + toyName + " \"]/..");
    }

    async clickCartLink(){  
        const element = await $("//span[contains(text(),'Cart')]")
         browser.waitUntil(async()=>{
         return element.isClickable()
     });
        browser.elementClick(await element.elementId);
     }

     async clickCheckOutButton(){  
        const element = await $("//a[contains(text(), 'Check Out')]")
         browser.waitUntil(async()=>{
         return element.isClickable()
     });
        browser.elementClick(await element.elementId);
     }

    
}
export default new cartPage()