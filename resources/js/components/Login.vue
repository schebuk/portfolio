<template>
  <div id="app">
    <div id="login">
      <div id="form">
        <form @submit.prevent="login">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="email@email.com" autocomplete="off">

          <label for="password">Password</label>
          <i class="fas" :class="[passwordFieldIcon]" @click="hide"></i>
          <input :type="passwordFieldType" id="password" v-model="password" placeholder="**********">

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      password: '',
      hidePassword: false,
      passwordFieldIcon: 'fa-eye',
      passwordFieldType: 'password',
    };
  },
  methods: {
    login() {
      axios.post('/admin/login', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/admin'); // Redireciona para a rota /admin
        } else {
          console.error('Erro de login:', response.data.error);
          alert('Credenciais inválidas. Por favor, tente novamente.');
        }
      })
      .catch(error => {
        console.error('Erro de login:', response.data.error);
        alert('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde.');
      });
    },
    hide() {
      this.hidePassword = !this.hidePassword;
      this.passwordFieldIcon = this.hidePassword ? "faEyeSlash" : "faEye";
      this.passwordFieldType = this.hidePassword ? "text" : "password";
    }
  }
};
</script>
<style>
* {
  box-sizing: border-box;
  font-family: Verdana, sans-serif;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

div#app {
  width: 100%;
  height: 100%;
}

#login {
  align-items: center;
  background-color: #e2e2e5;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

#login div#description {
  background-color: #ffffff;
  width: 280px;
  padding: 35px;
  border-radius: 5px;
  box-shadow: 0px 0px 30px 0px #666;
}

#login div#description h1,
#login div#description p {
  margin: 0;
}

#login div#description p {
  font-size: 0.8em;
  color: #95a5a6;
  margin-top: 10px;
}

#login div#form {
  background-color: #34495e;
  border-radius: 5px;
  box-shadow: 0px 0px 30px 0px #666;
  color: #ecf0f1;
  width: 260px;
  padding: 35px;
}

#login div#form label,
#login div#form input {
  outline: none;
  width: 100%;
}

#login div#form label {
  color: #95a5a6;
  font-size: 0.8em;
}

#login div#form input {
  background-color: transparent;
  border: none;
  color: #ecf0f1;
  font-size: 1em;
  margin-bottom: 20px;
}

#login div#form ::placeholder {
  color: #ecf0f1;
  opacity: 1;
}

#login div#form button {
  background-color: #ffffff;
  cursor: pointer;
  border: none;
  padding: 10px;
  transition: background-color 0.2s ease-in-out;
  width: 100%;
}

#login div#form button:hover {
  background-color: #eeeeee;
}

@media screen and (max-width: 600px) {
  #login {
    align-items: unset;
    background-color: unset;
    display: unset;
    justify-content: unset;
  }

  #login div#description {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }

  #login div#form {
    border-radius: unset;
    box-shadow: unset;
    width: 100%;
  }

  #login div#form form {
    margin: 0 auto;
    max-width: 280px;
    width: 100%;
  }
}
</style>