import QRCode from "qrcode";


const btn: HTMLElement = document.getElementById('btn') as HTMLElement;
const container: HTMLElement = document.getElementById('container') as HTMLElement;
const input: HTMLInputElement = document.getElementById('input') as HTMLInputElement;


btn.addEventListener('click', () => {
    const inputValue: string |any = input.value
    let stringdata = JSON.stringify(inputValue)
console.log(stringdata)
    console.log(inputValue)
    QRCode.toString(stringdata, { type: 'terminal' }, (err, myQRcode) => {
        if (err) return console.log(err)
        console.log(myQRcode)
        container.innerHTML = myQRcode
    })

})


