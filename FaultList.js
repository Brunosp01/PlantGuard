import React from 'https://cdn.skypack.dev/react';

const FaultList = ({ faults }) => (
    <section>
        <h2>Reported Faults</h2>
        <ul>
            {faults.map((fault, index) => (
                <li key={index}>{fault}</li>
            ))}
        </ul>
    </section>
);

export default FaultList;
