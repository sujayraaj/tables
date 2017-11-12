import React from 'react';
import PropTypes from 'proptypes';
import Row from './Row';

export const TableBody = ({rows}) => {
    const generateRows = () => rows.map((val, ind) => <Row data={val} key={ind} />);
    return (<tbody>
        { rows ? generateRows() : null}
    </tbody>);
};

TableBody.propTypes = {
    rows:PropTypes.object, // now using immutable List Object
};

export default TableBody;