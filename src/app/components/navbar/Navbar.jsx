'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '../../../../public/logo.png'
import {FaBars, FaShoppingCart} from 'react-icons/fa'
import {BsFillBagFill} from 'react-icons/bs'
import {ImSearch} from 'react-icons/im'




const Navbar = () => {
  return (
    <nav className='h-[150px] w-full flex md:flex-col justify-center  md:justify-between  bg-[#ff6700] py-3 px-[100px] md:h-[150px] '>
        <div className='md:flex items-center justify-center md:justify-between'>
            <div className='flex'>
                <ul className='flex items-center md:gap-4'>
                    <li>
                        <Link href="/" ><Image src={Logo} width={50} height={50} /></Link>
                    </li>
                    <li>
                         <Link href="/" >Sell Center</Link>
                    </li>
                    <li>
                         <Link href="/" >Download</Link>
                    </li>
                    <li>
                         <span>Follow us on</span>
                    </li>
                </ul>
            </div>
            <div className='flex '>
                 <ul className='flex items-center md:gap-4'>
                    <li>
                        <Link href="/" >Support</Link>
                    </li>
                    <li>
                         <Link href="/" >Register</Link>
                    </li>
                    <li>
                         <Link href="/" >Login</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='md:flex md:justify-between'>
            <div className='flex gap-2 items-center'>
                < FaBars  className='w-[25px] h-[25px]'/>
               < BsFillBagFill className='text-[#fff] w-[28px] h-[28px]' />
               <span className='text-[#fff] font-bold text-xl'>SnapUp.</span>
            </div>
            <div className='' >
                <div className='items-center flex bg-[#fff] w-[70px] md:w-[810px] h-[40px] p-2 rounded-[5px] '>
                    <input type="text" placeholder='Search your prefered product here...' className='w-[70px] md:w-[800px] h-[40px] border-none outline-none text-[#111]' />
                    <Link href='' className='w-[60px] h-[30px] bg-[#ff6700]  rounded-[2px] flex items-center justify-center'>
                        <ImSearch className='text-[#fff]' />
                    </Link>
                </div>
                <div className='pt-2'>
                    <ul className='flex items-center md:gap-4'>
                            <li>
                                <Link href="/" >Smartphones</Link>
                            </li>
                            <li>
                                <Link href="/" >Laptops</Link>
                            </li>
                            <li>
                                <Link href="/" >Skincare</Link>
                            </li>
                            <li>
                                <Link href="/" >Groceries</Link>
                            </li>
                            <li>
                                <Link href="/" >Home Decoration</Link>
                            </li>
                            <li>
                                <Link href="/" >Furniture</Link>
                            </li>
                            <li>
                                <Link href="/" >Tops</Link>
                            </li>
                        </ul>
                </div>
            </div>
            <div className='flex items-center p-2'>
                <FaShoppingCart className='text-[#fff] w-[30px] h-[30px]' />
            </div>

        </div>
    </nav>
  )
}

export default Navbar