import React from 'react'

export default function HeaderLayout({left,middle,right,bottom}:{left:React.ReactNode,middle:React.ReactNode,right:React.ReactNode,bottom:React.ReactNode,}) {
  return (
    <div className=''>
        <div className='flex '>
            <div className=' p-3'>{left}</div>
            <div className='flex-[6] self-center'>{middle}</div>
            <div className='flex-[2]  flex justify-center items-center'>
                {right}
            </div>
        </div>
        <div className='px-2 text-[14px] py-1 w-[100vw] '>
            {bottom}
        </div>
    </div>
  )
}
