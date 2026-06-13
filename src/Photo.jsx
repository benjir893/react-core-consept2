import './style.css'
const Photo =({singlephoto})=>{
    const{id, title, url, thumbnailUrl} = singlephoto;
    return(
        <div className='tablestyle'>
            <h2>Title : {title}</h2>
            <img
                src={thumbnailUrl}
                alt='title' 
            />
            <h3>id: {id}</h3>
            {/* here using table also fine. */}
            {/* <table className='tablestyle'>
                <tr>
                    <td className='tablestyle'><h2>Title: {title}</h2></td>
                </tr>
                <tr>
                    <td><img className='tablestyle' src={url} alt={id}/></td>
                </tr>
                <tr>
                    <td><img className='tablestyle' src={thumbnailUrl} alt={id}/></td>
                </tr>
            </table> */}
        </div>
    )
}
export default Photo