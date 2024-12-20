import './Button.css'

export default function StyledButton({children}) {
  return (
    <button  className='styledButton w-full flex justify-between'>{children}</button>
  )
}
