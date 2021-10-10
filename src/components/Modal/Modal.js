import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  const closeModal = e => {
    const { target, code } = e;

    if (code === 'Escape') {
      onClose(closeModal);
    }

    if (target.nodeName !== 'IMG') {
      onClose(closeModal);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">{children}</div>
    </div>,
    modalRoot,
  );
}
