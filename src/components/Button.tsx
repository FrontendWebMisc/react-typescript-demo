export const Button = (props: { label: string; onClick: () => void }) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};
