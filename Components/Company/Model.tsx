import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative bg-white p-4 rounded-lg w-[80%] h-[80%]">
        <button className="absolute -top-10 -right-5 m-2 text-red-500" onClick={onClose}><FontAwesomeIcon icon={faXmark} size='2xl'/></button>
        <ReactPlayer url={videoUrl} width="100%" height="100%"/>
      </div>
    </div>
  );
};

export default Modal;
