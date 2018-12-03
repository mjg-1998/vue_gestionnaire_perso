<template>
    <div class="inside-app">
        <a href="#character" id="character" @click="displayProductForm" >Créer un nouveau personnage</a> |
        <a href="#empire" id="empire" @click="displayEmpireForm">Ajouter un empire</a>
        <a href="#group" id="group" @click="displayGroupForm">Ajouter un groupe</a>
        <form id="formcreateP">
            Nom : <input type="text" id="nomP" /><br>
            Âge : <input type="number" id="age" /><br>
            Genre : <select id="genderSelect">
            <option value="M">M</option>
            <option value="F">F</option>
        </select><br>
            Empire : <select id="selectP">
            <option v-for="option in empires" v-bind:value="option._id">
                {{option.name}}
            </option>
        </select>
            <br> Groupe : <select id="selectGroup">
            <option v-for="option in groups" v-bind:value="option._id">
                {{option.name}}
            </option>
        </select><br>
            <input id="subButtonP" type='button' value='CREER' @click.prevent="createNewCharacter" />
        </form>


        <form id="formcreateg">
            Nom : <input type="text" id="nomG"/><br>
            Description : <textarea id="descG"> </textarea>

            <input id="subButtonG" type='button' value='CREER' @click.prevent="createNewGroup" />
        </form>

        <form id="formcreateE">
            Nom : <input type="text" id="nomE" /><br>
            Couleur : <input type="color" id ="colorE"/>
            Description : <textarea id="descE"> </textarea>

            <input id="subButtonE" type='button' value='CREER' @click.prevent="createNewEmpire" />
        </form>
    </div>
</template>

<script>
    export default {
        name: "CreaForm",
        data() {
            return {
                empires: [],
            groups:[]
            }
        },
        created: function() {
            fetch("http://localhost:3000/empire/", {'method':"GET",
                })
                .then(response => response.json())
                .then((json) => this.empires = json )
                .catch(err => console.log(err));
            fetch("http://localhost:3000/groups/", {'method':"GET",
                })
                .then(response => response.json())
                .then((json) => this.groups = json )
                .catch(err => console.log(err));

        },
        methods: {
            createNewCharacter: function () {
                let select=document.querySelector("#selectP");
                let selectG=document.querySelector("#selectGroup");
                let gender=document.querySelector("#genderSelect");
                let newCharacter = {
                    name: document.querySelector("#nomP").value,
                    age: parseInt(document.querySelector("#age").value),
                    gender: gender.options[gender.selectedIndex].value,
                    empire: select.options[select.selectedIndex].value,
                    mainGroup:selectG.options[selectG.selectedIndex].value
                };

                fetch("http://localhost:3000/character/", {'method':"POST",
                    headers: {
                        "Content-type":"application/json"
                    },
                    body: JSON.stringify(newCharacter) }
                )
                    .then(response => console.log(JSON.stringify(newCharacter)))
                    .catch(err => console.log(err))
            },

            createNewGroup: function () {
                let newGroup = {
                    name: document.querySelector("#nomG").value,
                    description: document.querySelector("#descG").value
                };

                fetch("http://localhost:3000/groups/", {'method':"POST",
                    headers: {
                        "Content-type":"application/json"
                    },
                    body: JSON.stringify(newGroup) }
                )
                    .then(response => console.log(JSON.stringify(newGroup)))
                    .catch(err => console.log(err))
            },

            createNewEmpire: function () {
                let newEmpire = {
                    name: document.querySelector("#nomE").value,
                    color: document.querySelector("#colorE").value,
                    description: document.querySelector("#descE").value
                };

                fetch("http://localhost:3000/empire/", {'method':"POST",
                    headers: {
                        "Content-type":"application/json"
                    },
                    body: JSON.stringify(newEmpire) }
                )
                    .then(response => console.log(JSON.stringify(newEmpire)))
                    .catch(err => console.log(err))
            },

            displayProductForm: function () {
                document.querySelector("#formcreateP").style.display="block";
                document.querySelector("#formcreateE").style.display="none";
                document.querySelector("#formcreateg").style.display="none";

            },

            displayGroupForm: function () {
                document.querySelector("#formcreateP").style.display="none";
                document.querySelector("#formcreateE").style.display="none";
                document.querySelector("#formcreateg").style.display="block";

            },

            displayEmpireForm: function () {
                document.querySelector("#formcreateP").style.display="none";
                document.querySelector("#formcreateE").style.display="block";
                document.querySelector("#formcreateg").style.display="none";

            }
        }
    }
</script>

<style>
    #formcreateP, #formcreateg {
        display: none;
    }

</style>