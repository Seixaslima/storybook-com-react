

interface ButtonProps {
  children: React.ReactNode
  disabled?: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props}>
      {children}
    </button>
  )
}

Button.defaulProps = {
  disabled: false
}
