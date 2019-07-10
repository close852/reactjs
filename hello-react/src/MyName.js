import React from 'react';

function MyName({ name, value }) {
    return (
        <div>
            Hi, guys. My Name is <b>{name || 123} / {value}</b>.
        </div>
    );
}
export default MyName;