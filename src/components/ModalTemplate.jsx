import { NextModal, NextModalClose } from "./NextModal"

export function ModalTemplate({ children, title }) {
  return (
    <NextModal>
      <div className="mb-4 flex items-center">
        <h5 className="variant-btn w-1 grow truncate font-semibold">{title}</h5>
        <div className="-me-1.5 -mt-1 flex">
          <NextModalClose />
        </div>
      </div>
      <div
        aria-hidden
        tabIndex={-1}
        className="border-gray-4 -mx-5 mb-3 border-[.5px]"
      ></div>
      {children}
    </NextModal>
  )
}
