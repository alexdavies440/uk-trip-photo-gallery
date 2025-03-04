import { useState } from "react";

export default function Photo({ path }) {

    const [isClicked, setIsClicked] = useState(false);

    return (
        <div>
            {isClicked ||
                <div onClick={() => setIsClicked(true)}>
                    <img src={path} alt="collage photo" />
                </div>
            }
            {isClicked &&
                <div className="photo-focus">
                    <button className="close-button" onClick={() => setIsClicked(false)}>X</button>
                    <img src={path} alt="collage photo" />
                    <p>Caption could go here</p>
                </div>
            }
        </div>
    );
}