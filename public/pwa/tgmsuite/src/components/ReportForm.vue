<template>
    <!-- Vuetify Inputs for Evaluator Name, Field Name/Location-->
    <v-container>
            <v-expansion-panels>
                <v-expansion-panel v-for="(section, sectionIndex) in form.sections" :key="sectionIndex">
                    <v-expansion-panel-title>{{ section.name }}</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div v-for="(question, questionIndex) in section.questions" :key="questionIndex">
                            <label>{{ question.name }}</label>
                            <div v-if="question.type === 'text'">
                                <v-text-field type="text" v-model="formData[sectionIndex][questionIndex]"/>
                            </div>
                            <div v-if="question.type === 'select'">
                                <v-select v-model="formData[sectionIndex][questionIndex]" :items="question.options.map(option => option.name)">
                                </v-select>
                            </div>

                            <div v-if="question.type === 'radio'">
                                <v-radio-group v-model="formData[sectionIndex][questionIndex]">
                                    <v-radio v-for="(option, optionIndex) in question.options" :key="optionIndex" :label="option.name" :value="option.name"></v-radio>
                                </v-radio-group>
                        
                            </div>

                            <div v-if="question.type === 'checkbox'">
                                <v-checkbox v-for="(option, optionIndex) in question.options" :key="optionIndex" :label="option.name" v-model="formData[sectionIndex][questionIndex]"></v-checkbox>
                            </div>

                            <div v-if="question.type === 'multiple'">
                                <v-select multiple v-model="formData[sectionIndex][questionIndex]" :items="question.options.map(option => option.name)" value =''>
                                </v-select>
                            </div>

                            <div v-if="question.type === 'date'">
                                <input type="date" v-model="formData[sectionIndex][questionIndex]" />
                            </div>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
    </v-container>
</template>
<script>
    export default {
    data() {
        return {
            form:{},
            formData:{} // this is what will be sent to the server
        }
    },

    async mounted() {
        const response = await fetch('/src/templates/turfgrass-template.json');

        this.form = await response.json();

        this.formData = this.form.sections.map(section => {
            return section.questions.map(question => {
                return null;
            });
        });
    }
}
</script>

