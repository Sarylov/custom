import { useState } from 'react';
import { getFileFromBase64 } from '../../helpers/files';

export const useConstructor = () => {
  const [files, setFiles] = useState({});
  const [cropped, setCropped] = useState({});
  const [namePlayer, setNamePlayer] = useState();
  const [numberPlayer, setNumberPlayer] = useState();
  const [isRotateConstructor, setIsRotateConstructor] = useState(false);
  const [isConstructorFullFilled, setIsConstructorFullFilled] = useState(false);

  function rotateConstructor() {
    setIsRotateConstructor((prev) => !prev);
  }

  function checkFullFilledConstructor() {
    const interactiveElementsConstructor =
      document.querySelectorAll('.question-hint');
    const isEmpty = interactiveElementsConstructor.length === 0;
    
    if (isEmpty) setIsConstructorFullFilled(true);
    else setIsConstructorFullFilled(false);
  }

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

  return {
    files,
    getCroppedFiles,
    changeFile,
    changeCropped,
    namePlayer,
    setNamePlayer,
    numberPlayer,
    setNumberPlayer,
    isRotateConstructor,
    rotateConstructor,
    isConstructorFullFilled,
    checkFullFilledConstructor,
  };
};
