<template>
  <div id="app">
    <div class="container-fluid">
      <nav class="navbar fixed-top navbar-expand navbar-light bg-light">
   <router-link to="/" class="navbar-brand" href="#">Free Internet</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link to="/" class="nav-item nav-link">Home <span class="sr-only">(current)</span></router-link>
       <router-link to="/places" class="nav-item nav-link">Places</router-link>
    </div>
  </div>
  <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>

    </div>
    <div class="container-fluid">
      <div class="jumbotron">
      <h1 class="display-4">Free Internet Places</h1>
      <p class="lead">Lista de locais onde tem Internet grátis em Angola.</p>
      <hr class="my-4">
      <p>Está interessado em colaborar no projeto?.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="https://github.com/JoseCage/free-internet-places-angola" role="button"><i class="fab fa-github"></i> GitHub</a>
      </p>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
