<template>
  <div class="personal">
    <h3>Rafael Gomes Schebuk</h3>
    <div class="data"><strong>E-mail:</strong> rafael.schebuk@gmail.com</div>
    <div class="data"><strong>Telefone:</strong> +55 (11) 98114-8558</div>
    <div class="data"><strong>Cidade:</strong> São Paulo - São Paulo - Brasil</div>
    <div class="data"><strong>Languages:</strong> Portugues e Ingles</div>
    <div class="data"><strong>Curriculo:</strong>
        <a href="Resume-en.pdf" target="_blank"><font-awesome-icon class="icon_pdf" :icon="['fas', 'file-pdf']" /></a>EN
        <a href="Curriculo-ptbr.pdf" target="_blank"><font-awesome-icon class="icon_pdf" :icon="['fas', 'file-pdf']" /></a>PT-BR
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
