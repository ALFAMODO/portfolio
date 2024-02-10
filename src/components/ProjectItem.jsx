import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({ title, focus, projectUrl, websiteUrl, description, completed, status }) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-slate-100'>
            <section className="w-full p-5 space-y-3">
                <div className="flex justify-center text-xl font-semibold">{title}</div>
                <div>{description}</div>
                <div className="italic"><span className="font-bold">Skills: </span>{focus}</div>
                {completed === 'true' ? <div className="flex justify-around">
                    <Link href={websiteUrl}><button
                        className="flex items-center gap-2 h-10 px-6 font-semibold rounded-md bg-black text-white mt-2 hover:bg-white hover:text-black outline"
                    >
                        <span className="text-xs">
                            Website
                        </span>
                    </button></Link>
                    <Link href={projectUrl}><button
                        className="flex items-center gap-2 h-10 px-6 font-semibold rounded-md bg-black text-white mt-2 hover:bg-white hover:text-black outline"
                    >
                        <span className="text-xs">
                            Details
                        </span>
                    </button></Link>
                </div> : <p>{status}</p>}
            </section>
        </div>
    )
}

export default ProjectItem