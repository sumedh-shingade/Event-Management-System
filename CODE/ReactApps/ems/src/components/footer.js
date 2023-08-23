import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom';

export default function FooterComponent() {
  const location = useLocation();
  const allowedRoutes = ['/', '/aboutus', '/services'];

  // Check if the current route is in the allowedRoutes array
  const shouldRenderFooter = allowedRoutes.includes(location.pathname);

  if (!shouldRenderFooter) {
    return null; // Do not render the footer for other routes
  }
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-white' style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '20px' }}>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-3'> {/* Reduced the top margin */}
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="home" className="me-3" style={{ color: 'white' }} />
                4S Events
              </h6>
              <p>
                Provide innovative event solutions that exceed expectations
                Inspire creativity and leave a lasting impact
                Deliver flawless events, whether it's a corporate conference, a grand wedding, or a community celebration
                Utilize a dedicated team and a passion for perfection
                Turn your ideas into unforgettable experiences that bring people together
                Create memories to cherish
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/home' className='text-reset'>
                  <MDBIcon icon="home" /> Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Services
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                IET, Shivajinagar, Pune, Maharashtra
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                IET@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 9689483207
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91 9370530085
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/' style={{ color: 'white' }}>
          4S Events
        </a>
      </div>
    </MDBFooter>
  );
}
