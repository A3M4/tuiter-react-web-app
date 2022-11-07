import {createSlice} from "@reduxjs/toolkit";

const profile = {
    firstName: 'Yifeng',
    lastName: 'Li',
    handle: 'yifengli',
    profilePicture: 'people.png',
    bannerPicture: 'pic.jpg',
    bio: 'Basketball, Software Engineer, Swimming',
    website: 'youtube.com/webdevtv',
    location: 'Toronto, Canada',
    dateOfBirth : '02/02/2022',
    dateJoined: '04/2019',
    followingCount: 345,
    followersCount: 231
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