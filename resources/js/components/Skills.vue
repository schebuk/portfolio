<template>
    <section id="skills">
      <div v-animateonscroll="{ enterClass: 'fadeinleft', leaveClass: 'fadeoutleft' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
        <div class="title">
          <h2>Conhecimento</h2>
          <div class="wrapper">
            <div class="text-wrapper"></div>
          </div>
        </div>
      </div>
      <div class="section-content">
        <div class="container-fluid">
          <div class="row d-flex flex-wrap align-items-center">
            <div class="col-md-2 m-auto pb-4" v-for="(post, index) in skills" :key="index">
              <div v-animateonscroll="{ enterClass: 'fadeinleft', leaveClass: 'fadeoutleft' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
                <img id="imgLogo" class="img-responsive mx-auto d-block" :src="post.img" :alt="post.title"/>
                <div id="divAlt" class="altCaption text-center">{{post.title}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

    export default {
        name: 'Skills',
        components: {
        },
        props: [],
        methods: {
        },
        data: () => ({
            "skills": [
              {
                "title": "HTML",
                "img": "images/html.png"
              },
              {
                "title": "CSS",
                "img": "images/css.png"
              },
              {
                "title": "PHP",
                "img": "images/php.png"
              },
              {
                "title": "Laravel",
                "img": "images/laravel.png"
              },
              {
                "title": "VueJS",
                "img": "images/vuejs.png"
              },
              {
                "title": "Linux",
                "img": "images/linux.png"
              },
              {
                "title": "Git/Gitflow",
                "img": "images/git.png"
              },
              {
                "title": "Github",
                "img": "images/Octocat.png"
              },
              {
                "title": "JQuery",
                "img": "images/jquery.png"
              },
              {
                "title": "Node.Js",
                "img": "images/node.png"
              },
              {
                "title": "Symfony",
                "img": "images/synfony.png"
              },
              {
                "title": "CakePHP",
                "img": "images/cakephp.png"
              },
              {
                "title": "Yii",
                "img": "images/yii.png"
              },
              {
                "title": "CodeIgniter",
                "img": "images/codeigniter.png"
              },
              {
                "title": "Zend",
                "img": "images/zend.png"
              },
              {
                "title": "Drupal",
                "img": "images/drupal.png"
              },
              {
                "title": "Wordpress",
                "img": "images/wordpress.png"
              },
              {
                "title": "JavaScript",
                "img": "images/javascript.png"
              },
              {
                "title": "MySql",
                "img": "images/mysql.png"
              },
              {
                "title": "MsSQL",
                "img": "images/mssql.jpg"
              },
              {
                "title": "Oracle SQL",
                "img": "images/oracle.png"
              },
              {
                "title": "PostgreSQL",
                "img": "images/postgre.png"
              },
              {
                "title": "MongoDB",
                "img": "images/mongodb.jpg"
              },
              {
                "title": "React.js",
                "img": "images/react.png"
              },
              {
                "title": "Docker",
                "img": "images/docker.webp"
              },
              {
                "title": "Jenkins",
                "img": "images/jenkins.png"
              },
              {
                "title": "PhpUnit",
                "img": "images/phpunit.png"
              },
              {
                "title": "AWS",
                "img": "images/aws.png"
              },
              {
                "title": "BitBucket",
                "img": "images/bitbucket.png"
              },
              {
                "title": "Jira",
                "img": "images/jira.png"
              },
              {
                "title": "GitLab",
                "img": "images/gitlab.png"
              },
              {
                "title": "Ubuntu",
                "img": "images/Ubuntu.png"
              },
              {
                "title": "Azure",
                "img": "images/azure.png"
              },
              {
                "title": "Angular",
                "img": "images/angular.png"
              },
            ]
        }),
    }
</script>

<style scoped lang="scss">
     @import '../../../public/css/constants.scss';

    #skills {
        background-color: lighten(map-get($colors, dark), 100%);
    }

    @media(min-width: #{map-get($breakpoints, medium)}) {
        .section-content {
            width: 80%;
            margin: 0 auto;
        }
    }

    img{
        max-width: 120px;
    }

    .altCaption{
        color: map-get($colors, secondary);
        margin-top: 1rem;
    }
</style>
