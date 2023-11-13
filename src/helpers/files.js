import html2canvas from 'html2canvas';
// import base64ToFile from 'base64-to-file';

export async function TakeScreenshot(name, elementId) {
  const element = document.getElementById(elementId);
  const snapshot = await html2canvas(element);

  const dataUrl = snapshot.toDataURL();
  const link = document.createElement('a');

  link.download = name + 'image.png';
  link.href = dataUrl;
  link.click();
}

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

export function getTxtFile(text) {
  const blob = new Blob([text], { type: 'text/plain' });
  const file = new File([blob], 'textFile.txt', { type: 'text/plain' });
  return file;
}

export async function getFileFromBase64(base64) {
  const base64Response = await fetch(`${base64}`);
  const blob = await base64Response.blob();
  const file = new File([blob], 'mini', { type: 'text/plain' });
  return file;
}
