import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import AppContext from '../context/appContext';

const AllUser = () => {
  const { fetchUsers, users, siteData, setSiteData, adminToken } = useContext(AppContext);
  const history = useHistory()
      if (!adminToken) {
          history.push("/admin")
      }

  const [selectedStatus, setSelectedStatus] = useState('');
  const [currentUserId, setCurrentUserId] = useState(null);
  const [savedStatuses, setSavedStatuses] = useState({});

  
  useEffect(() => {
    fetchUsers();

    const modal = document.getElementById('loanStatusModal');
    function handleModalClose() {
      setSelectedStatus('');
      setCurrentUserId(null);
    }
    modal?.addEventListener('hidden.bs.modal', handleModalClose);
    return () => modal?.removeEventListener('hidden.bs.modal', handleModalClose);
  }, []);

  const openModal = (userId) => {
    setCurrentUserId(userId);
    setSelectedStatus(savedStatuses[userId] || '');
    const modal = new window.bootstrap.Modal(document.getElementById('loanStatusModal'));
    modal.show();
  };

  // Updated: pass id and loanStatus to update function
  const loanStatusUpdation = async (id, loanStatus) => {
    const token = adminToken;
    if (!id || !loanStatus) return;

    try {
      const response = await fetch(`http://localhost:5000/api/user/update-loan-status/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ loanStatus }),
      });

      const resData = await response.json();

      if (response.ok) {
        // Update savedStatuses and siteData if needed
        setSavedStatuses(prev => ({ ...prev, [id]: loanStatus }));
        setSiteData(prev => ({ ...prev, loanStatus: resData.user.loanStatus }));
      } else {
        alert(resData.error || "Failed to update loan status");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating loan status");
    }
  };

  const handleSave = () => {
    if (!selectedStatus || !currentUserId) {
      alert('Please select a status.');
      return;
    }
    loanStatusUpdation(currentUserId, selectedStatus);

    const modal = window.bootstrap.Modal.getInstance(document.getElementById('loanStatusModal'));
    modal.hide();
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {users.map((user) => (
            <div className="col-md-4 mb-4" key={user._id}>
              <div className="card" style={{ width: "100%" }}>
                <img src={user.paymentScreenshot} className="card-img-top" alt="User" />
                <div className="card-body">
                  <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">Phone: {user.phoneNumber}</p>
                  <p className="card-text">CNIC: {user.cnic}</p>
                  <p className="card-text">Address: {user.address}</p>
                  <p className="card-text">Loan Amount: {user.loanAmount}</p>
                  <p className="card-text">
                    Loan Status: <strong>{savedStatuses[user._id] || user.loanStatus}</strong>
                  </p>
                  <button className="btn btn-primary" onClick={() => openModal(user._id)}>
                    Update Loan Status
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="loanStatusModal"
        tabIndex="-1"
        aria-labelledby="loanStatusModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="loanStatusModalLabel">Update Loan Status</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="approvedCheck"
                  checked={selectedStatus === 'approved'}
                  onChange={() => setSelectedStatus(selectedStatus === 'approved' ? '' : 'approved')}
                />
                <label className="form-check-label" htmlFor="approvedCheck">Approved</label>
              </div>

              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rejectedCheck"
                  checked={selectedStatus === 'rejected'}
                  onChange={() => setSelectedStatus(selectedStatus === 'rejected' ? '' : 'rejected')}
                />
                <label className="form-check-label" htmlFor="rejectedCheck">Rejected</label>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleSave}>Save changes</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AllUser;
