import React from 'react';
import { Outlet } from 'react-router-dom';

const VehiclesLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
}

export default VehiclesLayout;
