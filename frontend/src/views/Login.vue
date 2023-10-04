<template>
    <div class="bg">
        <div class="l-container">
            <form class="login-form">
                <h1>Login</h1>
                <input type="email" class="l-input">
                <input type="password" class="l-input" />
                <button class="f-password">forgor password</button>
                <button @click="goToHome" type="submit" class="l-button">Login</button>
            </form>
        </div>
    </div>

</template>
 
<script>

export default {
    methods: {
        goToHome() {
            this.$router.push('/home');
        }
    }
}

</script>

<style>

.bg {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100vh;
    overflow: hidden;
}

.l-container {
    border: 2px solid black;

    width: 350px;
    height: 400px;
}

.login-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 25px;
    width: auto;

}

h1 {
    margin-bottom: 50px;
}

.l-input {
    border: 1px solid black;
    margin-top: 10px;
    height: 50px;
    padding-left: 10px;
    width: 300px;
}

.f-password {
    text-align: left;
    width: 290px;
    text-decoration: underline;
}
.l-button {
    margin: 25px;
    border: 1px solid black;
    height: 40px;
    width: 200px;

}

</style>
