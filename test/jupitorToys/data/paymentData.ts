class paymentData{

    private _cardNumber = "4111111111111111"
    private _nameonCard = "test"
    private _expiryDate = "15/08"
    private _cardCvv = "123"

  
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
export default new paymentData()