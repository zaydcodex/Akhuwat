import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../context/appContext';

const Crousal = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [uploading, setUploading] = useState(false); // New loading state

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { handleFileUpdate, userData, setUserData, createUser } = useContext(AppContext);

  // Wrapper for file change to handle loading
  const onFileChange = async (e) => {
    setUploading(true);
    try {
      // Assuming handleFileUpdate returns a promise, await it
      await handleFileUpdate(e);
    } catch (err) {
      console.error("File upload error:", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className="container-fluid py-5 d-flex justify-content-center align-items-center flex-wrap mainCarousal"
      style={{
        height: '800px',
        backgroundImage:
          'url("https://media.licdn.com/dms/image/v2/D4D22AQGW6D-qnRLyLw/feedshare-shrink_800/B4DZPGYFg0G0Ao-/0/1734200024273?e=2147483647&v=beta&t=M7zwQPLEUJL2-1JF96KiK8hEtq0ERRJa7rG1XzXdJdI")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />

      {/* Content row */}
      <div className="row w-100 position-relative" style={{ zIndex: 2 }}>
        <div className={`col-md-6 ${isMobile ? 'col-12 mb-4' : ''} d-flex align-items-center`}>
          <h1
            data-aos="fade-right"
            data-aos-duration="1500"
            className={`${isMobile ? 'fw-bold fs-3' : 'display-5 fw-bold px-5'}`}
            style={{ color: 'white' }}
          >
            Experts say that the Akhuwat Loan Program is one of the best places in Pakistan to get a loan.
          </h1>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              padding: '30px',
              borderRadius: '10px',
              border: '3px dotted #666',
              width: '100%',
              maxWidth: '400px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}
          >
            <h4
              style={{
                color: '#666',
                textAlign: 'center',
                marginBottom: '25px',
                fontWeight: 'bold',
              }}
            >
              Quick Loan Apply
            </h4>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                createUser();
              }}
            >
              <div className="mb-3">
                <input
                  value={userData.firstName}
                  onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="Enter Your First Name"
                />
              </div>
              <div className="mb-3">
                <input
                  value={userData.lastName}
                  onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Your Name"
                />
              </div>

              <div className="mb-3">
                <input
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="mb-3">
                <input
                  value={userData.phoneNumber}
                  onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
                  type="tel"
                  className="form-control"
                  placeholder="Phone No"
                />
              </div>
              <div className="mb-3">
                <input
                  value={userData.cnic}
                  onChange={(e) => setUserData({ ...userData, cnic: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="CNIC No"
                />
              </div>
              <div className="mb-3">
                <input
                  value={userData.address}
                  onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="Address"
                />
              </div>
              <div className="mb-3">
                <input
                  value={userData.loanAmount}
                  onChange={(e) => setUserData({ ...userData, loanAmount: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="Loan Amount"
                />
              </div>

              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  onChange={onFileChange}
                  disabled={uploading}
                />
                <label className="input-group-text" htmlFor="inputGroupFile01">
                  Upload
                </label>
              </div>

              {uploading && (
                <div className="mb-3 text-center">
                  <div className="spinner-border text-primary" role="status" />
                  <span className="ms-2">Uploading image...</span>
                </div>
              )}

              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: '#ff4444',
                  color: 'white',
                  border: 'none',
                  padding: '12px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  borderRadius: '5px',
                }}
                disabled={uploading}
              >
                Send
              </button>
              <p>If you have submitted your loan request, then check your status by <a href="#loan-status">clicking here</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crousal;
