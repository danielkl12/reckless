import React from 'react';
import Modal from 'react-modal';

// Modal component
const CustomModal = ({ isOpen, onRequestClose, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <span className="modal-close" onClick={onRequestClose}>&times;</span>
            {children}
        </Modal>
    );
};

const Calendar = (props) => {
    const [isDesktop, setIsDesktop] = React.useState(false);
    const [calendarModalIsOpen, setCalendarModalIsOpen] = React.useState(false);

    const updatePredicate = () => {
        setIsDesktop(window.innerWidth > 900);
    };

    React.useEffect(() => {
        updatePredicate();
        window.addEventListener('resize', updatePredicate);
        return () => {
            window.removeEventListener('resize', updatePredicate);
        };
    }, []);

    const openCalendarModal = () => {
        setCalendarModalIsOpen(true);
    };

    const closeCalendarModal = () => {
        setCalendarModalIsOpen(false);
    };

    return (
        <section id="calendar">
            {isDesktop ? (
                <div>
                    <div className="calendar-wrapper">
                        <h1 className="calendar-h1">December 2020</h1>
                        {/* Calendar content */}
                        <a onClick={openCalendarModal} className="calendar-buttons">Open Modal</a>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="calendar-wrapper">
                        <h1>December 2020</h1>
                        {/* Calendar content */}
                        <a onClick={openCalendarModal} className="calendar-buttons">Open Modal</a>
                    </div>
                </div>
            )}
            {/* Render the modal */}
            <CustomModal isOpen={calendarModalIsOpen} onRequestClose={closeCalendarModal}>
                <h2>Calendar Modal</h2>
                {/* Add modal content here */}
            </CustomModal>
        </section>
    );
};

export default Calendar;