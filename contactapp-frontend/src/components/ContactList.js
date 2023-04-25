import React from "react";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import contactService from "../services/contact.service";
import { Link } from "react-router-dom";


const ContactList = () => {
  const[contacts, setContacts] = useState([]);

  useEffect(() => {
    init();
  }, [])

  const init = () => {
    contactService.getAll()
    .then(response => {
      console.log('Printing the contacts', response.data);
      setContacts(response.data);
    })
    .catch(error => {
      console.log('Something Went Wrong', error);
    })
  }

  const handleDelete = id => {
    contactService.remove(id)
    .then(response => {
        console.log('Contact deleted successfully', response.data);
        init();
    }).catch(error => {
        console.log('Something went wrong');
    })
  }


  return (  
    <section className="ForBodyColor">
    <div className="list-inline">
      <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="http://localhost:3000/">Smart Contact Manager</a>
    <Link to="/add" className="btn btn-primary mb-2">Add Contact</Link>
  </div>
</nav>

    
<div>
            <div className="container">

              <div className="row">
              {
                contacts.map(contact => (
                      <div className="col-md-6 col-xl-3">
                        
                      <div className="card m-b-30">
                          <div className="card-body row">
                              <div className="col-6">
                                  <a href=""><img src={contact.profilepic} alt="" className="img-fluid rounded-circle w-60" /></a>
                              </div>
                              <div className="col-6 card-title align-self-center mb-0">
                                  <h6>{contact.name}</h6>
                                  <p className="m-0">ID: {contact.id}</p>
                              </div>
                          </div>
                          <ul className="list-group list-group-flush">
                              <li className="list-group-item"><i className="fa fa-envelope float-right"></i>Email : <a href="#">{contact.emailid}</a></li>
                              <li className="list-group-item"><i className="fa fa-phone float-right"></i>Phone : {contact.contactno}</li>
                          </ul>
                          <div className="card-body">
                              <div className="float-right btn-group btn-group-sm">
                                <Link className="btn btn-info" to={`/contacts/edit/${contact.id}`}>Update</Link>
                                <button className="btn btn-danger ml-2" onClick={(e) => {
                                                handleDelete(contact.id)
                                            }}>Delete</button>

                                  {/* <a href="#" className="btn btn-primary tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit"><i className="fa fa-pencil"></i> </a>
                                  <a href="#" className="btn btn-secondary tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete"><i className="fa fa-times"></i></a> */}
                              </div>
                              <ul className="social-links list-inline mb-0">
                                  
                                  <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href={'https://'+contact.linkedin} data-original-title="Linkedin"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg><i></i></a></li>
                                  <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href={'https://'+contact.twitter} data-original-title="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg><i></i></a></li>
                                  <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href={'https://'+contact.github} data-original-title="Github"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg><i></i></a></li>
                              </ul>
                          </div>
                      </div>
                    </div>
             
                ))
              }
              </div>
              </div>
           
        </div>

    </div>
    </section>
  );


  
}


 
export default ContactList;