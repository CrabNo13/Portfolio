import { useEffect, useState } from "react";
import { ProjectsInformation } from "../elements/ProjectsInformation";

function InteractionBox({ selectedProject, setSelectedProject }) {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            const box = document.querySelector(".interactionBox");
            if (box && !box.contains(event.target)) {
                handleClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function handleClose() {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedProject(null);
        }, 300);
    }

    return <div className={`interactionBox ${isClosing ? "closing" : ""}`}>
        <h1>{ProjectsInformation[selectedProject].name}</h1>
        <p>{ProjectsInformation[selectedProject].description}</p>
    </div>
};

export default InteractionBox;