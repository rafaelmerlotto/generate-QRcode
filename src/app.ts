import QRCode from "qrcode";


const input: HTMLInputElement = document.getElementById('input') as HTMLInputElement;
const btn: HTMLElement = document.getElementById('btn') as HTMLElement;
const container: HTMLElement = document.getElementById('qrCode') as HTMLElement;


btn.addEventListener('click', () => {
    const inputValue: string | any = input.value
    let stringdata = JSON.stringify(inputValue)
    QRCode.toString(stringdata, { type: 'terminal' }, (err, myQRcode) => {
        if (err) return console.log(err)
        container.innerHTML = myQRcode
    })
})


