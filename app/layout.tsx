import type { Metadata } from 'next';
import {MyNav} from "../components/myNav";

// These styles apply to every route in the application
import './globals.css';

export const metadata: Metadata = {
    title: 'YewMovie',
    description: 'Edit movies online!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className='overflow-hidden bg-slate-50'>
                <MyNav></MyNav>
                <div>
                    {children}
                </div>
            </body>
        </html >
    )
}
