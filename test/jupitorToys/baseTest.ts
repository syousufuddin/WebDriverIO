export default class baseTest{

    async enterTextInput(element:string, text:string){
        const input = (await this.activeTabContainer()).$("//input[@ng-reflect-name='"+element+"']")
        browser.elementSendKeys(await input.elementId,text)
}
    
    async selectDropdown(element:string, optiontoselect: string){
        await browser.$("//mat-select[@ng-reflect-name='"+element+"']").click()
        const stateOption = await $("//mat-option[@value='"+optiontoselect+"']")
        browser.elementClick(stateOption.elementId)

    }

    async clickNextButton(){  
       const element = await (await this.activeTabContainer()).$(".//button[contains(@class,'mat-stepper-next')]")
       element.scrollIntoView()
       await this.click(element)
    }
     
    async clickRadioButton(){
        const radioButton = await (await this.activeTabContainer()).$("//mat-radio-button[@value='Yes' and contains(@class,'mat-radio-button')]")
       
        browser.waitUntil(async ()=> {
            return radioButton.isClickable()
            
        });
        browser.elementClick(await radioButton.elementId);
             
    }
       
    async activeTabContainer(){
        
        return $(".//div[@role=\"tabpanel\" and @aria-expanded=\"true\"]")
    }
    public async click(element: any) {
        await this.waitUntillVisible(element);
        await this.waitUntillClickabe(element);
        await element.click();
    }
    public async waitUntillVisible(element:any){ 
        await element.waitForDisplayed({ timeout: 10000, timeoutMsg: "element not visible"}); 
        
    }

    public async waitUntillClickabe(element: any) {
        await element.waitForClickable( { timeout: 10000, timeoutMsg: "element not clickable after visibility"}); 
    }

    public get totalPrice() {
        return this.tableContainer.$(".//td[contains(@class,'column-total')]/strong");
    }
    public get tableContainer() {
        return this.pageContainer.$("<table>");
    }
    public get pageContainer() {
        return $("<app-cart>");
    }

    
}
        

