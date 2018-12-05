<template>
    <form :group="group">
        Nom : <input type="text" id="nomG"/><br>
        Description : <textarea id="descG"> </textarea>

        <input id="subButtonG" type='button' value='CREER' @click.prevent="createNewGroup" />
    </form>

</template>

<script>
    export default {
        name: "formGroup",
        data() {
            return {
                group:{}
            }
        },
        methods: {
                createNewGroup: function () {
                    this.group = {
                        name: document.querySelector("#nomG").value,
                        description: document.querySelector("#descG").value
                    };

                    fetch("http://localhost:3000/groups/", {'method':"POST",
                        headers: {
                            "Content-type":"application/json"
                        },
                        body: JSON.stringify(this.group) }
                    )
                        .then(response => console.log(JSON.stringify(this.group)))
                        .catch(err => console.log(err))
                }

            }
    }
</script>

<style scoped>

</style>