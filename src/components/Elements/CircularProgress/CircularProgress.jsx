import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const CircularProgress = ({ value, pathColor, textColor }) => {
    const pathColorMenu = `rgba(${pathColor}, ${value / 100})`;
    return <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
            rotation: 0,
            strokeLinecap: 'round',
            textSize: '16px',
            pathTransitionDuration: 0.5,
            pathColor: pathColorMenu,
            textColor: textColor,
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
        })}
    />
}

export default CircularProgress;