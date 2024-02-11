<template>
  <section id="projects">
    <div v-animateonscroll="{ enterClass: 'fadeinleft', leaveClass: 'fadeoutleft' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
      <div class="title">
        <h2>Projetos</h2>
        <div class="wrapper">
          <div class="text-wrapper"></div>
        </div>
      </div>
    </div>

    <div class="container-fluid center-block timeline-left-align">
      <article class="content">
        <!-- Utilize o componente Timeline -->
        <div class="p-timeline p-component p-timeline-left p-timeline-vertical" data-pc-name="timeline" data-pc-section="root">
               
          <!-- Itere sobre os projetos e exiba cada um deles -->
          <div v-for="(project, index) in projects" :key="index" class="p-timeline-event">
            <!-- Exiba a data na esquerda do marcador -->
            <div class="p-timeline-event-oppositel">{{ calcularTempoDecorrido( new Date(project.date)) }}</div>
            <div class="p-timeline-event-separator">
              
              <span class="marker" :style="{ borderColor: project.color }">
                <i class="fas fa-code"></i>
              </span>
              
              <div class="p-timeline-event-connector"></div>
            </div>
            <div class="p-timeline-event-content">
               <span :style="'background-color: ' + project.color" class="tag">
                  {{ project.tag }}</span>
               <h2>{{ project.title }}</h2>
              <div v-if="project.image" class="image-container">
                <img :src="project.image" class="timeline-image" v-if="project.image" alt="Project Image">
              </div>
              <p v-html="project.content"></p>
              <div v-if="project.link">
                <a :href="project.link">Ver mais</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  props: ['content'],
  components: {
  },
  methods: {
    getMarkerClass(color) {
      return `marker marker-${color}`;
    },
    calcularTempoDecorrido(data){
        const agora = new Date();
        const diferenca = agora - data;

        const segundos = Math.floor(diferenca / 1000);
        const minutos = Math.floor(segundos / 60);
        const horas = Math.floor(minutos / 60);
        const dias = Math.floor(horas / 24);
        const meses = Math.floor(dias / 30);
        const anos = Math.floor(meses / 12);

        if (anos > 0) {
            return `${anos} ano${anos > 1 ? 's' : ''} atrás`;
        } else if (meses > 0) {
            return `${meses} mês${meses > 1 ? 'es' : ''} atrás`;
        } else {
            return 'Hoje';
        }
    },
  },
  data: () => ({"projects": [
              {
                "title": "Ntask",
                "content": "sistema de gerenciamento de processos para cartorios",
                "link": "https://geo.ntask.app/#/autenticacao",
                "image": "images/ntask.png",
                "tag": "Full Stack",
                "color": "red",
                "date": "2024-01-08"
              },
              {
                "title": "Admin PlanoLeads",
                "content": "Admin feito em laravel e vue.js",
                "link": "",
                "image": "images/planolead.png",
                "tag": "Full Stack",
                "color": "red",
                "date": "2022-10-10"
              },
              {
                "title": "Johnson & Johnson Medtech",
                "content": "Suporte em alteracoes e melhorias no site da Johnson & Johnson Medtech e empresas relacionadas<br><small>HTML, CSS, JavaScript, Jquery, PHP, Drupal, Lando, Jenkins, Git, GitFlow, SCRUM, Jira</small>",
                "link": "",
                "image": "images/jnj.png",
                "tag": "Full Stack",
                "color": "red",
                "date": "2022-05-02"
              },
              {
                "title": "Sindesp",
                "content": "Alteracoes em sistema de registro de ocorrencias policiais para o Ministerio da Justiça do DF<br /><small>HTML, CSS, JavaScript, Vue.js, PHP, Laravel, Jenkins, Git, Kanban</small>",
                "link": "",
                "image": "",
                "tag": "Full Stack",
                "color": "red",
                "date": "2021-11-25"
              },
              {
                "title": "Sistema eletronico de leilões - MJDF",
                "content": "Adaptação e melhorias no sistema de leiloes do Ministerio da Justica<br /><small>HTML, CSS, JavaScript, PHP, CakePHP3, Jenkins, Git, Kanban</small>",
                "link": "",
                "image": "images/sel.png",
                "tag": "Full Stack",
                "color": "red",
                "date": "2021-11-25"
              },
              {
                "title": "Sistema de integração de app de entrega - madero",
                "content": "Sistema feito em node.js para integracao de varios apps de entrega como ifood,rappi,etc<br /><small>Node.js, MongoDB, Jenkins, Git, SCRUM</small>",
                "link": "",
                "image": "",
                "tag": "Node.js",
                "color": "green",
                "date": "2021-07-20"
              },
              {
                "title": "Refetoramento do Sistema de controle de pontos de fidelidade - Madero",
                "content": "Sistema feito em node.js para refatoramento e auditar o sistema de cashback do restaurante madero<br /><small>Node.js, MsSQL, git, SCRUM</small>",
                "link": "",
                "image": "",
                "tag": "Node.js",
                "color": "green",
                "date": "2021-07-20"
              },
              {
                "title": "Sistema de integração dos totens de autoatendimento - Madero",
                "content": "Sistema feito em node.js para refatoramento e auditar o sistema de cashback do restaurante madero<br /><small>PHP, Laravel, Git</small>",
                "link": "",
                "image": "",
                "tag": "Laravel",
                "color": "orange",
                "date": "2021-07-20"
              },
              {
                "title": "Grhul",
                "content": "Aplicação de tema customizado no wordpress<br /><small>PHP, Wordpress, HTML, CSS</small>",
                "link": "",
                "image": "",
                "tag": "WordPress",
                "color": "pink",
                "date": "2021-08-20"
              },
              {
                "title": "Veste a Camisa Cargill",
                "content": "Alteraçõe no portal da campanha Veste a camisa Cargill<br /><small>PHP, Symfony, Git</small>",
                "link": "https://vesteacamisacargill.com.br/#/",
                "image": "images/vesteacamisa.png",
                "tag": "Simfony",
                "color": "white",
                "date": "2021-07-20"
              },
              {
                "title": "Gigantes em Campo Cargill",
                "content": "Alteraçõe no portal da campanha Gigantes em Campo Cargill<br /><small>PHP, Symfony, Git</small>",
                "link": "https://www.gigantesemcampocargill.com.br/#/",
                "image": "images/gigantes.png",
                "tag": "Simfony",
                "color": "white",
                "date": "2021-07-20"
              },
              {
                "title": "SPTaxi",
                "content": "Suporte e desenvovimento de novas funcoes para o app sptaxi e alguns portais de relatorios relacionados ao app<br /><small>Node.js, React, Git, Docker, MongoDb</small>" ,
                "link": "https://play.google.com/store/apps/details?id=br.gov.sp.prefeitura.sptaxi.driver&hl=en&gl=US",
                "image": "images/sptaxi.webp",
                "tag": "Node.js/React",
                "color": "green",
                "date": "2021-04-20"
              },
              {
                "title": "Hotsite Campanha Bem Pensado Consul",
                "content": "suporte e aplicacao das regras da campanha do Hotsite com sistema de cashback da Consul<br /><small>Yii2, Mysql</small>" ,
                "link": "https://folia.bempensadoconsul.com.br",
                "image": "",
                "tag": "Yii2",
                "color": "blue",
                "date": "2021-04-20"
              },
              {
                "title": "Econet",
                "content": "Suporte e desenvovimento de novas internas de simuladores de tarifação empresarial<br /><small>Laravel, Vue.js, Mysql, Git, Scrum</small>" ,
                "link": "http://www.econeteditora.com.br",
                "image": "images/econet.png",
                "tag": "Laravel/Vue.js",
                "color": "orange",
                "date": "2018-11-04"
              },
              {
                "title": "Gere o seu Momento -  Hondashi",
                "content": "Backend da funcionalidade de indicação de receita de acordo com as respostas do usuario<br /><small>Synfony</small>" ,
                "link": "https://www.hondashi.com.br/#",
                "image": "images/hondashi.png",
                "tag": "Synfony",
                "color": "purple",
                "date": "2015-11-04"
              },
              {
                "title": "Aji-no-moto",
                "content": "Funcionalidade de exibição de receitas redirecionando para o <br /><small>PHP, MySQL, CSS, Javascrpt</small>" ,
                "link": "https://www.aji-no-moto.com.br/receitas-umami/",
                "image": "images/ajinomoto.png",
                "tag": "Synfony",
                "color": "purple",
                "date": "2015-11-04"
              },
              {
                "title": "Hotsite Risque",
                "content": "Backend Hotsite de uma campanha da risque com integracaocom api do Facebook<br /><small>PHP, Jquery</small> " ,
                "link": "",
                "image": "",
                "tag": "PHP",
                "color": "Gray",
                "date": "2015-11-04"
              },
              {
                "title": "Unique",
                "content": "Sistema de CMD para sistemas de telemarketing com discador integrado com pabx em Asterisk<br /><small>PHP, MySQL, CSS, JQuery, Node,js, Socket.io, Git, SCRUM</small>" ,
                "link": "",
                "image": "",
                "tag": "PHP",
                "color": "gray",
                "date": "2015-06-04"
              },
              {
                "title": "Agendamento de Recall Honda",
                "content": "Sistema verificação e agendamento de recall da honda baseado no numero do chassi<br /><small>PHP, MySQL, CSS, Javascript, Symfony</small>" ,
                "link": "",
                "image": "",
                "tag": "Symfony",
                "color": "purple",
                "date": "2014-11-04"
              },
              {
                "title": "Ipade",
                "content": "Site institucional<br /><small>PHP, MySQL, CSS, HTML, Javascript</small>" ,
                "link": "",
                "image": "",
                "tag": "Fullstack",
                "color": "red",
                "date": "2014-07-04"
              },
              {
                "title": "Sorte Brasil",
                "content": "Frontend do site sortebrasil<br /><small>HTML, CSS, Javascript</small>" ,
                "link": "",
                "image": "",
                "tag": "Frontend",
                "color": "blue",
                "date": "2012-11-04"
              },
            ]
  }),
};
</script>

