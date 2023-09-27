import Obrigado from "../assets/illustration-thank-you.svg"
import "../App.css"

function Checked({ rating, display }) {
    return (
        <div className={display}>
            <div className="bg-dark-blue p-7 rounded-3xl flex flex-col justify-around items-center gap-7 max-w-sm m-7">
                <img src={Obrigado}></img>
                <p className="text-orange-500 font-overpass text-sm bg-gray-700 pt-2 pb-1 px-3 rounded-full">You selected {rating} out of 5</p>
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="person">Thank you!</h1>
                    <p className="text-center text-gray-400">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                </div>
            </div>
        </div>
    )
}

export default Checked