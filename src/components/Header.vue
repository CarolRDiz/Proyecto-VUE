<script>
    import Button from './Button.vue'
    import SearchBar from './SearchBar.vue'
    import TheNavigation from './TheNavigation.vue'
    import { mapState, mapGetters, mapActions } from "vuex"
    export default {
        name: 'Header',
        components:{
            Button,
            SearchBar,
            TheNavigation
        },
        data(){
            return{
                searchValue:''  
            }
        },
        computed: {
            ...mapState('user', {
            user: state => state.userData,
            }),
        },
        watch:{
            searchValue(value){
                console.log(value)
                this.$emit('search-filter', value)
            }
        },
        emits: ['search-filter'],
        
    }
</script>
<template>
    <header>
        <h1>Cursos de música</h1>
        <TheNavigation />
        <RouterLink v-if="user" to="/profile">{{ this.user.name }}</RouterLink>
        <!--<SearchBar @search-filter="$emit('search-filter')"/>-->
    </header>
</template>
