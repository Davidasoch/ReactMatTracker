'use client'
import { useRouter } from 'next/navigation'

//basic button component to redirect
export const ButtonStaple = ({ path, label, size }: { path: string, label: string, size: string}) => {

    const router = useRouter()

    function callPath() {
        router.push(path)
    }

    return (

        <button className={`btn ${size}`} onClick={callPath}>{label}</button>
    )
}