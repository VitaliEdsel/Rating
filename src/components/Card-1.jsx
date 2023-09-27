import Estrela from '../assets/icon-star.svg'
import { useState } from 'react';

function Card() {

    var rating = null

    var [bsem1, setbsem1 ]= useState('bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white')
    var [bsem2, setbsem2] = useState('bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white')
    var [bsem3, setbsem3] = useState('bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white')
    var [bsem4, setbsem4] = useState('bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white')
    var [bsem5, setbsem5] = useState('bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white')

    function mudcor1() {
        if (bsem1 === 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white') {
            setbsem1 (
                bsem1 = 'bg-gray-400 text-white w-12 h-12 rounded-full'
            )

            setbsem2 (
                bsem2 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            setbsem3 (
                bsem3 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            setbsem4 (
                bsem4 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            setbsem5 (
                bsem5 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            rating = 1
            console.log(rating)
        }

        else if (bsem1 === 'bg-gray-400 text-white w-12 h-12 rounded-full') {
            setbsem1 (
                bsem1 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            rating = null
            console.log(rating)
        }
    }

    function mudcor2 () {
        if (bsem2 === 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white') {
            setbsem2 (
                bsem2 = 'bg-gray-400 text-white w-12 h-12 rounded-full'
            )

            setbsem1 (
                bsem2 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            setbsem3 (
                bsem3 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            setbsem4 (
                bsem4 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            setbsem5 (
                bsem5 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            rating = 2
            console.log(rating)
        }

        else if (bsem2 === 'bg-gray-400 text-white w-12 h-12 rounded-full') {
            setbsem2 (
                bsem2 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            rating = null
            console.log(rating)
        }
    }

    function mudcor3 () {
        if (bsem3 === 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white') {
            setbsem3 (
                bsem3 = 'bg-gray-400 text-white w-12 h-12 rounded-full'
            )

            setbsem2 (
                bsem2 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            setbsem1 (
                bsem1 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            setbsem4 (
                bsem4 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            setbsem5 (
                bsem5 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            rating = 3
            console.log(rating)
        }

        else if (bsem3 === 'bg-gray-400 text-white w-12 h-12 rounded-full') {
            setbsem3 (
                bsem3 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            rating = null
            console.log(rating)
        }

    }

    function mudcor4 () {
        if (bsem4 === 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white') {
            setbsem4 (
                bsem4 = 'bg-gray-400 text-white w-12 h-12 rounded-full'
            )

            setbsem2 (
                bsem2 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            setbsem3 (
                bsem3 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            setbsem1 (
                bsem1 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            setbsem5 (
                bsem5 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            rating = 4
            console.log(rating)
        }

        else if (bsem4 === 'bg-gray-400 text-white w-12 h-12 rounded-full') {
            setbsem4 (
                bsem4 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            rating = null
            console.log(rating)
        }
    }

    function mudcor5 () {
        if (bsem5 === 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white') {
            setbsem5 (
                bsem5 = 'bg-gray-400 text-white w-12 h-12 rounded-full'
            )

            setbsem2 (
                bsem2 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            setbsem3 (
                bsem3 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            setbsem4 (
                bsem4 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            setbsem1 (
                bsem1 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            rating = 5
            console.log(rating)
        }

        else if (bsem5 === 'bg-gray-400 text-white w-12 h-12 rounded-full') {
            setbsem5 (
                bsem5 = 'bg-gray-700 text-gray-400 w-12 h-12 rounded-full hover:bg-orange hover:text-white'
            )

            rating = null
            console.log(rating)
        }
    }


    return (
        <div className='bg-dark-blue p-7 rounded-3xl flex flex-col justify-around gap-7 max-w-sm m-7'>
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
                <li><button className={bsem2} onClick={mudcor2}>2</button></li>
                <li><button className={bsem3} onClick={mudcor3}>3</button></li>
                <li><button className={bsem4} onClick={mudcor4}>4</button></li>
                <li><button className={bsem5} onClick={mudcor5}>5</button></li>
            </ul>
            <button className='bg-orange text-white w-full h-11 font-overpass rounded-full hover:bg-white hover:text-orange-600'>SUBMIT</button>
        </div>
    )
}

export default Card