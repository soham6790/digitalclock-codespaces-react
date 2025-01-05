import React,{useState,useEffect} from 'react'

function DigitalClock(){

    const [time,setTime] = useState(new Date());

    useEffect(() =>{
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        //when un-mounting the component
        return () => {
            clearInterval(intervalId);
        }
    } ,[]);

    function formatTime(){
        let hours = time.getHours();
        const min = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM":"AM";

        hours = hours % 12 || 12 //convert to standard time from military time

        return `${padZero(hours)}:${padZero(min)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(<div className='clock-container'>
        <div className='clock'>
            <span>{formatTime()}</span>
        </div>
    </div>);
}

export default DigitalClock;