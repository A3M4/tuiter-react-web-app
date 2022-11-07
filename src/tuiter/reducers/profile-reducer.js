import {createSlice} from "@reduxjs/toolkit";

const profile = {
    firstName: 'Yifeng',
    lastName: 'Li',
    handle: 'yifengli',
    profilePicture: 'hahaha.png',
    bannerPicture: 'hahaha.png',
    bio: 'Basketball, Coding, Swimming',
    website: 'www.yifengli.com',
    location: 'Toronto, Canada',
    dateOfBirth : '02/02/1999',
    dateJoined: '11/2022',
    followingCount: 1234,
    followersCount: 4321
}

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            const updatedProfile = action.payload;
            let [firstName, ...lastName] = updatedProfile.name.split('/');
            lastName = lastName.join(' ');
            const bio = updatedProfile.bio;
            const location = updatedProfile.location;
            const website = updatedProfile.website;
            const [year, month, day] = updatedProfile.birthday.split('-');
            const dateOfBirth = [month, day, year].join('/');
            return {...state, firstName, lastName, bio, location, website, dateOfBirth}
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;