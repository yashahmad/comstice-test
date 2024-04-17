import Add from "@/icons/Add";
import Download from "@/icons/Download";
import Lightning from "@/icons/Lightning";

const SubAbout = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col col-sm-4 mr-2">
                    <div className='d-flex flex-row'>
                        <div className='mx-3'>
                            <div style={{ borderRadius: "50%" }}>
                                <Download />
                            </div>
                        </div>
                        <div>
                            <h4>Download Data Sheet</h4>
                            <p>Click here to download data sheet.</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4 col mr-2">
                    <div className='d-flex flex-row'>
                        <div className='mx-3'>
                            <div style={{ borderRadius: "50%" }}>
                                <Add />
                            </div>
                        </div>
                        <div>
                            <h4>Access Sample Reports</h4>
                            <p>View sample reports and scorecards.</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4 col mr-2">
                    <div className='d-flex flex-row'>
                        <div className='mx-3'>
                            <div style={{ borderRadius: "50%" }}>
                                <Lightning />
                            </div>
                        </div>
                        <div>
                            <h4>High-Level Design Guide</h4>
                            <p>Solution topology, integrations and project plan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubAbout;