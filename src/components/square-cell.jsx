/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { fileToBase64 } from '../helpers/files';
import imageCompression from 'browser-image-compression';
import { CropperImage } from './cropper-image';
import { Modal } from './modal';
import { NumberListItem } from './number-list-item';

export const SquareCell = ({
  id,
  preview = <p>{id}</p>,
  width,
  height,
  changeFile,
  changeCropped,
  className,
  classNameWrapper,
  isTransparentBackground = false,
  modalTitle = 'Создайте макет сектора',
  stepOneTitle = 'Загрузите фото',
  isRounded = true,
}) => {
  const [imageSrc, setImageSrc] = useState('');
  const [croppedImage, setCroppedImage] = useState(null);
  const [step, setStep] = useState(1);

  const [widthInPixels, setWidthInPixels] = useState(0);
  const [heightInPixels, setHeightInPixels] = useState(0);

  const cell = useRef(null);

  useEffect(() => {
    if (cell) {
      const element = cell.current;
      const handleResize = () => {
        setWidthInPixels(element.offsetWidth);
        setHeightInPixels(element.offsetHeight);
      };
      const myObserver = new ResizeObserver(handleResize);
      myObserver.observe(element);
      return () => myObserver.unobserve(element);
    }
  }, []);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const maxFileSizeByte = 0.5 * 1024 * 1024;
      changeFile(id, file);

      const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      try {
        const compressedFile =
          file.size <= maxFileSizeByte
            ? file
            : await imageCompression(file, options);

        const imageBase64 = await fileToBase64(compressedFile);
        setImageSrc(imageBase64);
        setStep(2);
      } catch (error) {
        console.log(error);
        setStep(1);
      }
    } else setStep(1);
  };

  return (
    <div className={classNameWrapper}>
      <Modal
        name={`crop-${id}`}
        title={modalTitle}
        closeButton={
          step === 2 ? (
            <button className="w-full mt-2 btn btn-accent">
              сохранить макет
            </button>
          ) : (
            <button className="w-full mt-2 btn">Закрыть редактор</button>
          )
        }
        content={
          <div className="flex flex-col gap-4 mt-4">
            <ul className="steps">
              <li className="step step-primary"></li>
              <li className={`step ${step === 2 ? 'step-primary' : ''}`}></li>
              <li className="step"></li>
            </ul>
            <NumberListItem
              number={
                <span className={step === 1 ? 'font-bold text-lg' : ''}>1</span>
              }
            >
              <h3 className={`${step === 1 ? 'font-bold text-lg' : ''}`}>
                {stepOneTitle}
              </h3>
              <p>Выбирайте фотографии в хорошем качестве</p>
              <input
                className={`file-input w-full ${
                  step === 1 ? 'file-input-success' : ''
                }`}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </NumberListItem>
            <NumberListItem
              number={
                <span className={step === 2 ? 'font-bold text-lg' : ''}>2</span>
              }
            >
              <h3 className={`${step === 2 ? 'font-bold text-lg' : ''}`}>
                Скадрируйте фотографию
              </h3>
              {step === 2 && (
                <p>После кадрирования фотография будет обрезана</p>
              )}
            </NumberListItem>
            {step === 2 && (
              <div className={`w-[300px] mx-auto h-[40vh]`}>
                <CropperImage
                  setCroppedimage={(cropped) => {
                    changeCropped(id, cropped);
                    setCroppedImage(cropped);
                  }}
                  aspect={widthInPixels / heightInPixels}
                  imageSrc={imageSrc}
                />
              </div>
            )}
            <NumberListItem number={3}>
              <h3>Сохраните макет сектора</h3>
            </NumberListItem>
          </div>
        }
      >
        <div
          className={`${className} cursor-pointer ${
            isTransparentBackground ? 'bg-transparent' : 'bg-gray-700'
          }  
          ${
            isRounded ? 'overflow-hidden rounded-[35%]' : ''
          } flex justify-center items-center`}
          ref={cell}
          style={{ width, height }}
        >
          {croppedImage ? (
            <img
              src={croppedImage}
              alt=""
              className="object-cover w-full h-full"
            />
          ) : (
            <>{preview}</>
          )}
        </div>
      </Modal>
    </div>
  );
};
