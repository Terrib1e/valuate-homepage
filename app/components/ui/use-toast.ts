"use client"

import { useContext } from "react"
import { ToastContext } from "./toast"

export interface Toast {
  id?: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  className?: string
  duration?: number
  position?: 'top' | 'bottom' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}

export function useToast() {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }

  const { toasts, addToast, removeToast } = context

  return {
    toasts,
    toast: (props: Toast) => {
      addToast(props)
    },
    dismiss: (toastId: string) => {
      removeToast(toastId)
    }
  }
}