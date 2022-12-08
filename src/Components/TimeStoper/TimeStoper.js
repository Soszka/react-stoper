import styles from './TimeStopper.module.scss';

const TimeStoper = ({ time }) => {

    const formatTime = milliseconds => {

        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60); 

        if (milliseconds < 10) {
            milliseconds = 0 + milliseconds
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }

        return `
           ${hours}:${minutes}:${seconds}
        `
    };

    return (
        <div className={styles.stoper}>
            {formatTime(time)}
        </div>
    );
};

export default TimeStoper;