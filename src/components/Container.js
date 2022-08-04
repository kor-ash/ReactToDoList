import styles from './Container.module.css'
import Content from './Content';
const Container = () => {
    return (
        <div className={styles.Container}>
            <Content/>
        </div>
    );
};

export default Container;