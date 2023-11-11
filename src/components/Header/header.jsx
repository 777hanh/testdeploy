import styles from './header.module.css';
import './style.css';

const header = () => {
    return <div className={[styles.heading, 'heading'].join(' ')}>header</div>;
};

export default header;
