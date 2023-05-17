<script setup>
import { usePersonStore } from "../../Stores/PersonStore.js";
import { useRoute } from "vue-router";
import { onBeforeMount, ref } from "vue";
import Person from "../../classes/Person.js";
import { storeToRefs } from "pinia";

const personStore = usePersonStore();
const route = useRoute();
const person = ref({});
const { isDisabled } = storeToRefs(personStore);

onBeforeMount(async () => {
    person.value = new Person(await personStore.getPerson(route.params.id));
    // route.params.id - получаем айди пользователя
    // personStore.getPerson() - возвращает объект с данным пользователем
    // person.value = лежит объект данного пользователя
});
</script>

<template>
    <div>
        <div class="w-25">
            <div class="mb-3">
                <input
                    type="text"
                    placeholder="name"
                    v-model="person.name"
                    class="form-control"
                />
            </div>
            <div class="mb-3">
                <input
                    type="number"
                    placeholder="age"
                    v-model="person.age"
                    class="form-control"
                />
            </div>
            <div class="mb-3">
                <input
                    type="text"
                    placeholder="job"
                    v-model="person.job"
                    class="form-control"
                />
            </div>
            <div class="mb-3">
                <button
                    class="btn btn-primary"
                    @click.prevent="
                        personStore.updatePerson(route.params.id, person)
                    "
                    :disabled="isDisabled(person.name, person.age, person.job)"
                >
                    Add
                </button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="number"
                    v-model="person.age"
                    class="form-control"
                />
            </div>
        </div>
    </div>
</template>