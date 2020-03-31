import React, { Fragment } from 'react';
import './styles.css'

const styles = {fontSize: '24px', color: '#ff0055', textTransform: 'uppercase'}

// Fragment
const Columns = () => (
    <Fragment>
        <td style={styles}>Hello</td>
        <td className="simple-title">world</td>
    </Fragment>
);

const Table = () => (
    <table>
        <tbody>
            <tr>
                <Columns />
            </tr>
        </tbody>
    </table>
);

export default Table;