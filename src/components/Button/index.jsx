/* eslint-disable react/prop-types */

export default function Button({ children, action, disabled, className }) {
  return (
    <button className={className} onClick={action} disabled={disabled}>
      {children}
    </button>
  );
}
