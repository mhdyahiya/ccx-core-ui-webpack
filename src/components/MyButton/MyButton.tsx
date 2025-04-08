import { FC } from 'react';
import './MyButton.scss';

type MyButtonProps = {
  label: string;
  onClick?: () => void;
};

const MyButton: FC<MyButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {label}
    </button>
  );
};

export default MyButton;
