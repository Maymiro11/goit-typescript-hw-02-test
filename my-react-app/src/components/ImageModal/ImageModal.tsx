import ReactModal from 'react-modal';
import { FC } from 'react';
import css from "./ImageModal.module.css";
import { ImgDetails } from '../App/App.types';
import { FaWindowClose } from 'react-icons/fa';

interface ImageModalProps {
    isOpen: boolean;
    image: ImgDetails | null;
    setter: (newValue: boolean) => void;
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, image, setter }) => {
    ReactModal.setAppElement('#root');
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={() => setter(false)}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            shouldReturnFocusAfterClose={false}
            bodyOpenClassName={css.myModal}
            overlayClassName={css.myOverlay}
            className={css.modal}
        >
            <button
                className={css.closeButton}
                onClick={() => setter(false)}
                aria-label="close button"
            >
                <FaWindowClose className={css.modalIcon} size={30} />
            </button>
            <div className={css.container}>
                {image && (
                    <>
                        <img src={image.regular} alt={image.alt_description} />
                        <p className={css.text}>
                            {location ? ` from ${location}` : ` from lovely Earth planet`} --&gt;
                            More photos
                            <a
                                className={css.link}
                                href={image.portfolio}
                                target="_blank"
                                rel="noreferrer"
                            >
                                &nbsp;here
                            </a>
                        </p>
                    </>
                )}
            </div>
        </ReactModal>
    );
}

export default ImageModal;
