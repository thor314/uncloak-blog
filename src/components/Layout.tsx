import React from 'react';
import TopBar from './NavBar';
import LeftBar from './LeftBar';

export type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <TopBar/>
            <LeftBar/>
            <main>{props.children}</main>
        </>
    );
}
