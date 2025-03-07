import { useState } from "react";

export default function Photo({ photo, photos }) {

    const [isClicked, setIsClicked] = useState(false);
    const [path, setPath] = useState(photo);
    const [index, setIndex] = useState(photos.indexOf(photo));

    function handleNextPhoto() {

        if (index === photos.length - 1) {
            setIndex(0);
            setPath(photos[0]);
        } else {
            setIndex(index + 1);
            setPath(photos[index + 1]);
        }
    }

    function handlePreviousPhoto() {

        if (index === 0) {
            setIndex(photos.length - 1);
            setPath(photos[photos.length - 1]);
        }
        else {
            setIndex(i => i - 1);
            setPath(photos[index - 1]);
        }
    }

    return (
        <div>
            {isClicked ||
                <div onClick={() => setIsClicked(true)}>
                    <img src={photo} alt="collage photo" />
                </div>
            }
            {isClicked &&
                <div className="photo-focus">
                    <button className="close-button" onClick={() => setIsClicked(false)}>ｘ</button>
                    <img src={path} alt="collage photo" />
                    <button className="photo-navigation-button next" onClick={handleNextPhoto}>→</button>
                    <button className="photo-navigation-button previous" onClick={handlePreviousPhoto}>←</button>
                </div>
            }
        </div>
    );
}