import React from 'react'
import Greetings from '../components/Greetings'
import QuizCategory from '../components/QuizCategory'

const Home = () => {
  return (
    <div className='font-poppins p-10 flex flex-col gap-6'>
      <Greetings/>
      <QuizCategory/>
    </div>
  )
}

export default Home
