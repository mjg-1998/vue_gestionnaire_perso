<template>
    <article class="group">
        <group :group="group"></group>
    </article>
</template>

<script>
    import group from "@/components/Group";
    export default {
        name: "OneGroup",
        components: {group},
        data() {
            return {
                group: {}
            }
        },
        created: function () {
            fetch("http://localhost:3000/groups/" + this.$route.params.id)
                .then(response => response.json())
                .then((json) => this.group = json)
                .catch(err => console.log(err));
        }
    }
</script>

<style scoped>

</style>