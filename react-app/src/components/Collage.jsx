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
                {photos.map((photo) => (
                    <div>
                        <Photo path={photo} />
                    </div>
                ))}
            </div> 
            </div>
            
        );
}