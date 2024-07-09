import baseTest from "../jupitorToys/baseTest.ts";
import contactData from "../jupitorToys/data/contactData.ts";


class contactDetailsTab extends baseTest{


    async enterContactDetails(){
       await this.enterFirstName(contactData.firstName)
       await this.enterLastName(contactData.lastName)
       await this.enterEmail(contactData.emailAddress)
       await this.enterPhoneNumber(contactData.phoneNumber)
       await this.enterAddessLineOne(contactData.addressLine1)
       await this.enterAddessLineTwo(contactData.addressLine2)
       await this.enterSuburb(contactData.subUrb)
       await this.selectState()
       await this.enterPostcode(contactData.postCode)
       await this.clickNext()
        
        }
    async enterFirstName(firstName:string){
    await this.enterTextInput("firstName",firstName)
    }
    async enterLastName(lastName:string){
        await this.enterTextInput("lastName",lastName)
    }
    async enterEmail(email:string){
        await this.enterTextInput("email",email)
    }
    async enterPhoneNumber(phone:string){
        await this.enterTextInput("phonenumber",phone)
    }
    async enterAddessLineOne(address1:string){
        await this.enterTextInput("addressline1",address1)
    }
    async enterAddessLineTwo(address2:string){
        await this.enterTextInput("addressline2",address2)
    }
    async enterSuburb(suburb:string){
        await this.enterTextInput("suburb",suburb)
    }
    async selectState(){
        await this.selectDropdown("state","VIC")
    }
    async enterPostcode(postcode:string){
        await this.enterTextInput("postcode",postcode)
        
    }
    async clickNext(){
        await this.clickNextButton()
    }
    

}
export default new contactDetailsTab()