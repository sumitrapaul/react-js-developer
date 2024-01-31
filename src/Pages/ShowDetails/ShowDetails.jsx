import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ShowDetails = () => {
    const { id } = useParams()
    const [showDetails, setShowDetails] = useState(null)
   
    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setShowDetails(data)
          });
      }, [id]);
    return (
        <div>
           
           {showDetails ? (
            <>
            <p>{showDetails?.name}</p>
            </>
           ) : (
            <p>Loading...</p>
           )}
        </div>
    );
};

export default ShowDetails;