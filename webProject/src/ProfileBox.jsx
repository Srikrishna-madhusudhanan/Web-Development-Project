import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileBox.css';

function ProfileBox() {
  const [showChangePassword, setShowChangePassword] = useState(false); // State to control the visibility of the password form
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangePasswordClick = () => {
    if (showChangePassword) {
        resetPasswordFields();
      }
    setShowChangePassword(!showChangePassword); // Toggle password form visibility
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      window.alert('Password updated successfully!');
      // Add logic to update password in the backend
      resetPasswordFields();
      setShowChangePassword(false);
    } else {
      setMessage('New password and confirm password does not match!');
    }
  };

  const resetPasswordFields = () => {
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setMessage('');
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/home');
  }

  return (
    <div className="profile-container">
      <h2>Profile Management</h2>
      <button type="button" className="submit-button" onClick={handleChangePasswordClick}>
        Change Password
      </button><br/>
      <button type="button" className="submit-button">
        Delete Account
      </button><br/>
      <button type="button" className="submit-button" onClick={handleLogout}>
        Log out
      </button>

      {/* Show the Change Password form if "Change Password" is clicked */}
      {showChangePassword && (
        <div className="change-password-form">
          <form onSubmit={handlePasswordSubmit}>
            <h3>Change Password</h3>
            <div>
              <label>Old Password</label>
              <input
                type="text"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label>New Password</label>
              <input
                type="text"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Done
            </button>
            
            {message && <p>{message}</p>}
          </form>
        </div>
      )}
    </div>
  );
}

export default ProfileBox;