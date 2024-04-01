import React from 'react'

export default function Login() {
  return (
    <div className='w-full flex justify-center items-center flex-col pt-[100px]'>
        <h2 className='text-black font-bold mb-[20px]'>Login as admin</h2>
        <form className='bg-[#6D6875] w-[400px] flex flex-col items-center h-[220px] justify-center rounded-lg relative'>
            <label className='text-white mb-1'>Username</label>
            <input type="text" className='rounded-md w-[80%] h-[30px] mb-3' />
            <label className='text-white mb-1' htmlFor="">Password</label>
            <input type="text" className='rounded-md w-[80%] h-[30px]' />
            <button type='submit' className='absolute bg-[#6D6875] text-white w-[100px] h-[37px] bottom-[-70px] rounded-md'>Login</button>
        </form>
    </div>
  )
}
