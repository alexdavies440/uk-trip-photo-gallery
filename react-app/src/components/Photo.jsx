import { useState } from "react"

export default function Photo({ path }) {

    const [isClicked, setIsClicked] = useState(null);

    return (
        <div>
            <img src={path} alt="collage image" />
            {isClicked && <p className="caption">caption</p>}
        </div>
        
    )
}