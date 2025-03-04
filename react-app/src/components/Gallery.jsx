import Photo from "./Photo";

export default function Gallery() {

    const allImages = import.meta.glob('/src/assets/trip-photos/*.jpeg');

    let images = [];

    for (const img in allImages) {
        images.push(img);
    }

    return (
        <div className="gallery">
            {images.map((image) => (
                <div>
                    <Photo path={image} />
                </div>
            ))}
        </div>
    );
}