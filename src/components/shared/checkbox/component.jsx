import './style.sass'

export const CheckboxButton = ({ name, value, isChecked = false, onChange, text }) => {
const className = `${isChecked ? 'checked' : ''} checkbox-button text-default`

  return (
    <label className={className}>
      <span className="checkbox-button__element">
        <input
          name={name}
          value={value}
          checked={isChecked}
          type="checkbox"
          onChange={onChange}
        />
        <span className="checkbox-button__icon">✓</span>
      </span>
      <span className="checkbox-button__label">
        {text}
      </span>
    </label>
  )
}