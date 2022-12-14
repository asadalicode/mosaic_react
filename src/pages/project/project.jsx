import ProjectAnalytics from "../../partials/project/projectAnalytics";
import ProjectTable from "../../partials/project/projectTables";

const Project = () => {
    return (
        <>
            <ProjectAnalytics />
            <div className="mt-3">
                <ProjectTable />
            </div>
        </>
    )
}
export default Project;