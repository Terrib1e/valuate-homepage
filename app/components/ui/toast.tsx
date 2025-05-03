"use client"

import React, { createContext, useContext, useState, ReactNode, HTMLAttributes } from "react"
import { Toast as ToastType } from "./use-toast"

interface ToastContextType {
  toasts: ToastType[]
  addToast: (toast: ToastType) => void
  removeToast: (id: string) => void
}

export const ToastContext = createContext<ToastContextType | null>(null)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastType[]>([])

  const addToast = (toast: ToastType) => setToasts((prev) => [...prev, { ...toast, id: Date.now().toString() }])
  const removeToast = (id: string) => setToasts((prev) => prev.filter((t) => t.id !== id))

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastViewport />
    </ToastContext.Provider>
  )
}

type ToastProps = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  children?: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

export function Toast({ id, title, description, action, children, className, ...props }: ToastProps) {
  const context = useContext(ToastContext)
  if (!context) return null

  const { removeToast } = context

  return (
    <div className={`fixed bottom-4 right-4 bg-white border shadow-lg rounded p-4 mb-2 min-w-[250px] ${className || ''}`} {...props}>
      {children || (
        <div className="grid gap-1">
          {title && <ToastTitle>{title}</ToastTitle>}
          {description && <ToastDescription>{description}</ToastDescription>}
          {action}
        </div>
      )}
      <ToastClose onClick={() => removeToast(id)} />
    </div>
  )
}

export function ToastTitle({ children }: { children: ReactNode }) {
  return <div className="font-bold text-lg mb-1">{children}</div>
}

export function ToastDescription({ children }: { children: ReactNode }) {
  return <div className="text-gray-700 text-sm mb-2">{children}</div>
}

export function ToastClose({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700">&times;</button>
  )
}

export function ToastViewport() {
  const context = useContext(ToastContext)
  if (!context) return null

  const { toasts } = context

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => {
        const { id, title, description, action, ...toastProps } = toast
        if (!id) return null
        return (
          <Toast key={id} id={id} {...toastProps}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
          </Toast>
        )
      })}
    </div>
  )
}