import homePage from "../pageobjects/homePage.ts";
import shopPage from "../pageobjects/shopPage.ts";
import cartPage from "../pageobjects/cartPage.ts";
import contactDetailsTab from "../pageobjects/contactDetailsTab.ts";
import deliveryDetailsTab from "../pageobjects/deliveryDetailsTab.ts";
import paymentDetailsTab from "../pageobjects/paymentDetailsTab.ts";
import confirmOrder from "../pageobjects/confirmOrder.ts";


describe('Buy Toys using Jupitor Toys Application',()=> {

    it('Adding Toys and confirm order',  async() => {
      
        await homePage.clickStartShopping()
                                      
        await shopPage.AddToys("Rubik's Cube", 2)
        let toyPrice: number = await shopPage.getToyPrice("Rubik's Cube");
        let subTotal : number = await toyPrice * 2;
        let total : number = await subTotal;
                
        //Clicking Cart
        await cartPage.clickCartLink()
        
        //Validating cart items
        await expect(await cartPage.getToyQuantity("Rubik's Cube")).toBe(Number(2).toString());
        await expect(await cartPage.getToyPrice("Rubik's Cube")).toContain(subTotal.toString());
        await expect(await cartPage.getTotalPrice()).toContain(total.toString());     
              

        //Checking out
        await cartPage.clickCheckOutButton()
        await contactDetailsTab.enterContactDetails()
        await deliveryDetailsTab.enterDeliveryDetails()
        await paymentDetailsTab.enterPaymentDetails()
             
        //await confirmOrder.clickExpandAll();
        
        // Order Details section validation
        await expect(await confirmOrder.getNumberOfCartItems()).toBe(Number(1));
        await expect(await confirmOrder.getCartItemUnitPrice("Rubik's Cube")).toContain(toyPrice.toString());
        await expect(await confirmOrder.getCartItemQuantity("Rubik's Cube")).toBe(Number(2).toString());
        await expect(await confirmOrder.getCartItemSubTotal("Rubik's Cube")).toContain(subTotal.toString());
        
        //Submiting the order
        await confirmOrder.submitOrder()
    })
})


