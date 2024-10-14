import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="breadcrumb breadcrumb_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner">
                                <div className="breadcrumb_iner_item text-center">
                                    <h2>Contact</h2>
                                    <p>Home . Contact</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section">
                <div className="container">
                    <div className="d-none d-sm-block mb-5 pb-4">
                        <div id="map" style={{ height: '480px' }}></div>
                        <script>
                            {`
                            function initMap() {
                                var uluru = { lat: -25.363, lng: 131.044 };
                                var grayStyles = [
                                    {
                                        featureType: "all",
                                        stylers: [{ saturation: -90 }, { lightness: 50 }]
                                    },
                                    {
                                        elementType: 'labels.text.fill',
                                        stylers: [{ color: '#ccdee9' }]
                                    }
                                ];
                                var map = new google.maps.Map(document.getElementById('map'), {
                                    center: { lat: -31.197, lng: 150.744 },
                                    zoom: 9,
                                    styles: grayStyles,
                                    scrollwheel: false
                                });
                            }
                            `}
                        </script>
                        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h2 className="contact-title">Get in Touch</h2>
                        </div>
                        <div className="col-lg-8">
                            <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" noValidate>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder="Enter Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" name="name" id="name" type="text" placeholder="Enter your name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" name="email" id="email" type="email" placeholder="Enter email address" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input className="form-control" name="subject" id="subject" type="text" placeholder="Enter Subject" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <button type="submit" className="button button-contactForm btn_1">Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-home"></i></span>
                                <div className="media-body">
                                    <h3>Buttonwood, California.</h3>
                                    <p>Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                                <div className="media-body">
                                    <h3>00 (440) 9865 562</h3>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-email"></i></span>
                                <div className="media-body">
                                    <h3>support@colorlib.com</h3>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
