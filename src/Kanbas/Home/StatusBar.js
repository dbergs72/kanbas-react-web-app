import "../styles.css"

function StatusBar() {
    const sideBarButtons = [
        "Import Existing Content",
        "Import from Commons",
        "Choose Home Page",
        "View Course Stream",
        "New Announcement",
        "New Analytics",
        "View Course Notifications"
    ]
    return (
        <div>
            <div className={"d-flex flex-column"}>
                {sideBarButtons.map((button, index) => (
                    <button key={index} className="btn btn-light">{button}</button>
                ))}
            </div>
            <h6 className={"pt-4"}>ToDo</h6>
            <hr className={"mt-0"}/>
            <p className={"wd-color-kanbas-red"}>
                <div>Grades A1 - ENV + HTML</div>
                <div>Grades A2 - CSS + Bootstrap</div>
            </p>
        </div>
    );
};

export default StatusBar;