import React, { useState } from 'react';
import { Container, FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material';

export default function App() {
    const [person, setPerson] = useState('');
    const [day, setDay] = useState('sunday');
    const [fromTime, setFromTime] = useState('09:30 AM');
    const [toTime, setToTime] = useState('10:00 AM');

    const handlePersonChange = (event) => setPerson(event.target.value);
    const handleDayChange = (event) => setDay(event.target.value);
    const handleFromTimeChange = (event) => setFromTime(event.target.value);
    const handleToTimeChange = (event) => setToTime(event.target.value);
    const addPerson = () => {/* Logic to add a person's schedule */};
    const addUnavailableTime = () => {/* Logic to add unavailable time */};

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const timeSlots = [
        '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', 
        '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', 
        '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', 
        '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', 
        '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM'
    ];

    const flexContainer = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: '1rem'
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Box style={flexContainer}>
                    <FormControl style={{ flex: 1, marginRight: '1rem' }}>
                        <InputLabel id="person-selector-label">I am</InputLabel>
                        <Select
                            labelId="person-selector-label"
                            id="person-selector"
                            value={person}
                            label="I am"
                            onChange={handlePersonChange}
                        >
                            <MenuItem value="">Select person...</MenuItem>
                            {/* Person options here */}
                        </Select>
                    </FormControl>
                    <Button variant="contained" onClick={addPerson}>Add Person</Button>
                </Box>

                <Box style={flexContainer}>
                    <FormControl style={{ flex: 1, marginRight: '1rem' }}>
                        <InputLabel id="day-selector-label">I'm unavailable on</InputLabel>
                        <Select
                            labelId="day-selector-label"
                            id="day-selector"
                            value={day}
                            label="I'm unavailable on"
                            onChange={handleDayChange}
                        >
                            {daysOfWeek.map((day) => (
                                <MenuItem key={day} value={day.toLowerCase()}>{day}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl style={{ flex: 1, marginRight: '1rem' }}>
                        <InputLabel id="from-time-label">From</InputLabel>
                        <Select
                            labelId="from-time-label"
                            id="from-time"
                            value={fromTime}
                            label="From"
                            onChange={handleFromTimeChange}
                        >
                            {timeSlots.map((time) => (
                                <MenuItem key={time} value={time}>{time}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl style={{ flex: 1 }}>
                        <InputLabel id="to-time-label">To</InputLabel>
                        <Select
                            labelId="to-time-label"
                            id="to-time"
                            value={toTime}
                            label="To"
                            onChange={handleToTimeChange}
                        >
                            {timeSlots.map((time) => (
                                <MenuItem key={time} value={time}>{time}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Button variant="contained" onClick={addUnavailableTime}>Add</Button>
                </Box>
                {/* Unavailable times will be listed here */}
            </Box>
        </Container>
    );
}
