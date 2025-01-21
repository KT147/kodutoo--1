import { useState } from "react"



function Seaded() {

    const [kujundus, muudaKujundus] = useState(localStorage.getItem("veebilehe_kujundus"))

    const tumeLeht = () => {
        localStorage.setItem("veebilehe_kujundus", "dark_mode")
        muudaKujundus("dark_mode")
    }
    const heleLeht = () => {
        localStorage.setItem("veebilehe_kujundus", "light_mode")
        muudaKujundus("light_mode")
    }
    const roosaLeht = () => {
        localStorage.setItem("veebilehe_kujundus", "roosa_mode")
        muudaKujundus("roosa_mode")
    }


  return (
    <div>
       {kujundus === "dark_mode" && <div>Tume taust</div>}
       {kujundus === "light_mode" && <div>Hele taust</div>}
       {kujundus === "roosa_mode" && <div>Roosa taust</div>}
       <button onClick={tumeLeht}>Tume leht</button>
       <button onClick={heleLeht}>Hele leht</button>
       <button onClick={roosaLeht}>Roosa leht</button>
    </div>
  )
}

export default Seaded