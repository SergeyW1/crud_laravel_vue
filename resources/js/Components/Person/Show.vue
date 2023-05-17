<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {usePersonStore} from "../../Stores/PersonStore.js";
import Person from "../../classes/Person.js";

const personStore = usePersonStore()
const route = useRoute()
const person = ref({})

onMounted(async () => {
    person.value = new Person(await personStore.getPerson(route.params.id))
})
</script>

<template>
    <div>
        <div>
            Name: {{ person.name }}
        </div>
        <div>
            Age: {{ person.age }}
        </div>
        <div>
            Job: {{ person.job }}
        </div>
        <router-link :to="{name: 'person.edit', params:{id: person.id}}" class="btn btn-success">
            Edit
        </router-link>
    </div>
</template>
