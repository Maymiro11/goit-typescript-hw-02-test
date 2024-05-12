import { FC, forwardRef, RefAttributes } from 'react';
import { ImgArray, ImgDetails } from '../App/App.types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageGalleryProps extends RefAttributes<HTMLUListElement> {
  imgData: ImgArray;
  onClick: (obj: ImgDetails) => void;
}

const ImageGallery: FC<ImageGalleryProps> = forwardRef<
  HTMLUListElement,
  ImageGalleryProps
>(({ imgData, onClick }, ref) => {
  return (
    <ul className={css.list} ref={ref}>
      {imgData.map(item => {
        return (
          <li key={item.id}>
            <ImageCard imgData={item} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
});
ImageGallery.displayName = 'ImageGallery';

export default ImageGallery;
