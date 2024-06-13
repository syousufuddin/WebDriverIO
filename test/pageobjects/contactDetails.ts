import baseTest from "../jupitorToys/baseTest.ts";
import testData from "../jupitorToys/testData/testData.ts";

class contactDetails{


    async enterContactDetails(){
        this.enterFirstName(testData.firstName)
        this.enterLastName(testData.lastName)
        this.enterEmail(testData.emailAddress)
        this.enterPhoneNumber(testData.phoneNumber)
        this.enterAddessLineOne(testData.addressLine1)
        this.enterAddessLineTwo(testData.addressLine2)
        this.enterSuburb(testData.subUrb)
        this.selectState()
        this.enterPostcode(testData.postCode)
        this.clickNext()
        
        }
    async enterFirstName(firstName:string){
    await baseTest.enterTextInput("firstName",firstName)
    }
    async enterLastName(lastName:string){
        await baseTest.enterTextInput("lastName",lastName)
    }
    async enterEmail(email:string){
        await baseTest.enterTextInput("email",email)
    }
    async enterPhoneNumber(phone:string){
        await baseTest.enterTextInput("phonenumber",phone)
    }
    async enterAddessLineOne(address1:string){
        await baseTest.enterTextInput("addressline1",address1)
    }
    async enterAddessLineTwo(address2:string){
        await baseTest.enterTextInput("addressline2",address2)
    }
    async enterSuburb(suburb:string){
        await baseTest.enterTextInput("suburb",suburb)
    }
    async selectState(){
        await baseTest.selectDropdown("state","VIC")
    }
    async enterPostcode(postcode:string){
        await baseTest.enterTextInput("postcode",postcode)
        
    }
    async clickNext(){
        await baseTest.clickButton("Next")
    }
    

}
export default new contactDetails()