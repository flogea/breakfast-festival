import styles from './Button.module.scss'
import classNames from 'classnames';

type ButtonProps = {
  text: string;
  style: 'primary' | 'outline';
  onClick: () => void;
}

export const Button = ({ text, style, onClick }: ButtonProps) => {
  return (
    <button className={classNames(styles.button, styles[`${style}`])} onClick={onClick}>{text}</button>
  )
}
