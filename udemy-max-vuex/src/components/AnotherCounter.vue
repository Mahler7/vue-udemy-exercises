<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            // increment: function() {
            //     this.$store.commit('increment')
            // },
            // decrement: function() {
            //     this.$store.commit('decrement');
            // }
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ]),
            // increment: function(){
            //     this.$store.dispatch('increment', by );
            // }
        }
    }
</script>