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
