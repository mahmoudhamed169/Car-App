import React from 'react';
import { Outlet } from 'react-router-dom';

const MasterLayout = () => {
    return (
        <div>
            <Outlet></Outlet>

        </div>
    );
}

export default MasterLayout;
