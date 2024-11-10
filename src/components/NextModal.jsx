"use client"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"
import { createContext, Fragment, useContext, useEffect, useState } from "react"

// The initiator/trigger <Link> element must have the attribute "scroll={false}" to make the intercept work properly
const NextModalContext = createContext(null)

export function NextModal({ children, className, ...rest }) {
  const [open, setOpen] = useState(true)
  const router = useRouter()

  function handleState(state) {
    setOpen(state)
  }
  useEffect(() => {
    if (open) return
    // Route change after close animation is done
    setTimeout(() => {
      router.back()
    }, 200)
  }, [open])

  return (
    <Transition
      appear
      show={open}
      as={Fragment}
      className="z-[1000] px-4"
      {...rest}
    >
      <Dialog as="div" className="relative z-50" onClose={handleState}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </TransitionChild>

        <div className="relative z-10 mx-5">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 w-screen overflow-y-auto">
              {/* Container to center the panel */}
              <div className="flex min-h-full items-center justify-center p-4">
                {/* The actual dialog panel  */}

                <DialogPanel
                  className={cn(
                    "border-red/30 mx-auto w-full min-w-[70vw] max-w-3xl rounded-2xl border bg-white p-5",
                    className
                  )}
                >
                  <NextModalContext.Provider
                    value={{ open, setOpen, handleState }}
                  >
                    {children}
                  </NextModalContext.Provider>
                </DialogPanel>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}

export function NextModalClose({ className }) {
  const modalContext = useContext(NextModalContext)
  if (!modalContext)
    throw new Error("<NextModalClose/> must be a children of <NextModal>")
  return (
    <button
      onClick={() => modalContext.handleState(false)}
      className={cn(
        "block w-max rounded-sm bg-transparent text-3xl text-yellow-900 transition-colors hover:text-yellow-900/80",
        className
      )}
    >
      <X width={24} height={24} />
    </button>
  )
}
