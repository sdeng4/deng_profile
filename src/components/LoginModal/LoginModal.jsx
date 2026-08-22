import './LoginModal.css'

function LoginModal({ onClose }) {
  return (
    <div className="login-overlay">
      <div className="login-modal">
        <h2>Admin Login</h2>

        <input
          type="password"
          placeholder="Password"
        />

        <div className="login-actions">
          <button onClick={onClose}>Cancel</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default LoginModal