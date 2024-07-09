import baseTest from "../jupitorToys/baseTest.ts";

class deliveryDetailsTab extends baseTest{

    async enterDeliveryDetails(){
        await this.selectRadioButton()
        await this.nextButton()
        
        }
    async selectRadioButton(){
        await this.clickRadioButton()
    }
    async nextButton(){
        await this.clickNextButton()
        
    }

}

export default new deliveryDetailsTab()