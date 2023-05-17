<script setup>
import {usePersonStore} from "./Stores/PersonStore.js";

const personStore = usePersonStore();
personStore.getPersons();
</script>

<template>
    <div class="container">
        <router-link :to="{ name: 'person.index' }" class="btn btn-success m-2">People</router-link>
        <router-link :to="{ name: 'person.create' }" class="btn btn-success">Add</router-link>
        <router-view/>
    </div>
</template>
