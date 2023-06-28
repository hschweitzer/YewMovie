import type { Metadata } from 'next';
import {Timeline} from "../../components/timeline";

export const metadata: Metadata = {
    title: 'YewMovie - Editor',
};

export default function Page() {
    return (
        <>
            <h1>Welcome to the Editor!</h1>
            <Timeline></Timeline>
        </>
    );
}
