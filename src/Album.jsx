import { useEffect, useState } from "react"
import Photo from "./Photo";

const PhotoList =()=>{
    const [photos, setPhotos] = useState([]);
    useEffect(()=>{
        const loading =async()=>{
            const url = 'https://jsonplaceholder.typicode.com/photos';
            const data_fetch =await fetch(url);
            const data =await data_fetch.json();

            setPhotos(data.slice(0,10)); // only show first 10 data
        };

        loading()
    },[])
    return(
        <div>
            <h2>photos {photos.length}</h2>
            {photos.map((photo)=><Photo key={photo.id} singlephoto={photo}></Photo>)}
        </div>
    )
}
export default PhotoList