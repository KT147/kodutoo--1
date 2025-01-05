import { useState } from "react"


function Numbrid() {
    const startNumbers = [4, 23, 7, 39, 19, 0, 9, 14, 135, 248, 1234]
    const [numbers, setNumbers] = useState (startNumbers);

    const numberKasvavalt = () => {
        const vastus = numbers.toSorted((a,b)=> a - b)
        setNumbers(vastus)
    }

    const numberKahanevalt = () => {
        const vastus = numbers.toSorted((a,b) => b-a)
        setNumbers(vastus)
    }

    const esimeneTahestikus = () => {
        const vastus = numbers.toSorted((a,b) => {
            return a.toString().localeCompare(b.toString())
        });
        setNumbers(vastus)
    }

    const viimaneTahestikus = () => {
        const vastus = numbers.toSorted((a,b) =>{
            return b.toString().localeCompare(a.toString())
        })
        setNumbers(vastus)
    }

    const suuremadKuiKaheksa = () => {
        const vastus = numbers.filter(number => number > 8)
        setNumbers(vastus)
    }

    const vaiksemadKuiKumme = () => {
        const vastus = numbers.filter(number => number < 10)
        setNumbers(vastus)
    }

    const paarisArv = () => {
        const vastus = numbers.filter(number => number % 2 === 0 )
        setNumbers(vastus)
    }

    const paaritudArv = () => {
        const vastus = numbers.filter(number => number % 2 !== 0 )
        setNumbers(vastus)
    }

    const yhegaAlgavad = () => {
        const vastus = numbers.filter (number => number.toString().startsWith('1'))
        setNumbers(vastus)
    }

    // Miks tuleb number stringiks teisaldada, et numbreid omavahel võrrelda?

    const kolmeSisaldavad = () => {
        const vastus = numbers.filter (number => number.toString().includes("3"))
        setNumbers(vastus)
    }

    // selle tegin enda pea järgi

    const taastaAlgne = () => {
        setNumbers(startNumbers)
    }


  return (
    <div>
        <br /><br />
        <button onClick={numberKasvavalt}>Sorteeri numbri järgi kasvavalt</button>
        <button onClick={numberKahanevalt}>Sorteeri numbri järgi kahanevalt</button>
        <button onClick={esimeneTahestikus}>Sorteeri esimese numbri järgi </button>
        <button onClick={viimaneTahestikus}>Sorteeri viimase numberi järgi</button>
        <br /> <br />
        <button onClick={suuremadKuiKaheksa}>Filteeri suuremad numbrid kui 8</button>
        <button onClick={vaiksemadKuiKumme}>Filteeri väiksemad numbrid kui 10</button>
        <button onClick={paarisArv}>Filtreeri paarisarvud</button>
        <button onClick={paaritudArv}>Filtreeri paaritud arvud</button>
        <button onClick={yhegaAlgavad}>Filtreeri numbrid, mis algavad 1ga</button>
        <button onClick={kolmeSisaldavad}>Filtreeri 3 sisaldavad numbrid</button>
        <br /> <br />
        <button onClick={taastaAlgne}>Taasta algväärtus</button>
        {numbers.map(number =><div key={number}>{number}</div>)}
    </div>
  )
}

export default Numbrid