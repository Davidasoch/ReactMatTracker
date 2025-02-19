'use client'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

export const ButtonStaple = (data) => {

    const router = useRouter()

    function callPath(){
      router.push(data.data.path)
       }

    return(

<button onClick={callPath}>{data.data.label}</button>
    )
}