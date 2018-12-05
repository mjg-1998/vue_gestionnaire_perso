<template>
    <article class="group">
        <group :group="group"></group>
        <table>
            <tr v-for="chara in characters">
                <td><router-link :to="{name:'character', params: { id: chara._id}}">
                    {{chara.name}}</router-link></td>

            </tr>
        </table>
    </article>
</template>

<script>
    import group from "@/components/Group";
    export default {
        name: "OneGroup",
        components: {group},
        data() {
            return {
                group: {},
                characters: []
            }
        },
        created: function () {
            fetch("http://localhost:3000/groups/" + this.$route.params.id)
                .then(response => response.json())
                .then((json) => this.group = json)
                .catch(err => console.log(err));
            fetch("http://localhost:3000/groups/" + this.$route.params.id+"/characters")
                .then(response => response.json())
                .then((json) => this.characters = json)
                .catch(err => console.log(err));
        }
    }
</script>

<style scoped>

</style>