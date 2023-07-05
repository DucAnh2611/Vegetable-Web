export default function ConvertImageToBuffer(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const buffer = reader.result;
        resolve(buffer);
      };
      reader.onerror = () => {
        reject(new Error('Error reading image file'));
      };
      reader.readAsArrayBuffer(file);
    });
  }