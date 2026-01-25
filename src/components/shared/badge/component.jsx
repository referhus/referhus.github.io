import './style.sass'

export const Badge  = (props) => {
  return (
    <div className="badge text-small">
      {props.text}
    </div>
  )
}