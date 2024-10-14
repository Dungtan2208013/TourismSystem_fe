import React from 'react';

const TourDetails = () => {
    return (
        <>
            <section className="event_part section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="event_slider owl-carousel">
                                <div className="single_event_slider">
                                    <div className="row justify-content-end">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="event_slider_content">
                                                <h5>Upcoming Event</h5>
                                                <h2>Maldives - Asia</h2>
                                                <p>Waters make fish every without firmament saw had. Morning air subdue. Our air is very one. Whales grass is fish whales winged.</p>
                                                <p>Date: <span>12 Aug 2019</span></p>
                                                <p>Cost: <span>Starts from $820</span></p>
                                                <p>Organizer: <span>Martine Agency</span></p>
                                                <div className="rating">
                                                    <span>Rating:</span>
                                                    <div className="place_review">
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                    </div>
                                                </div>
                                                <a href="#" className="btn_1">Plan Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Duplicate the event slider for more events */}
                                <div className="single_event_slider">
                                    <div className="row justify-content-end">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="event_slider_content">
                                                <h5>Upcoming Event</h5>
                                                <h2>Maldives - Asia</h2>
                                                <p>Waters make fish every without firmament saw had. Morning air subdue. Our air is very one. Whales grass is fish whales winged.</p>
                                                <p>Date: <span>12 Aug 2019</span></p>
                                                <p>Cost: <span>Starts from $820</span></p>
                                                <p>Organizer: <span>Martine Agency</span></p>
                                                <div className="rating">
                                                    <span>Rating:</span>
                                                    <div className="place_review">
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                        <a href="#"><i className="fas fa-star"></i></a>
                                                    </div>
                                                </div>
                                                <a href="#" className="btn_1">Plan Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Add more event sliders as needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tour_details_content section_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="content_inner">
                                <p>Waters make fish every without firmament saw had. Morning air subdue. Our air is very one. Whales grass is fish whales winged night yielding land creeping that seed appear were bearing.</p>
                                <p>Waters make fish every without firmament saw had. Morning air subdue. Our air is very one. Whales grass is fish whales winged night yielding land creeping that seed appear were bearing.</p>
                                <p>Waters make fish every without firmament saw had. Morning air subdue. Our air is very one. Whales grass is fish whales winged night yielding land creeping that seed appear were bearing.</p>
                                <div className="tour_details_content_btn">
                                    <a href="#" className="btn_1">Book Ticket</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TourDetails;
