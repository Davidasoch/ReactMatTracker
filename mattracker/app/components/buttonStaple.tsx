'use client'
import { useRouter } from 'next/navigation'

//basic button component to redirect
export const ButtonStaple = ({ path, label }: { path: string, label: string }) => {

    const router = useRouter()

    function callPath() {
        router.push(path)
    }

    return (

        <button className='btn' onClick={callPath}>{label}</button>
    )
}
