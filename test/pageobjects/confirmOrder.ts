import baseTest from "../jupitorToys/baseTest.ts";

class confirmOrder extends baseTest{
    constructor() {
        super();
    }

    async submitOrder(){
    const submitOrder= await (await this.activeTabContainer()).$(".//button[.//text()='Submit Order']")
    browser.waitUntil(async()=> {
        submitOrder.isExisting()
    })
    submitOrder.click()
       
    }
        

    public async btnExpandAll() {
        return (await this.activeTabContainer()).$(".//button[.//text()='Expand All']");
    }

    public async sectionContainer(sectionName : string) {
        return (await this.activeTabContainer()).$(".//mat-panel-title[contains(text(),'" + sectionName + "')]/../../..");
    }

    public async getCartItemUnitPrice(toyName : string) : Promise<string> {
        const sectionContainer = await this.sectionContainer("Order Details");
        return await sectionContainer.$(".//table/tbody//tr//td[contains(text(),\"" + toyName + "\")]/..//td[2]").getText();
    }

    public async getCartItemQuantity(toyName : string) : Promise<string> {
        const sectionContainer = await this.sectionContainer("Order Details");
        return await sectionContainer.$(".//table/tbody//tr//td[contains(text(),\"" + toyName + "\")]/..//td[3]").getText();
    }

    public async getCartItemSubTotal(toyName : string) : Promise<string> {
        const sectionContainer = await this.sectionContainer("Order Details");
        return await sectionContainer.$(".//table/tbody//tr//td[contains(text(),\"" + toyName + "\")]/..//td[4]").getText();
    }

    public async getNumberOfCartItems() : Promise<number> {
        const sectionContainer = await this.sectionContainer("Order Details");
        console.log("cart items list => "+await sectionContainer.$$(".//table/tbody//tr").length);
        return await sectionContainer.$$(".//table/tbody//tr").length;
    }

    public async getDName() : Promise<string> {
        const sectionContainer = await this.sectionContainer("Delivery & Contact Details");
        return await(await sectionContainer.$(".//table//tr//td[contains(text(),'Name')][1]/following-sibling::td[1]")).getText();
    }

    public async getCName() : Promise<string> {
        const sectionContainer = await this.sectionContainer("Delivery & Contact Details");
        return await(await sectionContainer.$(".//table//tr//td[contains(text(),'Name')][2]/following-sibling::td[1]")).getText();
    }

    public async getDAddress() : Promise<string> {
        const sectionContainer = await this.sectionContainer("Delivery & Contact Details");
        return await(await sectionContainer.$(".//table//tr//td[contains(text(),'Address')][1]/following-sibling::td[1]")).getText();
    }

    public async getCAddress() : Promise<string> {
        const sectionContainer = await this.sectionContainer("Delivery & Contact Details");
        return await(await sectionContainer.$(".//table//tr//td[contains(text(),'Address')][2]/following-sibling::td[1]")).getText();
    }

    public async getCEmailAddress() : Promise<string> {
        const sectionContainer = await this.sectionContainer("Delivery & Contact Details");
        return await(await sectionContainer.$(".//table//tr//td[contains(text(),'Email')][1]/following-sibling::td[1]")).getText();
    }

    public async getCNumber() : Promise<string> {
        const sectionContainer = await this.sectionContainer("Delivery & Contact Details");
        return await(await sectionContainer.$(".//table//tr//td[contains(text(),'Phone')][1]/following-sibling::td[1]")).getText();
    }

    public async getCardName() : Promise<string> {
        const sectionContainer = await this.sectionContainer("Payment Details");
        return await(await sectionContainer.$(".//table//tr//td[contains(text(),'Card Name')]/following-sibling::td[1]")).getText();
    }

    public async getCardNumber() : Promise<string> {
        const sectionContainer = await this.sectionContainer("Payment Details");
        return await(await sectionContainer.$(".//table//tr//td[contains(text(),'Card Number')]/following-sibling::td[1]")).getText();
    }

    public async getCardType() : Promise<string> {
        const sectionContainer = await this.sectionContainer("Payment Details");
        return await(await sectionContainer.$(".//table//tr//td[contains(text(),'Card Type')]/following-sibling::td[1]")).getText();
    }

    public async getCardExpiry() : Promise<string> {
        const sectionContainer = await this.sectionContainer("Payment Details");
        return await(await sectionContainer.$(".//table//tr//td[contains(text(),'Card Expiry')]/following-sibling::td[1]")).getText();
    }

    public async getCardCVV() : Promise<string> {
        const sectionContainer = await this.sectionContainer("Payment Details");
        return await(await sectionContainer.$(".//table//tr//td[contains(text(),'Card CVV')]/following-sibling::td[1]")).getText();
    }

    public async clickExpandAll() {
        await this.click(this.btnExpandAll);
    }

    
}

export default new confirmOrder()