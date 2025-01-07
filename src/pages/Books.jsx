import { useState } from "react";


function Books() {
    const [books, setBooks] = useState (["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Beauty and the Beast", "Misery"]);

    const esimeneTaht = () => {
        const vastus = books.toSorted((a,b) => a.localeCompare(b))
        setBooks(vastus)
    }

    const viimaneTaht = () => {
        const vastus = books.toSorted ((a,b) => b.localeCompare(a))
        setBooks(vastus)
    }

    const sonaPikkus = () => {
        const vastus = books.toSorted((a,b) => a.length - b.length)
        setBooks(vastus)
    }

    const teineTaht = () => {
        const vastus = books.toSorted ((a, b) => a[1].localeCompare(b[1]))
        setBooks(vastus)
    }

    const sonadeArv = () => {
        const vastus = [...books].sort((a, b) => {
            const wordCountA = a.split(' ').length; // Arvuta sõnade arv raamatu A kirjelduse järgi
            const wordCountB = b.split(' ').length; // Arvuta sõnade arv raamatu B kirjelduse järgi
            return wordCountA - wordCountB; // Kasvav järjekord
        });
        setBooks(vastus);
    }

   // const sonadeArv = () => {
       // const vastus = [...books].sort((a, b) => {a.split(' ').length-b.split(' ').length
       // setBooks(vastus);
    ///---> lihtsustatud versioon


    const eelviimaneTaht = () => {
        const vastus = [...books].sort((a, b) => {
            // Eelviimase tähe leidmine igast raamatu pealkirjast
            const penultimateA = a.length > 1 ? a[a.length - 2] : ""; // Kui raamatul on vähemalt 2 tähemärki, siis eelviimane täht
            const penultimateB = b.length > 1 ? b[b.length - 2] : ""; // Sama B jaoks
            
            // Võrdle eelviimaseid tähti
            return penultimateA.localeCompare(penultimateB);
        });
        setBooks(vastus);
    }

    //const sorteeriEelviimaneT2ht = () => {
       // const vastus = books.toSorted((a, b) => a[a.length - 2].localeCompare(b[b.length - 2]));
       // setBooks(vastus);
     // }  --> Teine lahendus

    const thegaAlgavad = () => {
        const vastus = books.filter(book => book.startsWith("The"))
        setBooks(vastus)
    }

    const andga = () => {
        const vastus = books.filter (book => book.includes("and"))
        setBooks(vastus)
    }

    const kummeTahemarki = () => {
        const vastus = books.filter(book => book.replace(/\s+/g, '').length > 10);
        setBooks(vastus)
    }

    // (/\s+/g, '') eemaldab kõik tühikud

    const vahemKuiSeitse = () => {
        const vastus = books.filter(book => book.replace(/\s+/g, '').length < 7)
        setBooks(vastus)
    }

    const kolmeSonalised = () => {
        const vastus= books.filter (book => book.split(' ').length >= 3 )
        setBooks(vastus)
    }

    const cEelviimane = () => {
        const vastus = books.filter (book=> book[book.length-2]?.toUpperCase()=== "C")
        setBooks(vastus)
    }

    // miks jutumärkides on suur "C" täht?
    
    const taastaAlgne = () => {
        setBooks(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Beauty and the Beast", "Misery"])
    }




  return (
    <div>
        <br />
        <button onClick={esimeneTaht}>Sorteeri esimese tähe järgi</button>
        <button onClick={viimaneTaht}>Sorteeri viimase tähe järgi</button>
        <button onClick={sonaPikkus}>Sorteeri sõnapikkuse järgi</button>
        <button onClick={teineTaht}>Sorteeri teise tähe järgi</button>
        <button onClick={sonadeArv}>Sorteeri sõnade arvu järgi</button>
        <button onClick={eelviimaneTaht}>Sorteeri eelviimase tähe järgi</button>
        <br /><br />
        <button onClick={thegaAlgavad}>Filtreeri &quot;the&quot;-ga algavad </button>
        <button onClick={andga}>Filteeri &quot;and&quot;-ga pealkirjad </button>
        <button onClick={kummeTahemarki}>Filtreeri vähemalt 10-tähemärgilised pealkirjad</button>
        <button onClick={vahemKuiSeitse}>Filtreeri väiksemad kui 7-tähemärgilised pealkirjad</button>
        <button onClick={kolmeSonalised}>Filtreeri kolmesõnalised pealkirjad</button>
        <button onClick={cEelviimane}>Filtreeri need, mille eelviimane täht on &quot;c&quot; </button>
        <br /> <br />
        <button onClick={taastaAlgne}>Taasta algne nimekiri</button>
        {books.map(book =><div key={book}>{book}</div>)}
    </div>
  )
}

export default Books