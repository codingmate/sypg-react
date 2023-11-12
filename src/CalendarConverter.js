import React, { useState } from 'react';
import axios from 'axios';
import './CalendarConverter.css';
import { Link } from 'react-router-dom';

const CalendarConverter = () => {
    const [date, setDate] = useState('');
    const [convertedDate, setConvertedDate] = useState('');
    const [calendarType, setCalendarType] = useState('solar');

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleCalendarTypeChange = (event) => {
        setCalendarType(event.target.value);
    };

    const handleConvert = () => {
        if (!date)
            return
        const splitDate = date.split("-")
        const year = splitDate[0]
        const month = splitDate[1]
        const day = splitDate[2]
        const payload = { year, month, day };
        console.log(date.split("-"))

        const api = "http://localhost:8080/api/calendar/" + (calendarType === 'solar' ? 'lunar' : 'solar')
        console.log(api)
        axios.post(api, payload)
            .then(response => {
                setConvertedDate(response.data);
                console.log("abc : " + response.data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="calendar-converter-main">
            <h2>음양력 전환</h2>
            <div>
                <input type="radio" id="solar" name="calendarType" value="solar"
                    checked={calendarType === 'solar'} onChange={handleCalendarTypeChange} />
                <label htmlFor="solar">양력</label>
                <input type="radio" id="lunar" name="calendarType" value="lunar"
                    checked={calendarType === 'lunar'} onChange={handleCalendarTypeChange} />
                <label htmlFor="lunar">음력</label>
            </div>
            <input
                type="date"
                value={date}
                onChange={handleDateChange}
            />
            <button onClick={handleConvert}>변환</button>
            <p>변환된 날짜:  {convertedDate} </p>
            <div className="link-back">
                <Link to="/">대시보드로 돌아가기</Link>
            </div>
        </div>
    );
};

export default CalendarConverter;
