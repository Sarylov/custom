// import html2canvas from 'html2canvas';
import html2canvas from '@wtto00/html2canvas';

export const saveImage = () => {
  html2canvas(document.getElementById('constructor'), {
    scale: 2,
    windowWidth: 1280,
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
  const canvas = await html2canvas(element, {
    scale: 2,
    windowWidth: 1280,
  });
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
  const file = new File([blob], 'mini.png', { type: 'text/plain' });
  return file;
}

export const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
