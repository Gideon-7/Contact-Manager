import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import contactService from "../services/contact.service";
import { Link } from "react-router-dom";



const AddContact = () => {
    const [name, setName] = useState('');
    const [contactno, setContactno] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [emailid, setEmailid] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [twitter, setTwitter] = useState('');
    const [github, setGithub] = useState('');
    const [profilepic, setProfilepic] = useState('');

    const navigate = useNavigate();
    const {id} = useParams();

    const saveContact = (e) => {
        e.preventDefault();

        const contact = {name, contactno, city, pincode, emailid, linkedin, twitter, github, profilepic, id};
        if (id) {
            //update records
            contactService.update(contact)
            .then(response => {
                console.log('Contact updated successfully', response.data);
                navigate('/');
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });


        } else {
            // create new record
            contactService.create(contact)
        .then(response => {
            console.log('COntact Added', response.data);
            navigate('/');
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });
        }
        
    }

    useEffect(() => {
        if (id) {
            contactService.get(id)
            .then(contact => {
                setName(contact.data.name);
                setContactno(contact.data.contactno);
                setCity(contact.data.city);
                setPincode(contact.data.pincode);
                setEmailid(contact.data.emailid);
                setLinkedin(contact.data.linkedin);
                setTwitter(contact.data.twitter);
                setGithub(contact.data.github);
                setProfilepic(contact.data.profilepic);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });
        }
}, [])

    return (  
        <div className="container">
            <h3>Add New Contact</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name" 
                    />
                </div>

                <div className="form-group">
                    <input
                            type="text"
                            className="form-control col-4"
                            id="contactno"
                            value={contactno}
                            onChange={(e) => setContactno(e.target.value)}
                            placeholder="Enter Contact Number" 
                    />
                </div>

                <div className="form-group">
                    <input
                            type="text"
                            className="form-control col-4"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter Your City" 
                    />
                </div>

                <div className="form-group">
                    <input
                            type="text"
                            className="form-control col-4"
                            id="pincode"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                            placeholder="Enter Pincode" 
                        />
                </div>

                <div className="form-group">

                    <input
                            type="text"
                            className="form-control col-4"
                            id="emailid"
                            value={emailid}
                            onChange={(e) => setEmailid(e.target.value)}
                            placeholder="Enter Email" 
                        />
                    </div>

                <div className="form-group">
                    <input
                            type="text"
                            className="form-control col-4"
                            id="linkedin"
                            value={linkedin}
                            onChange={(e) => setLinkedin(e.target.value)}
                            placeholder="Enter Linkedin" 
                        />
                    </div>

                <div className="form-group">
                    <input
                            type="text"
                            className="form-control col-4"
                            id="twitter"
                            value={twitter}
                            onChange={(e) => setTwitter(e.target.value)}
                            placeholder="Enter twitter" 
                        />
                </div>
                
                <div className="form-group">
                    <input
                            type="text"
                            className="form-control col-4"
                            id="github"
                            value={github}
                            onChange={(e) => setGithub(e.target.value)}
                            placeholder="Enter github" 
                        />
                </div>
                <div className="form-group">
                    <input
                            type="text"
                            className="form-control col-4"
                            id="profilepic"
                            value={profilepic}
                            onChange={(e) => setProfilepic(e.target.value)}
                            placeholder="Enter profilepic" 
                        />
                </div>
                    
            
                <div>
                    <button className="btn btn-primary" onClick={(e) => saveContact(e)}>Save</button>
                </div>
            </form>
            <hr />
            <Link to="/">Back to Contact List</Link>
        </div>
    );
}
 
export default AddContact;