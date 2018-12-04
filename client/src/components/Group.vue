<template>
    <div class="group-unit">
        <h4>Titre : <small>{{group.name}}</small></h4>
        <h4>Description :</h4> {{group.description}}
    </div>
</template>

<script>
    export default {
        name: "Group",
        props: {
            group: Object
        }
    }
</script>

<style scoped>

</style>