import Estrela from '../assets/icon-star.svg'
import { useState } from 'react';

function Card() {

    var [bsem1, setbsem1 ]= useState('bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white')
    var bsem2 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
    var bsem3 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
    var bsem4 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
    var bsem5 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'

    function mudcor1() {
        if (bsem1 === 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white') {
            setbsem1 (
                bsem1 = 'bg-gray-400 text-white w-12 h-12 rounded-full'
            )
        }

        else if (bsem1 === 'bg-gray-400 text-white w-12 h-12 rounded-full') {
            setbsem1 (
                bsem1 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )
        }
    }

    return (
        <div className='bg-dark-blue p-7 rounded-3xl flex flex-col justify-around gap-7 max-w-md'>
            <span className='block bg-gray-700 p-3 rounded-full w-10'>
                <img src={Estrela} className='h-4'></img>
            </span>
            <div className='flex flex-col justify-center gap3'>
                <h1 className='font-overpass text-3xl text-white '>How did we do?</h1>
                <p className='text-gray-400'> Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!</p>
            </div>
            <ul className='flex justify-around'>
                <li><button className={bsem1} onClick={mudcor1}>1</button></li>
                <li><button className={bsem2}>2</button></li>
                <li><button className={bsem3}>3</button></li>
                <li><button className={bsem4}>4</button></li>
                <li><button className={bsem5}>5</button></li>
            </ul>
        </div>
    )
}

export default Card