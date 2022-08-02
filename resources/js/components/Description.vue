<template>
    <section id="about">
        <AnimateOnVisible name="fadeDown" :duration="1">
            <div class="title">
                <h2>Sobre Mim</h2>
                <div class="wrapper">
                    <div class="text-wrapper"></div>
                </div>
            </div>
        </AnimateOnVisible>

        <AnimateOnVisible name="fadeRight" :duration="1">
            <div class="section-content">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <Photo/>
                    </div>
                    <div class="row">
                        <div class="col-md-7 mr-auto card-mobile">
                            <Presentation/>
                        </div>
                        <div class="col-md-4 card-mobile">
                            <PersonnalCard/>
                        </div>
                    </div>
                </div>
            </div>
        </AnimateOnVisible>
    </section>
</template>

<script>
    import PersonnalCard from './PersonnalCard.vue'
    import Presentation from './Presentation.vue'
    import Photo from './Photo.vue'

    export default {
        name: 'AboutMe',
        components: {
            PersonnalCard,
            Presentation,
            Photo
        },
        title: 'Sobre Mim',
    }
</script>

<style scoped lang="scss">
     @import '../../../public/css/constants.scss';

    #about {
        background-color: lighten(map-get($colors, dark), 100%);
    }

    @media(min-width: #{map-get($breakpoints, medium)}) {
        .section-content {
            width: 80%;
            margin: 0 auto;
        }
    }

    @media(max-width: #{map-get($breakpoints, medium)}) {
        .card-mobile {
            text-align: center !important;
            margin-top: 20px;
        }
    }
</style>
