import Photo from "./Photo";

export default function Collage({ name ,photoCollection }) {

    let photoArray = [];
    
        for (const photo in photoCollection) {
            photoArray.push(photo);
        }
    
        return (
            <div>
                <h2>{name}</h2>
               <div className="collage">
                {photoArray.map((photo, i) => (
                    <div key={i}>
                        <Photo 
                            photo={photo}
                            photoArray={photoArray}
                        />
                    </div>
                ))}
            </div> 
            </div>
            
        );
}