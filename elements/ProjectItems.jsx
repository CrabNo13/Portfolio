export function ProjectItems({ setSelectedProject }) {
    function handleProjectClick() {
        setSelectedProject(1)
    }

    return (
        <div>
            <button className="projectItem" onClick={handleProjectClick}>
                <h2 style={{ color: 'whitesmoke' }}>Vivimus Pecunia</h2>
            </button>
        </div>
    )
}