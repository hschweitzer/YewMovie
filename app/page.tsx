'use client'

import { useRouter } from 'next/navigation'

function Page() {
    const router = useRouter()

    return (
        <div className='h-32 flex flex-col justify-evenly items-center'>
            <h1 className="text-5xl font-bold text-teal-950 dark:text-teal-50">Hello, welcome to YewMovie!</h1>
            <button className='rounded-lg bg-teal-700 text-white p-3 text-lg font-bold' type="button" onClick={() => router.push('/editor')}>Open editor</button>
        </div>
    );
}

export default Page;