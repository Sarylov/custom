import { useState } from 'react';

export const useWhiteBall = () => {
  const [cells, setCells] = useState(
    new Array(17).fill({ file: '', cropped: null })
  );
  const [images, setImages] = useState([]);

  function changeFile(index, file) {
    setCells((prev) => {
      const res = [...prev];
      res[index].file = file;
      return res;
    });
  }

  function changeCropped(index, cropped) {
    setCells((prev) => {
      const res = [...prev];
      res[index].file = cropped;
      return res;
    });
  }

  return { cells, changeFile, changeCropped };
};
