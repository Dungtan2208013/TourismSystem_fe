import React from 'react';

const Booking = () => {
    return (
        <>
            <section className="breadcrumb breadcrumb_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner">
                                <div className="breadcrumb_iner_item text-center">
                                    <h2>Top Places</h2>
                                    <p>home . Top Places</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="top_place section_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section_tittle text-center">
                                <h2>Top Places to visit</h2>
                                <p>Waters make fish every without firmament saw had. Morning air subdue. Our. Air very one. Whales grass is fish whales winged.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {[...Array(8)].map((_, index) => (
                            <div className="col-lg-6 col-md-6" key={index}>
                                <div className="single_place">
                                    <img src={`img/single_place_${(index % 4) + 1}.png`} alt="" />
                                    <div className="hover_Text d-flex align-items-end justify-content-between">
                                        <div className="hover_text_iner">
                                            <a href="#" className="place_btn">travel</a>
                                            <h3>Saintmartine Iceland</h3>
                                            <p>Technaf, Bangladesh</p>
                                            <div className="place_review">
                                                {[...Array(5)].map((_, starIndex) => (
                                                    <a href="#" key={starIndex}>
                                                        <i className="fas fa-star"></i>
                                                    </a>
                                                ))}
                                                <span>(210 review)</span>
                                            </div>
                                        </div>
                                        <div className="details_icon text-right">
                                            <i className="ti-share"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Booking;
