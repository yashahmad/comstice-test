import Add from '@/icons/Add';
import CircleCheck from '@/icons/CircleCheck';
import Download from '@/icons/Download';
import Lightning from '@/icons/Lightning';

const About = () => {

    return (
        <div className="py-5" style={{ backgroundColor: '#efefef' }}>
            <div className='container'>
                <div className="mt-3 row d-flex flex-row my-5 justify-content-between">
                    <div className='col-sm-12 col-md-5 mt-2'>
                        <img src="https://www.smartdraw.com/chart/img/clustered-bar-chart.png" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="col-sm-12 col-md-5">
                        <h1 className="fw-bold font-xl mr-5" >Measure, Analyze improve</h1>
                        <p>Visualise your historical performance to understand customer behavior, customer patience and the demand for customer service using out of the box analvtics features and performance indicators.</p>

                        <div className='d-flex justify-space-between mt-3'>
                            <div style={{ width: '24px' }} className='mx-2'>
                                <CircleCheck />
                            </div>
                            <div>
                                <h4>No Avava AES Server Needed</h4>
                                <p>Avava CMS data is used for all the reports and charts. No TSAPI licenses or AES Server needed.</p>
                            </div>
                        </div>

                        <div className='d-flex justify-space-between mt-3'>
                            <div style={{ width: '24px' }} className='mx-2'>
                                <CircleCheck />
                            </div>
                            <div>
                                <h4>Scheduled Reports By E-Mail</h4>
                                <p>Daily insights by email for team agents and the queues based on goals and thresholds</p>
                            </div>
                        </div>

                        <div className='d-flex justify-space-between mt-3'>
                            <div style={{ width: '24px' }} className='mx-2'>
                                <CircleCheck />
                            </div>
                            <div>
                                <h4>Avava ECH Cradle to Grave Reports</h4>
                                <p>Create cradle to grave reports and visual customer journey for each call using Avava CMS External Call Historv data.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default About;