import baseTest from "../jupitorToys/baseTest.ts";

class deliveryDetails{

    async enterDeliveryDetails(){
        await this.selectRadioButton()
        await this.nextButton()
        
        }
    async selectRadioButton(){
        await baseTest.clickRadioButton()
    }
    async nextButton(){
        await baseTest.jsClick("Next")
        
    }

    }

export default new deliveryDetails()