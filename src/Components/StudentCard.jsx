import React from 'react';

export default function StudentCard({ name, id, major, year, gpa, onViewProfile}) {
  return (
    <div className="card shadow-sm border-0 h-100">
      {/* Avatar Placeholder Section */}
      <div className="bg-secondary bg-opacity-25 py-4 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          fill="currentColor"
          className="bi bi-person-fill text-secondary"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
      </div>

      {/* Card Details */}
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3">{name}</h5>
        <p className="card-text mb-1 text-secondary">ID: {id}</p>
        <p className="card-text mb-1 text-secondary">Major: {major}</p>
        <p className="card-text mb-1 text-secondary">Year: {year}</p>
        <p className="card-text mb-3 text-secondary">GPA: {gpa}</p>

        {/* Action Buttons */}
        <div className="d-flex gap-2">
          <button 
            className="btn btn-outline-primary btn-sm px-3" 
            onClick={onViewProfile}
          >
            View Profile
          </button>
          <button 
            className="btn btn-outline-danger btn-sm px-3" 
          
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}