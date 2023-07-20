import AdminLayout from '@/components/layouts/AdminLayout';
import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const Admin = () => {
    return (
        <h1>
            Admin
        </h1>
    );
};

export default Admin;

Admin.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            <AdminLayout>
                {page}
            </AdminLayout>
        </RootLayout>
    )
}