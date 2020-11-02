import React, {useEffect, useRef} from 'react';

export const usePrevValues = (value, callback) => {
    const prevValues = useRef(value);

    useEffect(() => {
        callback(prevValues.current);
        return () => (prevValues.current = value);
    }, [value, callback]);
};