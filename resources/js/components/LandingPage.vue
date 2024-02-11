 <template>
  <header class="header parallax">
    <div class="name">
      <div class="wrapper-name">
        
          <h1>Rafael Gomes Schebuk</h1>
        <hr />
        
          <p>Desenvolvedor FullStack PHP/Node.js Sênior</p>
        
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "LandingPage",
  props: []
};
</script>

<style scoped lang="scss">
$colors: (
  primary: #353535,
  secondary: #3C6E71,
  complementary: #284B63,
  light: whitesmoke,
  dark: #D9D9D9,
  error: #ff2818,
);

$breakpoints: (
  small: 767px,
  medium: 992px,
  large: 1200px,
);

@font-face {
    font-family: "Montserrat-Regular";
    src: url("/fonts/Montserrat-Medium.ttf");
}
html, body {
  height: 100%;
  margin: 0;
}
.header {
  padding: 20px;
  background-color: map-get($colors, dark);
  height: 100vh;
}

.parallax {
  background-image: url("/images/bg.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.name {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  z-index: 400;

  .wrapper-name {
    width: 300px;
  }

  h1 {
    font-size: 2.3rem;
    padding: 2px 10px;
    text-align: center;
    text-transform: uppercase;
    color: whitesmoke;
    :hover{
        text-decoration: underline;
    }
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    margin: 5px auto;
    color: whitesmoke;
  }

  hr {
    border: 1px solid whitesmoke;
  }
}

@media (min-width: #{map-get($breakpoints, small)}) {
  .name {
    .wrapper-name {
      width: 55%;
    }
    h1 {
      font-size: 2.8rem;
      padding: 4% 8%;
    }
    p {
      font-size: 2rem;
    }
  }
}
@media (min-width: #{map-get($breakpoints, medium)}) {
  .name {
    .wrapper-name {
      width: 450px;
    }
    h1 {
      font-size: 4rem;
      padding: 4% 10%;
    }
    p {
      font-size: 2.5rem;
    }
  }
}
@media only screen and (max-device-width: 1024px) {
  .parallax {
    background-attachment: scroll;
  }
}
</style>
