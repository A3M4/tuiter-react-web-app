import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "./profile-reducer";

const EditProfile = () => {
    const navigate = useNavigate();
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();
    let [name, setName] = useState(profile.firstName + ' ' + profile.lastName);
    let [bio, setBio] = useState(profile.bio);
    let [location, setLocation] = useState(profile.location);
    let [website, setWebsite] = useState(profile.website);
    let birthdayDate = profile.dateOfBirth.split('/')
    let [birthday, setBirthday] = useState(birthdayDate[2] + "-" + birthdayDate[0] + '-' + birthdayDate[1]);

    const updateProfileHandler = () => {
        dispatch(updateProfile({name, bio, location, website, birthday}));
        navigate('/tuiter/profile');
    }
    return (
        <>
            <Link to="/tuiter/profile">
                <i className="bi bi-x text-black fs-5"></i>
            </Link>
            <span className=" fs-3 ms-3"><b>Edit Profile</b></span>
            <button className="btn btn-dark rounded-pill float-end" onClick={updateProfileHandler}>
                Save
            </button>
            <div className="position-relative mt-3 mb-4">
                <img className="w-100" style={{"opacity": "0.5"}} src="/images/pic.jpg" alt="..."/>
                <i className="position-absolute bi bi-camera rounded-circle text-white fs-5 ps-2 pe-2 pt-1 pb-1"
                   style={{"left": "42%", "bottom": "50%", "background": "black", "opacity": "0.5"}}></i>
                <i className="position-absolute rounded-circle text-white bi bi-x fs-5 ps-2 pe-2 pt-1 pb-1"
                   style={{"left": "55%", "bottom": "50%", "background": "black", "opacity": "0.5"}}></i>
                <div className="position-absolute rounded-circle" style={{
                    "height": "25%",
                    "width": "15%",
                    "left": "3%",
                    "bottom": "-10%",
                    "background": "white"
                }}></div>
                <img className="position-absolute rounded-circle" height={100}
                     style={{"left": "3%", "bottom": "-10%", "opacity": "0.5"}} src="/images/people.png" alt="..."/>
                <i className="position-absolute bi bi-camera rounded-circle text-white fs-5 ps-2 pe-2 pt-1 pb-1"
                   style={{"left": "7.5%", "bottom": "-3%", "background": "black", "opacity": "0.5"}}></i>
            </div>
            <form>
                <div className="form-group pt-3"><label htmlFor="name" className="text-black-50 ms-3">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" value={name}
                           onChange={(e) => {
                               setName(e.target.value)
                           }}/>
                </div>
                <div className="form-group pt-3"><label htmlFor="inputBio" className="text-black-50  ms-3">Bio</label>
                    <textarea className="form-control" id="inputBio" placeholder="Bio" value={bio}
                              onChange={(e) => setBio(e.target.value)}/>
                </div>
                <div className="form-group pt-3"><label htmlFor="inputLocation"
                                                        className="text-black-50  ms-3">Location</label>
                    <input type="text" className="form-control" id="inputLocation" placeholder="Location"
                           value={location} onChange={(e) => setLocation(e.target.value)}/>
                </div>
                <div className="form-group pt-3">
                    <input type="text" className="form-control" id="inputWebsite" placeholder="Website" value={website}
                           onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div className="form-group pt-3"><label htmlFor="Birthdate" className="text-black-50  ms-3">Birth date
                    · <span style={{color: "deepskyblue"}}>Edit</span></label>
                    <input type="date" className="form-control" id="Birthdate" placeholder="Location" value={birthday}
                           onChange={(e) => setBirthday(e.target.value)}/>
                </div>
            </form>
            <div className="mt-4  ms-3">
                <i className="bi bi-chevron-right float-end"></i>
                <p>Switch to professional</p>
            </div>
        </>
    )
}
export default EditProfile;