import React from 'react';
import Sidebar from "./sidebar";
import Body from "./body";
import Right from "./right";

function Dashboard(props) {
    return (
        <main>
            <Sidebar/>
            <Body/>
            <Right/>
        </main>
    );
}

export default Dashboard;