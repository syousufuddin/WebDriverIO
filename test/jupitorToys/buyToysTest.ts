import homePage from "../pageobjects/homePage.ts";
import shopPage from "../pageobjects/shopPage.ts";
import cartPage from "../pageobjects/cartPage.ts";
import contactDetails from "../pageobjects/contactDetails.ts";
import deliveryDetails from "../pageobjects/deliveryDetails.ts";
import paymentDetails from "../pageobjects/paymentDetails.ts";
import confirmOrder from "../pageobjects/confirmOrder.ts";


describe('Buy Toys using Jupitor Toys Application',()=>{

    it('Adding Toys and confirm order',  async()=>{
      
        await homePage.startShopping().click()
        await browser.pause(2000)
        console.log("product Count",shopPage.getProductCount())
       //Adding Multiple toys to array
        const toyIds = ['product-2143','product-3044']
        let toyNames: string[]=[];
        for(const toyId of toyIds){
            await browser.pause(2000)
            const toysToBeAdded= await shopPage.toyTitle(toyId).getText()
            toyNames.push(toysToBeAdded)
            console.log("###########",toysToBeAdded)
            
            //Adding toys to the cart
            await shopPage.buyButton(toyId).click()
        }
        //Clicking Cart
        cartPage.getCart().click()

        await browser.pause(2000)
        const cartItems = await cartPage.getCartItems().map(elem => elem.getText())
        
        //Validating cart items
        expect(await cartItems).toEqual(toyNames)

        //Checking out
        await cartPage.getCheckout().click()

        contactDetails.enterContactDetails()
        deliveryDetails.enterDeliveryDetails()
        paymentDetails.enterPaymentDetails()
        //Submitin the order
        confirmOrder.submitOrder()
    })
})