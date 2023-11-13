import { useState } from 'react';
import { getFileFromBase64 } from '../helpers/files';

export const useWhiteBall = () => {
  const [files, setFiles] = useState({});
  const [cropped, setCropped] = useState({});

  function changeFile(id, file) {
    setFiles((prev) => {
      const res = { ...prev };
      res[id] = { id, file };
      return res;
    });
  }

  function changeCropped(id, cropped) {
    setCropped((prev) => {
      const res = { ...prev };
      res[id] = { id, cropped };
      return res;
    });
  }

  async function getCroppedFiles() {
    let croppedValues = Object.values(cropped);
    const croppedPromises = croppedValues.map(async (croppedValue) => {
      const file = await getFileFromBase64(croppedValue.cropped);
      return { id: croppedValue.id, cropped: file };
    });
    croppedValues = await Promise.all(croppedPromises);
    return croppedValues;
  }

  async function sendFiles(propfiles) {
    const filesValues = Object.values(files);
    const croppedValues = await getCroppedFiles();

    const formData = new FormData();

    filesValues.forEach((file) => {
      formData.append(file.id.toString(), file.file);
    });

    croppedValues.forEach((cropped) => {
      formData.append(cropped.id.toString(), cropped.cropped);
    });

    if (propfiles) {
      propfiles.forEach((file) => {
        formData.append(file.name, file.file);
      });
    }

    return fetch('http://localhost:8000/uploadFiles', {
      method: 'POST',
      // mode: 'no-cors',
      body: formData,
    }).then((res) => res.json());
  }

  return { changeFile, sendFiles, changeCropped };
};
