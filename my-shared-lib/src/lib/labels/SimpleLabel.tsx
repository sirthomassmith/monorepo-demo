import styles from './SimpleLabel.module.scss';

interface SimpleLabelProps {
  message: string;
}

const SimpleLabel = ({message}:SimpleLabelProps) => {
  return (
    <div className={styles['container']}>
      <h1 className='bg-blue-300 mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden'>{message}</h1>
    </div>
  );
};

export default SimpleLabel;
