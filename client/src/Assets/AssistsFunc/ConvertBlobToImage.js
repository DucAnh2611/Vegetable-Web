export default function ConvertToImage(image) {

    const base64String = btoa(new Uint8Array(image.data).reduce(function (data, byte) {
        return data + String.fromCharCode(byte);
    }, ''));
    
    return `data:image/png;base64,${base64String}`;
}
