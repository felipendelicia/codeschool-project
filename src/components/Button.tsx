import '../styles/Button.css'

const Button = (props: { children: string; onClick?: () => void }) => {
  return (
    <button onClick={props.onClick} className="button-component-container">
      {props.children}
    </button>
  );
};

export default Button;
