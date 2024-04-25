import React from 'react'
import { IoIosClose } from "react-icons/io";

const Modal = ({ openModal, handleOpenModal, handleCloseModal, modalTitle, children, trigger }) => {
  return (
    <>
      {openModal &&
        <div className='modal-overlay'>
          <div className='modal-container rounded-md p-2 flex flex-col gap-8'>
            <div className='flex items-center justify-between'>
              <div className='font-semibold text-xl'>
                {modalTitle}
              </div>
              <IoIosClose size={30} onClick={handleCloseModal} />
            </div>
            {children}
          </div>

        </div>
      }
      <div className='modal-show-container'>
        {trigger}
      </div>

    </>
  )
}

export default Modal