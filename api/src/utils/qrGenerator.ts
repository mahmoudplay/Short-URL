import QRCode from 'qrcode'

export async function qrCodeGenerator(url: string): Promise<string> {
    try {
        const qr = await QRCode.toDataURL(url)
        return qr
    } catch (err) {
        console.error(err)
        throw err
    }
}