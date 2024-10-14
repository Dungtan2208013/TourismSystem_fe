import React from "react";

const Packages = () => {
    return (
        <div>
            <section className="breadcrumb breadcrumb_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner">
                                <div className="breadcrumb_iner_item text-center">
                                    <h2>Packages</h2>
                                    <p>home . Packages</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hotel_list section_padding single_page_hotel_list">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section_tittle text-center">
                                <h2>Top Hotel &amp; Restaurants</h2>
                                <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {[1, 2, 3].map((item, index) => (
                            <div className="col-lg-4 col-sm-6" key={index}>
                                <div className="single_ihotel_list">
                                    <img src={`img/ind/industries_${item}.png`} alt={`Hotel ${item}`} />
                                    <div className="hover_text">
                                        <div className="hotel_social_icon">
                                            <ul>
                                                <li><a href="#"><i className="ti-facebook"></i></a></li>
                                                <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                                <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="share_icon">
                                            <i className="ti-share"></i>
                                        </div>
                                    </div>
                                    <div className="hotel_text_iner">
                                        <h3><a href="#">Hotel Polonia</a></h3>
                                        <div className="place_review">
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <span>(210 reviews)</span>
                                        </div>
                                        <p>London, United Kingdom</p>
                                        <p>Date: 23 Aug 2019</p>
                                        <p>Duration: 5 days</p>
                                        <h5>From <span>$500</span></h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="event_part section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="event_slider owl-carousel">
                                {[1, 2, 3].map((item, index) => (
                                    <div className="single_event_slider" key={index}>
                                        <div className="row justify-content-end">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="event_slider_content">
                                                    <h5>Upcoming Event</h5>
                                                    <h2>Maldeve - Asia</h2>
                                                    <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged.</p>
                                                    <p>date: <span>12 Aug 2019</span></p>
                                                    <p>Cost: <span>Start from $820</span></p>
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
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                        {[1, 2, 3, 4].map((item, index) => (
                            <div className="col-lg-3 col-sm-6" key={index}>
                                <div className="single_ihotel_list">
                                    <img src={`img/services_${item}.png`} alt={`Service ${item}`} />
                                    <h3><a href="#">Service {item}</a></h3>
                                    <p>Description of service {item}.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Packages;
