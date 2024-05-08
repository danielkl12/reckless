import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

// Modal component
const CustomModal = ({ isOpen, onRequestClose, selectedDay, dayDetails }) => {
    console.log("selectedDay:", selectedDay);
    console.log("dayDetails:", dayDetails);
    const details = dayDetails[selectedDay];
    console.log("details:", details);
    
    if (!details) {
        return null; // Return null or handle the case when details are undefined
    }
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={modalStyles}>
            <h2 className="modal-day-title">Gig Details</h2>
            <p>{details.description}</p>
            <p>{details.description2}</p>
            {details.url && <a href={details.url}>More Info</a>}
            {details.photo && <img src={details.photo} alt="Day Photo" />}
            {/* <button onClick={onRequestClose}>Close</button> */}
        </Modal>
    );
};

const modalStyles = {
    content: {
      width: '50%',
      height: '50%',
      margin: 'auto',
      backgroundColor: 'black',
      borderRadius: '8px',
      color:'white',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      border: 'none',
      outline: 'none'
    }
  };

const Calendar = (props) => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [calendarModalIsOpen, setCalendarModalIsOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);

    const [dayDetails, setDayDetails] = useState({
        1: {
            description: "Details for Day 1",
            url: "https://example.com/day1",
            // photo: "day1.jpg"
        },
        2: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        3: {
            description: "Mainstreet Bar and Grill ",
            description2: "Please join us for a night of classic rock with our friends at Mainstreet Bar and Grill!",
            url: "https://mainstreetbar.com/",
            // photo: "day2.jpg"
        },
        4: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        5: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        6: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        7: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        8: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        9: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        10: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        11: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        12: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        13: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        14: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        15: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        16: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        17: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        18: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        19: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        20: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        21: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        22: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        23: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        24: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        }, 
        25: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        26: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        27: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        28: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        29: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        30: {
            description: "Details for Day 2",
            url: "https://example.com/day2",
            // photo: "day2.jpg"
        },
        
        31: {
            description: "Details for Day 31",
            url: "https://example.com/day31",
            // photo: "day31.jpg"
        }
    });

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
        <section>
            <div className="calendar-wrapper">
                <h1 className="calendar-h1" id="calendar" data-aos="fade-in" data-aos-duration="2000">Calendar</h1>
                <h3 className="calendar-h4" id="calendar" data-aos="fade-in" data-aos-duration="2000">March</h3>
                <ol className="calendar" id="calendar" data-aos="fade-in" data-aos-duration="2000">
                    {[...Array(31).keys()].map((day) => (
                        <li key={day} className="day-style">
                            {dayDetails[day + 1] && ( // Check if details exist for the day
                                <button onClick={() => openCalendarModal(day + 1)}  className={`calendar-buttons ${day + 1 === 3 || day + 1 === 12 || day +1 === 15 ? 'with-bullet' : ''}`}>
                                    {day + 1}
                                </button>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
            {/* Render the modal */}
            <CustomModal isOpen={calendarModalIsOpen} onRequestClose={closeCalendarModal} selectedDay={selectedDay} dayDetails={dayDetails} />
        </section>
    );
};

export default Calendar;