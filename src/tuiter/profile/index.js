import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const Profile = () => {
    const profile = useSelector(state => state.profile);


    return (
        <>
            <Link to="/tuiter">
                <div className="float-start"><i className="bi bi-arrow-left-short fs-2 text-black"></i></div>
            </Link>
            <div className="ms-5">
                <h4 className="fw-bold m-0">{profile.firstName + " " + profile.lastName}</h4>
                <p className="m-0 text-secondary">6,114 Tweets</p>
            </div>
            <div className="position-relative mt-2">
                <img className="w-100" src="/images/pic.jpg" alt="..."/>
                <img className="position-absolute rounded-circle" height={120} style={{"left": "5%", "bottom": "-12%"}}
                     src="/images/people.png" alt="..."/>
            </div>
            <Link to="/tuiter/edit-profile" className="clearfix">
                <button className="btn btn-light fw-bold rounded-pill float-end mt-3">
                    Edit Profile
                </button>
            </Link>


            <div className="mt-4">
                <h3 className="m-0">{profile.firstName}</h3>
                <p className="text-secondary">@{profile.handle}</p>
                <p>{profile.bio}</p>
                <p>
                    <i className="bi bi-geo-alt"></i>{profile.location}
                    <i className="bi bi-balloon ms-3"></i>Born {profile.dateOfBirth}
                    <i className="bi bi-calendar ms-3"></i>Joined {profile.dateJoined}
                </p>
                <p>
                    <span className="fw-bold">{profile.followingCount}</span> following
                    <span className='fw-bold ms-3'>{profile.followersCount}</span> follower
                </p>
            </div>

        </>
    )
}

export default Profile;