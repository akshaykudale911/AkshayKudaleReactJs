import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsJournalText} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineContacts} from 'react-icons/ai'

const nav = () => {
  return (
    <nav>
      <a href='#home'><AiOutlineHome/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#experience'><BsJournalText/></a>
      <a href='#servicess'><RiServiceLine/></a>
      <a href='#contact'><AiOutlineContacts/></a>
    </nav>
  )
}

export default nav