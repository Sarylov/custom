import html2canvas from 'html2canvas';

export async function TakeScreenshot(name, elementId) {
  const element = document.getElementById(elementId);
  const snapshot = await html2canvas(element);

  const dataUrl = snapshot.toDataURL();
  const link = document.createElement('a');

  link.download = name + 'image.png';
  link.href = dataUrl;
  link.click();
}

export const saveImage = () => {
  const element = document.getElementById('constructor'); // Замените 'yourElementId' на id вашего элемента
  html2canvas(element, {
    scale: 12,
  }).then((canvas) => {
    const dataUrl = canvas.toDataURL();
    const link = document.createElement('a');

    link.download = name + 'image.png';
    link.href = dataUrl;
    link.click();
  });
};

export async function getScreenshot(elementId) {
  const element = document.getElementById(elementId);
  const canvas = await html2canvas(element);
  const file = await new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(new File([blob], 'result.png'));
    });
  });
  return file;
}

export function getTxtFile(text, fileName = 'textFile.txt') {
  const blob = new Blob([text], { type: 'text/plain' });
  const file = new File([blob], fileName, { type: 'text/plain' });
  return file;
}

export async function getFileFromBase64(base64) {
  const base64Response = await fetch(`${base64}`);
  const blob = await base64Response.blob();
  const file = new File([blob], 'mini', { type: 'text/plain' });
  return file;
}
