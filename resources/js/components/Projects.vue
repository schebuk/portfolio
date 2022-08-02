<template>
  <section id="projects">
    <AnimateOnVisible name="fadeDown" :duration="1">
		<div class="title">
                <h2>Projetos</h2>
                <div class="wrapper">
                    <div class="text-wrapper"></div>
                </div>
            </div>
    </AnimateOnVisible>

    <div class="container-fluid center-block">
      <article class="content text-center">

		<AnimateOnVisible class="timeline mx-auto" v-for="(post, index) in projects" :key="index" name="fadeLeft" :duration="0.5">
			<vue-timeline-update
                :date="new Date(post.date)"
                :title="post.title"
                :description="post.content"
                :thumbnail="post.image"
                :color="post.color"
                :category="post.tag"
                icon="code"
            />
		</AnimateOnVisible>
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
  },
  data: () => ({"projects": [
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
                "content": "Alteraçõe no portal da campanha Veste a camisa Cargill<br /><small>PHP, Symfony, Git</small><br /> Link: <a href='https://vesteacamisacargill.com.br/#/' target='_blank'>vesteacamisacargill.com.br</a>",
                "link": "https://vesteacamisacargill.com.br/#/",
                "image": "images/vesteacamisa.png",
                "tag": "Simfony",
                "color": "white",
                "date": "2021-07-20"
              },
              {
                "title": "Gigantes em Campo Cargill",
                "content": "Alteraçõe no portal da campanha Gigantes em Campo Cargill<br /><small>PHP, Symfony, Git</small><br/>Link: <a href='https://www.gigantesemcampocargill.com.br/#/' target='_blank'>gigantesemcampocargill.com.br</a>",
                "link": "https://www.gigantesemcampocargill.com.br/#/",
                "image": "images/gigantes.png",
                "tag": "Simfony",
                "color": "white",
                "date": "2021-07-20"
              },
              {
                "title": "SPTaxi",
                "content": "Suporte e desenvovimento de novas funcoes para o app sptaxi e alguns portais de relatorios relacionados ao app<br /><small>Node.js, React, Git, Docker, MongoDb</small><br/>Links: <a href='https://play.google.com/store/apps/details?id=br.gov.sp.prefeitura.sptaxi.passenger&hl=en&gl=US' target='_blank'>SPTaxi Passageiro</a> - <a href='https://play.google.com/store/apps/details?id=br.gov.sp.prefeitura.sptaxi.driver&hl=en&gl=US' target='_blank'>SPTaxi Taxista</a>" ,
                "link": "https://play.google.com/store/apps/details?id=br.gov.sp.prefeitura.sptaxi.driver&hl=en&gl=US",
                "image": "images/sptaxi.webp",
                "tag": "Node.js/React",
                "color": "green",
                "date": "2021-04-20"
              },
              {
                "title": "Hotsite Campanha Bem Pensado Consul",
                "content": "suporte e aplicacao das regras da campanha do Hotsite com sistema de cashback da Consul<br /><small>Yii2, Mysql</small><br/>Link: <a href='https://folia.bempensadoconsul.com.br' target='_blank'>bempensadoconsul.com.br</a>" ,
                "link": "https://folia.bempensadoconsul.com.br",
                "image": "",
                "tag": "Yii2",
                "color": "blue",
                "date": "2021-04-20"
              },
              {
                "title": "Econet",
                "content": "Suporte e desenvovimento de novas internas de simuladores de tarifação empresarial<br /><small>Laravel, Vue.js, Mysql, Git, Scrum</small><br/>Links: <a href='http://www.econeteditora.com.br' target='_blank'>econeteditora.com.br</a>" ,
                "link": "http://www.econeteditora.com.br",
                "image": "images/econet.png",
                "tag": "Laravel/Vue.js",
                "color": "orange",
                "date": "2018-11-04"
              },
              {
                "title": "Gere o seu Momento -  Hondashi",
                "content": "Backend da funcionalidade de indicação de receita de acordo com as respostas do usuario<br /><small>Synfony</small><br />Link: <a href='https://www.hondashi.com.br/#' target='_blank'>hondashi.com.br</a>" ,
                "link": "https://www.hondashi.com.br/#",
                "image": "images/hondashi.png",
                "tag": "Synfony",
                "color": "white",
                "date": "2015-11-04"
              },
              {
                "title": "Aji-no-moto",
                "content": "Funcionalidade de exibição de receitas redirecionando para o <br /><small>PHP, MySQL, CSS, Javascrpt</small><br/> Link: <a href='https://www.aji-no-moto.com.br/receitas-umami/' target='_blank'>aji-no-moto.com.br</a> " ,
                "link": "https://www.aji-no-moto.com.br/receitas-umami/",
                "image": "images/ajinomoto.png",
                "tag": "Synfony",
                "color": "white",
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
                "color": "white",
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
    align-items: center;
}

h1 {
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>
