
import "../styles/Settings.css";

function Settings() {
  return (
    <div className="page-container">

      <h1>Settings</h1>

      <div className="settings-card">

        <input
          type="text"
          placeholder="Hospital Name"
        />

        <input
          type="text"
          placeholder="Hospital Address"
        />

        <input
          type="password"
          placeholder="New Password"
        />

        <button>Save Settings</button>

      </div>

    </div>
  );
}

export default Settings;