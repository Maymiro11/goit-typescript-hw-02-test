import css from "./ImageCard.module.css";
import { FC } from 'react';
import { ImgDetails, ImgInstance } from '../App/App.types';

interface ImageCardProps {
    imgData: Omit<ImgInstance, 'id'>;
    onClick: (obj: ImgDetails) => void;
  }

  const ImageCard: FC<ImageCardProps> = ({
    imgData: {
      urls: { small, regular },
      alt_description,
    },
    onClick,
  }) => {

  return (
    <div className={css.card}>
      <img
        className={css.img}
        src={small}
        alt={alt_description}
        data-url={regular}
        width={300}
        height={200}
        onClick={() => onClick({ regular, alt_description, portfolio:'' })}
      />
    </div>
  );
}

export default ImageCard;
