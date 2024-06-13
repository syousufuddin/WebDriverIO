import baseTest from "../jupitorToys/baseTest.ts";
import testData from "../jupitorToys/testData/testData.ts";

class confirmOrder{

    async submitOrder(){
    const submitOrder= await (await baseTest.tabContainer()).$("//button[.//text()='Submit Order']")
    browser.waitUntil(async()=>{
        submitOrder.isExisting()
    })
    submitOrder.scrollIntoView()
    browser.elementClick(submitOrder.elementId)
       
    } 
    

}

export default new confirmOrder()