<style scoped lang="scss">
     @import '../../../public/css/constants.scss';

$linear: map-get($colors, dark);

#projects {
  background-color: lighten(map-get($colors, primary), 5%);

}

.title {
  color: map-get($colors, light);
}

.text-wrapper {
  &:after {
    border-bottom: 1px solid map-get($colors, dark);
  }
}

article .inner {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    z-index: 1;
}

.content {
    color: map-get($colors, light);
    margin-top: 30px;
    header {
        height: 100%;
        width: 70%;
    }
    h1{
        font-size: 3rem;
    }
}

.vertical-center {
    display: flex;
    align-items: left;
}

h1 {
    margin-top: 10px;
    margin-bottom: 20px;
}
  .project {
  display: flex;
  align-items: left;
  justify-content: space-between;
  margin-bottom: 20px;
  }
  .timeline-left-align {
      text-align: left;
  }
  .left {
    display: flex;
    align-items: left;
  }

  .right {
    width: 70%;
    display: flex;
    flex-direction: column;
  }

  .date {
    font-size: 1rem;
    margin-right: 10px;
  }

  .marker {
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-right: 10px;
    width: 50px; /* Define a largura fixa do marcador */
    height: 50px; /* Define a altura fixa do marcador */
    padding: 3px 5px;
    border-radius: 50%; /* Torna o marcador circular */
    color: white; /* Define a cor do texto do marcador */
    display: inline-block;
    border-radius: 50px; /* ajuste conforme necessário */
    border: 5px solid #fff; /* adiciona uma borda */
  }

  .marker-red {
    background-color: red; /* Define a cor de fundo do marcador */
  }
  .image-container {
    width: 100%; /* Garante que a imagem não ultrapasse a largura do contêiner */
    height: auto; /* Defina a altura máxima da imagem conforme necessário */
    overflow: hidden; /* Oculta qualquer parte da imagem que ultrapasse as dimensões do contêiner */
  }
  
  .image-container img {
    width: 100%;
  }
  .tag {
    display: inline-block;
    padding: 10px 10px; /* ajuste conforme necessário */
    border-radius: 25px; /* ajuste conforme necessário */
    color: white; /* cor do texto */
    border: 5px solid #fff; /* adiciona uma borda */
    float: left;
    margin-right: 10px;
  }
  .p-timeline-event-content{
    width: 45%;
  }
  .p-timeline-event-content h2{
     padding: 5px 0 0 10px;
     font-size: 1.5em;
     line-height: 2em;
    
  }
  .p-timeline-event{
    width: 90%;
    padding:0 5%;
  }
  .p-timeline-event-oppositel{
    width: 110px;
    text-align: right;
    padding: 10px 10px 0 0;
  }
</style>