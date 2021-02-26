import React, {useState, useEffect} from 'react';
import {Container, InputDate, Icon, CloseBox, DateBox, Labels} from './styled';
import PropTypes from 'prop-types';
import 'react-day-picker/lib/style.css';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/entry.nostyle';

const DatePicker = ({action, targetProperty, defaultValue, updateContent}) => {
    const [openedCalendar, setOpenedCalendar] = useState(false);
    const [innerDay, setInnerDay] = useState(undefined);

    useEffect(() => {
        if (defaultValue !== undefined && defaultValue !== '') {
            setInnerDay(new Date(defaultValue))

        }
    }, []);

    const handleDay = (day, {selected}) => {
        if (selected) {
            // Unselect the day if already selected

            setInnerDay(undefined);
            console.log('selected')
            updateContent(targetProperty, '')
            setOpenedCalendar(false);
            return;
        }
        console.log('not', day)
        setInnerDay(day);
        updateContent(targetProperty, day.toISOString());
        setOpenedCalendar(false);

    }

    const [inneDateTime, setInnerDateTime] = useState(null);

    useEffect(() => {
        if (defaultValue !== undefined && defaultValue !== '') {
            setInnerDateTime(new Date(defaultValue));
        }
    }, []);

    const handleDateTime = (value) => {
        console.log(value);
        setInnerDateTime(value);
        updateContent(targetProperty, value ? value.toISOString() : value);

    }

    return (
        <>
            <Container>
                <Labels>
                    <label>day</label>
                    <label>time</label>
                </Labels>
                <DateTimePicker
                    locale={"en-EN"}
                    onChange={handleDateTime}
                    value={inneDateTime}
                />
            </Container>

        </>);
}

DatePicker.propTypes = {
    action: PropTypes.func,
    targetProperty: PropTypes.string.isRequired,
    defaultValue: PropTypes.string
};

export default DatePicker;
