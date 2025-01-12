import React, { useState } from 'https://cdn.skypack.dev/react';

const FaultReportForm = ({ onReportFault }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onReportFault(description);
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Report a Fault</h2>
            <label htmlFor="description">Description</label>
            <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FaultReportForm;
