import React from 'react'

const Conversation = () => {
  return (
    <>
        <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" alt="user avater" />
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex gap-2 justify-between'>
                    <p className='font-bold text-gray-200'>Jhon Dow</p>
                    <span className='text-xl'>😇</span>
                </div>
            </div>
        </div>
        <div className='divider h-1 my-0 py-0'/>
    </>
  )
}

export default Conversation