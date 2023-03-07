import React from 'react';
import TopBar from './NavBar';

export type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <NavBar/>
            <main>{props.children}</main>
        </>
    );
}
