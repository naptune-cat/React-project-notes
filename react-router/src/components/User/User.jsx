import React from 'react'
import { useParams } from 'react-router-dom';

export default function Header() {
    const {userid} = useParams()
    return (
        <>
        <div className='bg-slate-700 text-3xl text-white text-center'>User: {userid}</div>
        </>
    );
}