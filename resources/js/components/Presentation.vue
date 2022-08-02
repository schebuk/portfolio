<template>
  <div class="paragraph">
    <div class="begin">Experiência profissional com Banco de Dados Mysql, MS SQL, Oracle, HTML, CSS, Javascript, PHP(4, 5 e 7), Ajax, Jquery, websockets e com utilização de frameworks(ZEND framework 1 e 2, Symfony 2, Laravel 5 7 e 8, CakePHP 2 e 3), Bootstrap, Node.js, React, VueJs, controle de versionamento com Git e SVN, configuração de servidor AWS e com metodologia SCRUM e Kanban</div>
  </div>
</template>

<script>
export default {
    name: 'Description',
}
</script>

<style scoped lang="scss">
     @import '../../../public/css/constants.scss';

    .paragraph {
        text-align: justify;
        color: map-get($colors, primary);
        .begin {
            color: map-get($colors, secondary);
        }
    }
</style>
