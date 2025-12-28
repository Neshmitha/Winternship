type Profile={
    username:string;
    bio:string|null;
    avatarUrl?:string;
}
const profile1:Profile={
    username:"Alice",
    bio:null,
};
const profile2:Profile={
    username:"Bob",
    bio:"I love coding",
    avatarUrl:"https://example.com/bob.jpg",
};
function showProfile(profile:Profile){
    let biotext:string;
    if(profile.bio===null){
        biotext="No bio provided";
    }else{
        biotext=profile.bio;
    }
    let avatar:string;
    if(profile.avatarUrl===undefined){
        avatar="https://example.com/default-avatar.jpg";
    }else{
        avatar=profile.avatarUrl;
    }
    console.log("Username: " + profile.username);
    console.log("Bio: " + biotext);
    console.log("Avatar: " + avatar);
    console.log("------------------------------")
}
showProfile(profile1);
showProfile(profile2);