class testData{

    private _firstName = "testFirstName"
    private _lastName = "testLastName"
    private _emailAddress = "test@test.com"
    private _phoneNumber = "0453565465"
    private _addressLine1 = "100 Collins Street"
    private _addressLine2 = "Melbourne CBD"
    private _subUrb = "Melbourne CBD"
    private _state = "VIC"
    private _postCode = "3000"
    private _cardNumber = "4111111111111111"
    private _nameonCard = "test"
    private _expiryDate = "15/08"
    private _cardCvv = "123"


    public get firstName() {
        return this._firstName
    }
    public set firstName(value) {
        this._firstName = value
    }

    public get lastName() {
        return this._lastName
    }
    public set lastName(value) {
        this._lastName = value
    }

    public get emailAddress() {
        return this._emailAddress
    }
    public set emailAddress(value) {
        this._emailAddress = value
    }

    public get phoneNumber() {
        return this._phoneNumber
    }
    public set phoneNumber(value) {
        this._phoneNumber = value
    }

    public get addressLine1() {
        return this._addressLine1
    }
    public set addressLine1(value) {
        this._addressLine1 = value
    }

    public get addressLine2() {
        return this._addressLine2
    }
    public set addressLine2(value) {
        this._addressLine2 = value
    }

    public get subUrb() {
        return this._subUrb
    }
    public set subUrb(value) {
        this._subUrb = value
    }

    public get state() {
        return this._state
    }
    public set state(value) {
        this._state = value
    }

    public get postCode() {
        return this._postCode
    }
    public set postCode(value) {
        this._postCode = value
    }

    public get cardNumber() {
        return this._cardNumber
    }
    public set cardNumber(value) {
        this._cardNumber = value
    }
    
    public get nameonCard() {
        return this._nameonCard
    }
    public set nameonCard(value) {
        this._nameonCard = value
    }
    public get privateexpiryDate() {
        return this._expiryDate
    }
    public set privateexpiryDate(value) {
        this._expiryDate = value
    }
    public get cardCvv() {
        return this._cardCvv
    }
    public set cardCvv(value) {
        this._cardCvv = value
    }
    
}
export default new testData()