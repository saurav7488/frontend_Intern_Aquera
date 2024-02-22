import '../Style/Outerplanet.css'
import { useEffect } from "react"
import { useState } from "react"
import PlannetCard from './PlannetCard'
const Outerplanet = () => {
    const [isdata, setIsdata] = useState([])
    const [nextpage, setNextpage] = useState('');
    const [prevpage, setPrevpage] = useState('');
    useEffect(() => {     
        fetchData('https://swapi.dev/api/planets/?format=json')
    }, [])
    const fetchData = async (URL) => {
        const response = await fetch(URL)
        const data = await response.json()
        // const response2 = await fetch(data.results.residents)
        // const data2 = await response2.json()
        setIsdata(data.results)
        console.log(data.results.residents)
        setNextpage(data.next)
        setPrevpage(data.previous)
    }
    // console.log(isdata)
    const handleprevPage=()=>{
          if(prevpage) {
               fetchData(prevpage)
          }
    }
    const handleNextPage=()=>{
         if(nextpage) {
             fetchData(nextpage)
         }
    }


    return (
        <div>
            <div className="outer-planet" >
                {isdata && isdata.map((val, i) => <PlannetCard key={i} val={val} />)}
            </div>
            <div className="pagination">
                <button onClick={handleprevPage} disabled={!prevpage}>
                    Previous Page
                </button>
                <button onClick={handleNextPage} disabled={!nextpage} >
                    Next Page
                </button>
            </div>
        </div>
    )
}

export default Outerplanet



