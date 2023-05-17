<script setup>
import {ref} from "vue";
import {usePersonStore} from "../../Stores/PersonStore.js";
import Person from "../../classes/Person.js";
import {storeToRefs} from "pinia";

const personStore = usePersonStore();
const modal = ref(new Person({}));
const {isDisabled} = storeToRefs(personStore) // валидация полей на заполненность
</script>

<template>
    <div class="w-25">
        <div class="mb-3">
            <input
                type="text"
                placeholder="name"
                v-model="modal.name"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <input
                type="number"
                placeholder="age"
                v-model="modal.age"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <input
                type="text"
                placeholder="job"
                v-model="modal.job"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <button
                class="btn btn-primary"
                @click.prevent="personStore.addPerson(modal)"
                :disabled="isDisabled(modal.name, modal.age, modal.job)"
            >
                Add
            </button>
        </div>
    </div>
</template>
