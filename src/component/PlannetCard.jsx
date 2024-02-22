import { useEffect, useState } from 'react';
import '../Style/PlannetCard.css'
const PlannetCard = (val) => {
    // console.log(val)
    const [residents, setResidents] = useState([]);
    console.log(residents)
    useEffect(() => {
        const fetchResidentsData = async () => {
            const residentsData = await Promise.all(
                val?.val?.residents.map(async (residentUrl) => { // Changed 'planet' to 'val'
                    const response = await fetch(residentUrl);
                    return response.json();
                })
            );
            setResidents(residentsData);
        };

        fetchResidentsData();
    }, [val.val.residents]); // Changed 'planet' to 'val'
    return (
        <div className="card-container" >
            <h3>Planet : </h3>
            <h4 className="card-title" >NAME : {val?.val?.name}</h4>
            <h4 className="card-title" >CLIMATE : {val?.val?.climate}</h4>
            <h4 className="card-title" >POPULATION : {val?.val?.population}</h4>
            <h4 className="card-title" >TERRAIN : {val?.val?.terrain}</h4>
            {residents.length>0 && <h3>Residents:</h3>}
            <ul>
                {residents.map((resident, index) => (
                     <div key={index} className='residents-div' >
                          <li >Name : {resident?.name}</li>
                          <li >Height : {resident?.height}</li>
                          <li >Mass : {resident?.mass}</li>
                          <li >Gender : {resident?.gender}</li>
                     </div>
                ))}
            </ul>
        </div>
    )
}

export default PlannetCard


