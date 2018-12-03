<template>
    <div class="empire-unit">
        <h4>Nom : {{ empire.name}}</h4>
        <h4>Description :</h4> <p>{{ empire.description}}</p>

    </div>
</template>

<script>
    export default {
        name: "empire",
        props: {
            empire: Object
        }
    }
</script>

<style scoped>

</style>