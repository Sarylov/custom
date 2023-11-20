import { useState } from 'react';
import { getFileFromBase64, getTxtFile } from '../helpers/files';

export const useBall = () => {
  const [files, setFiles] = useState({});
  const [cropped, setCropped] = useState({});
  const [fullName, setFullName] = useState();
  const [number, setNumber] = useState();

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

  async function sendFiles(propfiles, email) {
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

    formData.append('email', email);

    if (number || fullName) {
      const nameAndNumber = `Имя игрока (надпись на мяче): ${fullName}\nНомер игрока: ${number}`;
      const nameAndNumberFile = getTxtFile(nameAndNumber, 'nameAndNumber');

      formData.append('2_3_5', nameAndNumberFile);
    }

    return fetch('localhost:3000/v1/upload', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());
  }

  async function fetchPay() {
    const options = {
      amount: '4000.00',
      payment_method_type: 'bank_card',
      confirmation: {
        type: 'redirect',
        return_url: `${window.location.origin}/success`,
      },
    };

    await fetch('localhost:3000/v1/payment/create', {
      method: 'POST',
      body: JSON.stringify(options),
    }).then((res) => res.json);
  }

  return {
    changeFile,
    sendFiles,
    changeCropped,
    fullName,
    setFullName,
    number,
    setNumber,
    fetchPay,
  };
};
