import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

// Modal component
const CustomModal = ({ isOpen, onRequestClose, selectedDay }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2 className="modal-day-title">Details for Day {selectedDay}</h2>
            {/* Add modal content here */}
            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

const Calendar = (props) => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [calendarModalIsOpen, setCalendarModalIsOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);

    const updatePredicate = () => {
        setIsDesktop(window.innerWidth > 900);
    };

    useEffect(() => {
        updatePredicate();
        window.addEventListener('resize', updatePredicate);
        return () => {
            window.removeEventListener('resize', updatePredicate);
        };
    }, []);

    const openCalendarModal = (day) => {
        setSelectedDay(day);
        setCalendarModalIsOpen(true);
    };

    const closeCalendarModal = () => {
        setCalendarModalIsOpen(false);
    };

    return (
        <section id="calendar">
            <div className="calendar-wrapper">
                <h1 className="calendar-h1">Calendar</h1>
                <ol className="calendar">
                    {[...Array(31).keys()].map((day) => (
                        <li key={day} className="day-style">
                            <button onClick={() => openCalendarModal(day + 1)} className="calendar-buttons" className="calendar-color">
                                {day + 1}
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
            {/* Render the modal */}
            <CustomModal isOpen={calendarModalIsOpen} onRequestClose={closeCalendarModal} selectedDay={selectedDay} />
        </section>
    );
};

export default Calendar;
