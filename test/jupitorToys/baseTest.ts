class baseTest{
    async enterTextInput(element:string, text:string){
        const input = (await this.tabContainer()).$("//input[@ng-reflect-name='"+element+"']")
        browser.elementSendKeys(await input.elementId,text)
}
    
    async selectDropdown(element:string, optiontoselect: string){
        await browser.$("//mat-select[@ng-reflect-name='"+element+"']").click()
        const stateOption = await $("//mat-option[@value='"+optiontoselect+"']")
        browser.elementClick(stateOption.elementId)

    }

    async clickButton(buttonName:string){  
       const element = await (await this.tabContainer()).$("//button//span[text()='"+buttonName+"']")
        browser.waitUntil(async()=>{
        return element.isClickable()
    });
       element.scrollIntoView()
       browser.elementClick(await element.elementId);
    }

    async jsClick(buttonName:string){  
        const element = await (await this.tabContainer()).$("//button//span[.//text()='"+buttonName+"']")
        browser.waitUntil(async()=>{
        return element.isClickable()
    });
        
        element.scrollIntoView()
        browser.execute("arguments[0].click();", element)
                
    }
  
    async clickRadioButton(){
        const radioButton = await (await this.tabContainer()).$("//mat-radio-button[@value='Yes' and contains(@class,'mat-radio-button')]")
       
        browser.waitUntil(async ()=>{
            return radioButton.isClickable()
            
        });
        browser.pause(1000)
        browser.elementClick(await radioButton.elementId);
             
    }

    async checkOutPageContainer(){
        return $("//app-checkout")
    }
    
    async tabContainer(){
        return $("//div[@role='tabpanel' and @aria-expanded='true']")
    }
}
        
export default new baseTest()
