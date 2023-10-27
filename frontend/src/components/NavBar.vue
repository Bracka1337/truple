<template>
    <div class="navbar">
        <div class="buttons">
            <router-link to="/home" id="button">Home</router-link>
            <router-link to="/mycourses" id="button">My Courses</router-link>
        </div>
        <div class="profile">
            <img class="profile-pic">
            <router-link to="/myprofile" id="button">John</router-link>
        </div>
    </div>
</template>

<style scoped>

.navbar {
    height: 60px;
    width: 100%;
    border-bottom: solid 2px black;

    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    z-index: 1000;

    background-color: white;

}

.profile {
    position: absolute;
    right: 0;
    padding: 30px;

    display: flex;
    justify-content: center;
    align-items: center;


}

.profile-pic {
    width: 45px;
    height: 45px;
    border: solid 1px black;
    border-radius: 100%;
    margin: 5px;
    
}

#button {
    padding: 10px;
    color: black;
    text-decoration: none;
}

@media screen and (max-width: 600px) {
  .profile {
    padding: 0;
  }
}


</style>