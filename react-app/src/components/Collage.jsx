import Photo from "./Photo";

export default function Collage({ name ,photoCollection }) {

    let photos = [];
    
        for (const photo in photoCollection) {
            photos.push(photo);
        }
    
        return (
            <div>
                <h2>{name}</h2>
               <div className="collage">
                {photos.map((photo, i) => (
                    <div key={i}>
                        <Photo 
                            photo={photo}
                            photos={photos}
                        />
                    </div>
                ))}
            </div> 
            </div>
            
        );
}