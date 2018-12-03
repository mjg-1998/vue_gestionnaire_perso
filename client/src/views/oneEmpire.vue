<template>
    <article class="empire">
        <empire :empire="empire"></empire>
    </article>
</template>

<script>
    import Empire from "../components/Empire";
    export default {
        name: "oneEmpire",
        components: {Empire},
        data() {
            return {
                Empire: 1,
                empire: {}
            }
        },
        created: function () {
            fetch("http://localhost:3000/empire/" + this.$route.params.id)
                .then(response => response.json())
                .then((json) => this.empire = json)
                .catch(err => console.log(err));
        }}
</script>

<style scoped>

</style>