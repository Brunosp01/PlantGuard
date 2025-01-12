import React, { useState } from 'https://cdn.skypack.dev/react';
import Header from './Header';
import Footer from './Footer';
import FaultReportForm from './FaultReportForm';
import FaultList from './FaultList';
import './index.css';

const App = () => {
    const [faults, setFaults] = useState([]);

    const handleReportFault = (description) => {
        setFaults([...faults, description]);
    };

    return (
        <div className="App">
            <Header />
            <main>
                <FaultReportForm onReportFault={handleReportFault} />
                <FaultList faults={faults} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
