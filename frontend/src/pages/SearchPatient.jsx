
import "../styles/SearchPatient.css";

function SearchPatient() {
  return (
    <div className="page-container">

      <h1>Search Patient</h1>

      <input
        type="text"
        placeholder="Search by OP No / Name / Mobile"
      />

      <button>Search</button>

    </div>
  );
}

export default SearchPatient;