<script setup>
import {usePersonStore} from "../../Stores/PersonStore.js";

const personStore = usePersonStore()
</script>

<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in personStore.persons" :key="person.id">
                <tr>
                    <td>
                        <router-link :to="{name: 'person.show', params: {id: person.id}} ">
                            {{ person.name }}
                        </router-link>
                    </td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td>
                        <router-link :to="{name: 'person.edit', params:{id: person.id}}" class="btn btn-success">
                            Edit
                        </router-link>
                    </td>
                    <td>
                        <button class="btn btn-danger" @click.prevent="personStore.deletePerson(person.id)">Delete
                        </button>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>
