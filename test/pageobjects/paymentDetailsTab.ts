import baseTest from "../jupitorToys/baseTest.ts";
import paymentData from "../jupitorToys/data/paymentData.ts";

class paymentDetails extends baseTest{

    async enterPaymentDetails(){
        await this.enterCardNumber(paymentData.cardNumber)
        await this.enterNameOnCard(paymentData.nameonCard)
        await this.enterExpiryDate(paymentData.privateexpiryDate)
        await this.selectCardType()
        await this.enterCVV(paymentData.cardCvv)
        await this.nextButton()
        
    }
   
    async enterNameOnCard(cardName:string){
        await this.enterTextInput("creditcardname", cardName)
    }
    async enterCardNumber(cardNumber:string){
        await this.enterTextInput("creditcardno", cardNumber)
    }
    async selectCardType(){
        await this.selectDropdown("creditcardtype", "VISA")
    }
   
    async enterExpiryDate(expiryDate:string){
        await this.enterTextInput("creditcardexpiry", expiryDate)
    }

    async enterCVV(cardCvv:string){
        await this.enterTextInput("creditcardcvv", cardCvv)
    }
   
    async nextButton(){
        await this.clickNextButton()
        
    } 

}

export default new paymentDetails()