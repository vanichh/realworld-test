import { FC, ReactNode, HTMLAttributes, FormEvent } from "react"

interface Props extends HTMLAttributes<HTMLFormElement> {
  children: ReactNode
}

export const Form: FC<Props> = ({ children, ...props }) => {


  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return <form onSubmit={onSubmit} {...props} >{children}</form>
}