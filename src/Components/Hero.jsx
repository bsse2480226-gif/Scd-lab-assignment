import React from 'react';
import Header from './Header';
import Footer from './Footer';
import StudentCard from './StudentCard';
import Breadcrumb from './Breadcrumb';


export default function Hero() {
 

  const handleViewProfile = (name) => {
    console.log(`View profile clicked for: ${name}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete clicked for student ID: ${id}`);
  };
  return (
    <>
      <Header/>
      <Breadcrumb/>
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-normal">Page Header</h2>
          <button className="btn btn-dark btn-sm">Add New Student</button>
        </div>
      <div className="row g-4">
        {/* {students.map((student) => (
          <div className="col-12 col-sm-6 col-md-3" key={student.id}>
            <StudentCard
              name={student.name}
              id={student.id}
              major={student.major}
              year={student.year}
              gpa={student.gpa}
              onViewProfile={() => handleViewProfile(student.name)}
              onDelete={() => handleDelete(student.id)}
            />
          </div>
        ))} */}
            <div className="col-12 col-sm-6 col-md-3" >
                 <StudentCard name={"yasir idrees khan"} id={101} major={"Computer Science"} year={2} gpa={3.8} onViewProfile={() => handleViewProfile("Khuzaima")} onDelete={() => handleDelete(101)} />
            </div>
            <div className="col-12 col-sm-6 col-md-3" >
                <StudentCard name={"khuzaima"} id={102} major={"Computer Science"} year={2} gpa={3.8} onViewProfile={() => handleViewProfile("Khuzaima")} onDelete={() => handleDelete(101)} />
            </div>
            <div className="col-12 col-sm-6 col-md-3" >
                 <StudentCard name={"Wasiq"} id={103} major={"Computer Science"} year={2} gpa={3.8} onViewProfile={() => handleViewProfile("Khuzaima")} onDelete={() => handleDelete(101)} />
       
            </div>
            <div className="col-12 col-sm-6 col-md-3" >
                <StudentCard name={"Mudasir"} id={104} major={"Computer Science"} year={2} gpa={3.8} onViewProfile={() => handleViewProfile("Khuzaima")} onDelete={() => handleDelete(101)} />
       
            </div> 
            <div className="col-12 col-sm-6 col-md-3" >
                <StudentCard name={"Asad"} id={105} major={"Computer Science"} year={2} gpa={3.8} onViewProfile={() => handleViewProfile("Khuzaima")} onDelete={() => handleDelete(101)} />
       
            </div>
      </div>
      <nav aria-label="Page navigation" className="d-flex justify-content-center my-4">
      <ul className="pagination">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
        </li>
        <li className="page-item active"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
    </div>
    
      <Footer/>
    
    </>
  );
}
