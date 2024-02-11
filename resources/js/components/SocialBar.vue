 <template>
  <div class="social-wrap">
    <ul>
      <li>
        <a href="https://github.com/schebuk" target="_blank">
          <font-awesome-icon class="icon" :icon="['fab', 'square-github']" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/rafael-schebuk-6295a542/" target="_blank">
          <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'SocialBar',
    }
</script>

<style scoped lang="scss">
     @import '../../../public/css/constants.scss';
 .social-wrap {
   ul{
    padding:0
   }
    li {
      display: inline-block;
      margin:0 10px 0 0;
    }
    .icon {
      font-size: 2rem;      
      color: #3c6e71;
    }
  }
</style>
