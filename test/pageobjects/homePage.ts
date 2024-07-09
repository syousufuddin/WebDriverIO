import baseTest from "../jupitorToys/baseTest.ts"

class homePage extends baseTest{

    public async startShopping(){
        return $("//a[contains(text(),'Start Shopping »')]")
    }

    async clickStartShopping(){  
        browser.waitUntil(async()=>{
         return (await this.startShopping()).isClickable()
     });
        browser.elementClick(await (await this.startShopping()).elementId);
     }
    
}
export default new homePage()