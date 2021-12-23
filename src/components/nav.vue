<template>
    <div class="nav-main">
        <div class="nav-container">
            <div class="left-nav">
                
                <a class="btn-div clickable link-btn" href="/">
                        <h2 class="roboto-b title-logo">Enock lubega</h2>
                    </a>
            </div>
            <div class="right-nav">
                <a class="btn-div about-btn font-12 roboto-m clickable link-btn" href="">about</a>
                <div class="social-links">
                    <a class="btn-div git-button clickable link-btn" href="https://github.com/Gitnock">
                        <i class="bx bxl-github font-24"></i>
                    </a>
                     <a class="btn-div clickable link-btn" href="https://dribbble.com/Mulira">
                        <i class="bx bxl-dribbble font-24"></i>
                    </a>
                </div>
                <div class="social-links-m">
                    <button class="mobile-menu btn-div">
                        <h3 class="roboto-m">
                            MENU
                        </h3>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" >
    export default {
        name: "nav-item",
    }
</script>

<style lang="scss" scoped>
.nav-main {
    width: 100%;
    display: flex;
    justify-content: center;
}
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1359px;
    padding: 0 24px;
}

// left nav
.title-logo {
    font-size: 21px;
    color: black;
}

// right nav
.right-nav {
    display: flex;
    align-items: center;
}
.about-btn {
    border-radius: 6px;
    width: 142px;
    height: 42px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.git-button {
    margin: 0 36px;
}
.social-links-m {
    display: none;
    margin: 0;
}
.mobile-menu {
    background: transparent;
    border-radius: 12px;
    padding: 0 12px;
    &:active{
        background: black;
        color: white;
    }
}

@media screen and (max-width: 700px) {
    .nav-container {
        width: 100%;
    }
    .about-btn {
        display: none;
    }
    .social-links{
        display: none;
        // padding: 12px 0 0 0
    }
    .social-links-m {
        display: flex;
        align-items: center;
        width: 100%;
    }
    
}
</style>