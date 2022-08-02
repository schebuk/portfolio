<template>
  <div>
    <div class="photo">
        <a>
            <img src="images/avatar.jpg" alt="photo"/>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Photo',
    props: [],
    methods: {
    },
}
</script>

<style scoped lang="scss">
    .photo {
        text-align: center;
        a:focus {
            outline: none;
        }
        img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            display: inline-block;
            margin-bottom: 20px;
        }
    }
    img {
        max-width: 100%;
    }
</style>
