<template>
  <div class="personal">
    <h3>Rafael Gomes Schebuk</h3>
    <div class="data"><strong>E-mail:</strong> rafael.schebuk@gmail.com</div>
    <div class="data"><strong>Phone:</strong> +55 (41) 99979-4586</div>
    <div class="data"><strong>City:</strong> Curitiba - PR - Brasil</div>
    <div class="data"><strong>Languages:</strong> Portugues e Ingles</div>
    <div class="data"><strong>Curriculo:</strong>
        <a href="Currículo-en.pdf" target="_blank"><font-awesome-icon class="icon_pdf" :icon="['fas', 'file-pdf']" /></a>EN
        <a href="Currículo-ptbr.pdf" target="_blank"><font-awesome-icon class="icon_pdf" :icon="['fas', 'file-pdf']" /></a>PT-BR
    </div>
    <SocialBar/>
  </div>
</template>

<script>
import SocialBar from './SocialBar.vue'

export default {
    name: 'PersonnalCard',
    components: {
        SocialBar,
    }
}
</script>

<style scoped lang="scss">
     @import '../../../public/css/constants.scss';
    .personal{
        text-align: left;
    }
    .data {
        margin-bottom: 15px;
    }
    .icon_pdf{
      font-size: 2rem;
    }
</style>
