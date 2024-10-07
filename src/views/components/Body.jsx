import React from 'react';
import 'public/customer/fontawesome/css/all.min.css'; // Import FontAwesome CSS


const Body = () => {
    return (
        <section className="best_services section_padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="section_tittle text-center">
                            <h2>We offer the best services</h2>
                            <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_ihotel_list">
                            <img src="img/services_1.png" alt="" />
                            <h3><a href="#">Transportation</a></h3>
                            <p>All transportation cost we bear</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_ihotel_list">
                            <img src="img/services_2.png" alt="" />
                            <h3><a href="#">Guidance</a></h3>
                            <p>We offer the best guidance for you</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_ihotel_list">
                            <img src="img/services_3.png" alt="" />
                            <h3><a href="#">Accommodation</a></h3>
                            <p>Luxurious and comfortable</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_ihotel_list">
                            <img src="img/services_4.png" alt="" />
                            <h3><a href="#">Discover world</a></h3>
                            <p>Best tour plan for your next tour</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Body;
