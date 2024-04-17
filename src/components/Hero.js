import Add from '@/icons/Add';
import Download from '@/icons/Download';
import Lightning from '@/icons/Lightning';

const Hero = () => {

    return (
        <div className='container'>
            <div className="row d-flex flex-row py-5 justify-content-between">
                <div className="col-sm-12 col-md-5">
                    <h1 className="fw-bold font-xl mr-5" >Avaya Call Reporting Reinvented</h1>
                    <p>Step into the future of call center analytics with Comstice Avaya Call Reporting solution. Say goodbye to the need for an Avaya AES server and extra licenses for every agent, and say hello to a world of insightful analytics, cradle-to-grave reports, and automated agent and team reports by email.</p>
                    <button className="btn btn-primary">Request Demo</button>
                </div>
                <div className='col-sm-12 col-md-5 mt-2'>
                    <img src="https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg" style={{ width: '100%', height: '100%' }} />
                </div>
            </div>

            <div className="row my-5">
                <div className="col mr-2">
                    <div className='d-flex flex-row'>
                        <div className='mx-3'>
                            <div style={{ borderRadius: "50%" }}>
                                <Download />
                            </div>
                        </div>
                        <div>
                            <h4>Lower Cost of Ownership</h4>
                            <p>No Avaya AES TSAPI license costs with CMS-Based Reporting and real-time feed.</p>
                        </div>
                    </div>
                </div>

                <div className="col mr-2">
                    <div className='d-flex flex-row'>
                        <div className='mx-3'>
                            <div style={{ borderRadius: "50%" }}>
                                <Add />
                            </div>
                        </div>
                        <div>
                            <h4>Higher Agent Occupancy</h4>
                            <p>Real-time and historical agent scorecards to improve agent occupancy.</p>
                        </div>
                    </div>
                </div>

                <div className="col mr-2">
                    <div className='d-flex flex-row'>
                        <div className='mx-3'>
                            <div style={{ borderRadius: "50%" }}>
                                <Lightning />
                            </div>
                        </div>
                        <div>
                            <h4>First Contact Resolution</h4>
                            <p>MImInize rebeat callers. handle more customers, convert more business.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Hero;