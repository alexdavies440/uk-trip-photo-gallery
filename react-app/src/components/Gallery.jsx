import Photo from "./Photo";

export default function Gallery({ category }) {

    let allImages;

    category === 'wales' ? allImages = import.meta.glob('/src/assets/trip-photos/wales/*.jpeg', { eager: true}) : null
    category === 'central-bath' ? allImages = import.meta.glob('/src/assets/trip-photos/central-bath/*.jpeg', { eager: true}) : null
    category === 'roman-baths' ? allImages = import.meta.glob('/src/assets/trip-photos/roman-baths/*.jpeg', { eager: true}) : null
    category === 'london' ? allImages = import.meta.glob('/src/assets/trip-photos/london/*.jpeg', { eager: true}) : null
    category === 'all' ? allImages = import.meta.glob('/src/assets/trip-photos/*/*.jpeg', { eager: true}) : null

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