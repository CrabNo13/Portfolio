import { useState } from "react";
import InteractionBox from "./InteractionBox";
import { ProjectItems } from "../elements/ProjectItems";
import { Projects } from "../elements/Projects";

function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState(null)

    return <div className="projectsSection">
        <Projects />
        <ProjectItems setSelectedProject={setSelectedProject} />
        {selectedProject && <InteractionBox selectedProject={selectedProject} setSelectedProject={setSelectedProject} />}
    </div>
}

export default ProjectsSection;