<template>
  <section id="experience">
    <AnimateOnVisible name="fadeDown" :duration="1">

        <div class="title">
        <h2>Experiencias</h2>
        <div class="wrapper">
            <div class="text-wrapper"></div>
        </div>
        </div>
    </AnimateOnVisible>

	<AnimateOnVisible name="fadeUp" :duration="1">
		<div class="container-fluid">
			<div class="row">
                <div class="col-12 col-md left">
                    <h3 class="color-light">academico</h3>
                        <div class="resume-item" v-for="(post, index) in academico" :key="index">
                        <div class="year color-darker">{{ post.year }}</div>
                        <div class="resume-description">
                            <strong class="color-light" v-html="post.title"></strong>
                        </div>
                        <div class="color-darker" v-html="post.content"></div>
                        </div>
                </div>
                <div class="col-12 col-md right">
                    <h3 class="color-light  col-12 col-md right">Profissional</h3>
                    <div class="resume-item" v-for="(post, index) in profissional" :key="index">
                    <div class="year color-darker">{{ post.year }}</div>
                    <div class="resume-description">
                        <strong class="color-light" v-html="post.title"></strong>
                    </div>
                    <div class="color-darker" v-html="post.content"></div>
                    </div>
                </div>
			</div>
		</div>
	</AnimateOnVisible>
  </section>
</template>

<script>

