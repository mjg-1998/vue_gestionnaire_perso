<template>
    <div class="inside-app">
<article class="groups" v-for="group in groups" :key="group._id">
    <h2>{{group.name}}</h2>
    <small>
        <router-link :to="{name:'group', params: { id:group._id}}">Voir les informations du groupe</router-link></small>
    <a href="#" @click="deleteAGroup(group)" > supprimer</a>
</article>
    </div>
</template>

<script>
    import group from "@/components/Group";
    export default {
        components: {group},
        data() {
            return {
                groups: {},
            }
        },
        created:function () {
            fetch("http://localhost:3000/groups/", {'method':"GET"})
                .then(response => response.json())
                .then((json) => this.groups = json )
                .catch(err => console.log(err));
        },methods: {
            deleteAGroup(group){
               this.$router.go('groups');
                fetch("http://localhost:3000/groups/"+group._id, {'method':"DELETE",
                    headers: {
                        "Content-type": "application/json"
                    }})
                    .then(response => response.json())
                    .then((json) => this.groups = json )
                    .catch(err => console.log(err));
                console.log("http://localhost:3000/groups/"+group._id);

            }
        }
    }
</script>

<style scoped>

</style>