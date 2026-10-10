import React from 'react'

export default function Breadcrumb() {
  return (
    <>
    <nav aria-label="breadcrumb" className="bg-dark text-light py-2 px-4 mb-4">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item"><span className="text-muted">.breadcrumb</span></li>
        <li className="breadcrumb-item"><span className="text-muted">breadcrumb-item</span></li>
        <li className="breadcrumb-item"><a href="#" className="text-light text-decoration-none">Home</a></li>
        <li className="breadcrumb-item"><a href="#" className="text-light text-decoration-none">Students</a></li>
        <li className="breadcrumb-item active text-light" aria-current="page">Directory</li>
      </ol>
    </nav>
    </>
  )
}