export default {
  name: "Experience",
  props: ["content"],
  components: {
  },
  data: () => ({
    "academico": [
        {
        "year": "01/2020 - 06/2022",
        "title": "Ensino Superior Completo",
        "content": "<b>Análise e desenvolvimento de sistemas</b> <br />Faculdade Estácio de Sá"
        },
        {
        "year": "2023",
        "title": "Certificado PHP",
        "content": "Coodesh<br /> <a href='https://coodesh.com/share/certificate/7d3ac100-8e4a-11ed-9234-5b33dd5de4e1' target='_blank'>Certificado</a>"
        },
        {
        "year": "2022",
        "title": "Testes unitários e TDD com PHP e PHPUnit",
        "content": "Udemy<br /> <a href='https://www.udemy.com/certificate/UC-f859d03d-0a91-4462-800a-fe858c3539a9/' target='_blank'>Certificado</a>"
        },
        {
        "year": "2001",
        "title": "Programação em linguagens HTML e Javascript",
        "content": "Seed Informática"
        },
        {
        "year": "2001",
        "title": "Lógica de Programação ",
        "content": "Tekno Software"
        },
        {
        "year": "2001",
        "title": "Introdução a Banco de Dados Oracle",
        "content": "Tekno Software"
        }
    ],
    "profissional": [
        {
        "year": "02/05/2022 - 18/07/2022",
        "title": "Programador de Sistemas de Informação<br/>CI&T Software",
        "content": "Desenvolvimento Fullstack com PHP, Drupal, Lando, Docker, Mysql, Jquery, Jenkins, GitFlow <br /><b>Tecnologias</b><br />MySQL Scrum, SQL, PHP, Drupal, Jenkins, GitFlow, Jira"
        },
        {
        "year": "26/06/2021 - 13/03/2022",
        "title": "Desenvolvedor PHP Sênior<br />Meta",
        "content": "Programação em PHP utilizando Laravel, Cakephp 3, Mysql, MongoDB, Postgresql e Programação em node.js utilizando express e front em react e vue.js, utilização de Docker<br /><b>Tecnologias</b>MySQL Scrum, SQL, Node.js, GitFlow, Azure DevOps, AWS Deployment, Laravel"
        },
        {
        "year": "06/03/2021 - 13/06/2021",
        "title": "Programador Back End<br />Alias Tecnologia",
        "content": "Desenvolvimento e manutenção do app SpTaxi utilizando, node.js, express, mongodb, redis, docker, reactjs<br /><b>Tecnologias</b>MongoDB, Docker, GitFlow, Kanban, Redis"
        },
        {
        "year": "25/01/2021 - 05/03/2021",
        "title": "Desenvolvedor Back End Pleno<br />Núcleo Produz",
        "content": "Programação em PHP utilizando yii2 e mysql<br/><b>Tecnologias</b><br/>MySQL, Yii"
        },
        {
        "year": "04/11/2019 - 06/08/2020",
        "title": "Programador Backend<br/ >Econet Editora Empresarial",
        "content": "Programação em PHP utilizando Laravel, Mysql e MongoDB para criação de API's para serem consumidas por alguns sistemas e ferramentas do site e também trabalhei um pouco com o Front em VueJs<br /><b>Tecnologias</b><br />MySQL, Git, Laravel, Vue.js"
        },
        {
        "year": "03/08/2016 - 22/11/2016",
        "title": "Programador Backend<br/>Cappucino Agência Digital",
        "content": "Programação em PHP e Javascript utilizando symfony (1.4 / 2.8), Jquery , utilização de apis via Json (Facebook, Twitter), Bancos de dados Mysql.<br /><b>Tecnologias</b><br />PHP, JavaScript, MySQL, jQuery,,APIs,JSON"
        },
        {
        "year": "05/05/2016 - 18/08/2016",
        "title": "PHP Developer<br/>Smarty Solutions",
        "content": "Programação em PHP e Javascript utilizando CakePHP, JQuery, Bootstrap e MySQL, e também robôs de web crawling em Node.js e configuração de servidor AWS(tanto Ubuntu quanto Amazon Linux) também utilizando Docker e Cloud9.<br /><b>Tecnologias</b><br />PHP, JavaScript, MySQL, Docker, Linux, jQuery, Ubuntu, CakePHP, Web Crawling, Bootstrap"
        },
        {
        "year": "23/11/2015 - 04/04/2016",
        "title": "Programador PHP Pleno<br/>Nobre Financeira",
        "content": "Desenvolvimento e manutenção de sistema de controle e gestão de call center em PHP tanto estruturado quanto utilizando framework Laravel com utilização de Jquery, node.js, angular, composer, git(Bitbucket) com utilização de banco de dados mysql com integração com pabx em asterisk e utilização de websockets.<br/><b>Tecnologias</b><br />PHP, MySQL, Git, jQuery, BitBucket, Composer, WebSockets, Laravel, Asterisk"
        },
        {
        "year": "10/11/2015 - 04/04/2016",
        "title": "Analista Programador PHP<br />Work Telemarketing",
        "content": "Desenvolvimento e manutenção de sistemas em PHP utilizando frameworks Symfony 2 e Zend Framework 2 com utilização de Jquery, node.js, grunt, composer, git(Bitbucket) com utilização de bancos mysql e oracle.<br/><b>Tecnologias</b><br />PHP, MySQL, Git, jQuery, BitBucket, Grunt, Composer, Symfony"
        },
        {
        "year": "10/03/2014 - 23/06/2014",
        "title": "Programador PHP<br/>Trupe Agência Criativa",
        "content": "Desenvolvimento de sites com Html/Css(Tableless) e com programação em PHP com o framework Zend e utilizando Ajax e Jquery<br/><b>Tecnologias</b><br />PHP, AJAX, jQuery, HTML, CSS"
        },
        {
        "year": "13/06/2013 - 03/09/2013",
        "title": "Programador PHP Pleno<br/>Jumper Technology Company",
        "content": "Desenvolvimento de sites com Html/Css(Tableless) e com programação em PHP utilizando Ajax e Jquery<br /><b>Tecnologias</b><br />JavaScript, HTML, CSS"
        },
        {
        "year": "12/09/2011 - 22/08/2012",
        "title": "Desenvolvedor I - Resource IT Solutions",
        "content": "Criação e alteração de páginas web tanto no portal e na intranet do banco Santander com HTML, CSS e Javascript<br/><b>Tecnologias</b><br/>JavaScript, HTML, CSS"
        },
        {
        "year": "20/03/2011 - 10/05/2011",
        "title": "Desenvolvedor PHP Junior<br/>Datto",
        "content": "Desenvolvimento de sistemas para web com programação em PHP (orientado a objetos), AJAX, Jquery, com banco de dados em MySQL e utilizando o framework ZEND<br /><b>Tecnologias</b><br />PHP, MySQL, AJAX, jQuery"
        },
        {
        "year": "01/02/2011 - 17/03/2011",
        "title": "Assistente de Criação<br/>Cyber1 do Brasil",
        "content": "Desenvolvimento de páginas web em HTML, CSS, Javascript com programação em PHP (estruturado) com banco de dados em MySQL<br /><b>Tecnologias</b><br />PHP, MySQL, JavaScript, HTML, CSS"
        },
        {
        "year": "23/03/2008 - 17/08/2008",
        "title": "Programador<br/>Estúdio 23",
        "content": "Desenvolvimento de páginas web em HTML, CSS, Javascript com programação em PHP(estruturado) com banco de dados em MySQL com utilização do pacote Adobe CS3 e desenvolvimento de banners animados em Flash e Actionscript.<br/><b>Tecnologias</b><br/>PHP, MySQL, JavaScript, HTML, CSS"
        },
        {
        "year": "01/02/2001 - 01/12/2003",
        "title": "Programador Junior <br/> SCHK Sistemas",
        "content": "Codificação e validação de programas de computador voltados para comércio eletrônico utilizando as ferramentas de Programação (Photoshop, Javascript, HTML, Flash e Actionscript) e acesso aos Bancos de Dados (SQL Server).<br/><b>Tecnologias</b><br/>SQL SERVER, JavaScript, HTML, CSS"
        }
    ],
  })
};
</script>

<style scoped lang="scss">
     @import '../../../public/css/global.scss';

$linear: map-get($colors, dark);

#experience {
  background-color: lighten(map-get($colors, primary), 5%);
}

.title {
  color: map-get($colors, light);
}

.row {
  padding-top: 20px;
  text-align: center;
}

@media (min-width: #{map-get($breakpoints, small)}) {
  .left {
    text-align: right;
    border-right: 2px solid $linear;
  }
  .right {
    text-align: left;
  }
}

@media (max-width: #{map-get($breakpoints, small)}) {
  .right {
    margin-top: 20px;
  }
  .left:before {
    content : "";
    position: absolute;
    left    : 20%;
    bottom  : 0;
    height  : 2px;
    width   : 60%;  /* or 100px */
    border-bottom:2px solid $linear;
}
}

.text-wrapper {
  &:after {
    border-bottom: 1px solid map-get($colors, dark);
  }
}
.resume-item {
  margin-bottom: 25px;
  p {
    font-size: 1.5rem;
    margin-top: 0;
  }
  .resume-description {
    font-size: 1.7rem;
  }
  .year {
    font-weight: 600;
    margin-bottom: 5px;
  }
}
.color-light {
  color: map-get($colors, light);
}
.color-darker {
  color: map-get($colors, dark);
}
</style>
</style>
