import baseTest from "../jupitorToys/baseTest.ts";
import testData from "../jupitorToys/testData/testData.ts";

class paymentDetails{

    async enterPaymentDetails(){
        
        await this.enterCardNumber(testData.cardNumber)
        await this.enterNameOnCard(testData.nameonCard)
        await this.enterExpiryDate(testData.privateexpiryDate)
        await this.selectCardType()
        await this.enterCVV(testData.cardCvv)
        await this.nextButton()
        
    }
   
    async enterNameOnCard(cardName:string){
        await baseTest.enterTextInput("creditcardname", cardName)
    }
    async enterCardNumber(cardNumber:string){
        await baseTest.enterTextInput("creditcardno", cardNumber)
    }
    async selectCardType(){
        await baseTest.selectDropdown("creditcardtype", "VISA")
    }
   
    async enterExpiryDate(expiryDate:string){
        await baseTest.enterTextInput("creditcardexpiry", expiryDate)
    }

    async enterCVV(cardCvv:string){
        await baseTest.enterTextInput("creditcardcvv", cardCvv)
    }
   
    async nextButton(){
        await baseTest.jsClick("Next")
        
    }
    

    }

export default new paymentDetails()