export const Button = ({ text, onClick, disabled = false }) => (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
);