<template>
  <div id="login">
    <section>
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
        <div class="box">
            <div class="square" style="--i:0"></div>
            <div class="square" style="--i:1"></div>
            <div class="square" style="--i:2"></div>
            <div class="square" style="--i:3"></div>
            <div class="square" style="--i:4"></div>
            <div class="container">
                <div class="form">
                    <h2>Login Form</h2>
                    <form>
                        <div class="inputBox">
                            <input type="text" placeholder="Username">
                        </div>
                        <div class="inputBox">
                            <input type="password" placeholder="Password">
                        </div>
                        <div class="inputBox">
                            <input type="submit" value="Login">
                        </div>
                        <p class="forget">Forget Password ?
                            <a href="#">Click Here</a>
                        </p>
                        <p class="forget">Don't have an account ?
                            <a href="#">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#login{
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
      background: linear-gradient(to bottom, var(--z-secondary-theme), var(--z-primary-theme));
}
 
section .color {
    position: absolute;
}
 
section .color:nth-child(1) {
    top: -350px;
    width: 600px;
    height: 600px;
    background: #ff359b;
}
 
section .color:nth-child(2) {
    bottom: -150px;
    left: 100px;
    width: 500px;
    height: 500px;
    background: #98FB98;
}
 
section .color:nth-child(3) {
    bottom: -50px;
    right: 100px;
    width: 300px;
    height: 300px;
    background: #00dfff;
}
 
section .color {
    filter: blur(150px);
}
 
.container {
    position: relative;
    width: 400px;
    min-height: 400px;
    background: var(--login-box-mask);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, .1);
    border: 1px solid rgba(255, 255, 255, .5);
    border-right: 1px solid rgba(255, 255, 255, .2);
    border-bottom: 1px solid rgba(255, 255, 255, .2);
}
 
.form {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 40px;
}
 
.form h2 {
    position: relative;
    color: var(---z-primary-font-color);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 40px;
}
 
.form h2::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 80px;
    height: 4px;
    background: var(---z-primary-font-color);
}
 
.form .inputBox {
    width: 100%;
    margin-top: 20px;
}
 
.form .inputBox input {
    width: 100%;
    background: rgba(255, 255, 255, .2);
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 35px;
    box-shadow: 0 25px 45px rgba(0, 0, 0, .5);
    border-right: 1px solid rgba(255, 255, 255, .2);
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    letter-spacing: 1px;
    color: var(---z-primary-font-color);
    box-shadow: 0 5px 15px rgba(0, 0, 0, .05);
}
 
.form .inputBox input::placeholder {
    color: var(---z-primary-font-color);
}
 
.form .inputBox input[type="submit"] {
    background: var(--z-primary-theme);
    color: var(---z-primary-font-color);
    max-width: 100px;
    cursor: pointer;
    font-weight: 600;
    margin-bottom: 20px;
}
 
.forget {
    margin-top: 5px;
    color: var(---z-primary-font-color);
}
 
.forget a {
    color: var(---z-primary-font-color);
    font-weight: 600;
}
 
.box {
    position: relative;
}
 
.box .square {
    position: absolute;
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, .1);
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, .1);
    border: 1px solid rgba(255, 255, 255, .5);
    border-right: 1px solid rgba(255, 255, 255, .2);
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    border-radius: 10px;
}
 
.box .square:nth-child(1) {
    top: -50px;
    right: -100px;
    width: 100px;
    height: 100px;
}
.box .square:nth-child(2) {
    top: 330px;
    right: 472px;
    width: 100px;
    height: 100px;
}
.box .square:nth-child(3) {
    top: 248px;
    right: -70px;
    width: 100px;
    height: 100px;
}
.box .square:nth-child(4) {
    top: -55px;
    right: 359px;
    width: 100px;
    height: 100px;
}
.box .square:nth-child(5) {
    top: -80px;
    left: 140px;
    width: 60px;
    height: 60px;
}
 
.box .square {
    animation: animate 10s linear infinite;
    animation-delay: calc(-1s*var(--i));
}
 
@keyframes animate {    
    0%,
    100% {
        transform: translateY(-40px);
    }
 
    50% {
        transform: translateY(40px);
    }
}
}
</style>