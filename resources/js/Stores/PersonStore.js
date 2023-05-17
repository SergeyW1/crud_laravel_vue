import axios from "axios";
import {defineStore} from "pinia";
import router from "../router.js";
import Person from "../classes/Person.js";

export const usePersonStore = defineStore('personStore', {
    state: () => ({
        persons: [],
    }),
    actions: {
        async getPersons() {
            try {
                const response = await axios.get('/api/people') // получаем коллекцию
                this.persons = response.data.data.map(item => new Person(item))
                await router.push({name: 'person.index'})
            } catch (e) {
                console.log("Error", e);
            }
        },
        async getPerson(id) {
            try {
                const response = await axios.get(`/api/people/${id}`)
                return response.data.data // возвращаем объект пользователя через ресурсы
            } catch (e) {
                console.log("Error", e);
            }
        },
        async addPerson(modal) {
            try {
                const response = await axios.post('/api/people', modal)
                this.persons.push(response.data)
                modal.cleanObj()
                await router.push({name: 'person.index'})
            } catch (e) {
                console.log("Error", e);
            }
        },
        async updatePerson(id, obj) {
            try {
                const prevObj = this.persons.find(x => x.id === +id) // находим в массиве подходящего пользователя по айди
                const result = Object.assign(prevObj, obj) // и делаем слияние объектов
                await axios.patch(`/api/people/${id}`, result) // отправляем изменения на бэк
                await router.push({name: 'person.show'}) // переходим на главную страницу
            } catch (e) {
                console.log("Error", e);
            }
        },
        async deletePerson(id) {
            try {
                await axios.delete(`/api/people/${id}`)
                return this.getPersons()
            } catch (e) {
                console.log("Error", e);
            }
        }
    },
    getters: {
        isDisabled: () => {
            return (name, age, job) => !(name && age && job)
            // если у нас заполнены все поля то false - disabled будет false и кнопка будет активна
        }
    }
})
