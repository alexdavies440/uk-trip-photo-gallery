import Photo from "./Photo";

export default function Gallery({ category }) {

    const allImages = import.meta.glob('/src/assets/trip-photos/' + category + '/*.jpeg', { eager: true});

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