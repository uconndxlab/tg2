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
                <v-expansion-panel>
                    <v-expansion-panel-title>Fertility and Nutrient Management</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <!--Sample list of Nutrients expressed as a grid of cards, each card item the showing Date, Location (All or Part of the field), Product Applied, Rate, NPK analysis, Compost Analysis, and BioStimulant (y/n)-->

                        <v-row>
                            <v-col cols="3" v-for="(nutrient, nutrientIndex) in nutrientsApplied" :key="nutrientIndex">
                                <v-card>
                                    <v-card-title>{{ nutrient.product }}</v-card-title>
                                    <v-card-subtitle>{{ nutrient.date }}</v-card-subtitle>
                                    <v-card-text>
                                        
                                        <!-- location, rate, npk and compost values as a v-list-->

                                        <v-list>
                                            <v-list-item>
                                                <v-list-item-content>
                                                    <v-list-item-title>Location</v-list-item-title>
                                                    <v-list-item-subtitle>{{ nutrient.location }}</v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-content>
                                                    <v-list-item-title>Rate</v-list-item-title>
                                                    <v-list-item-subtitle>{{ nutrient.rate }}</v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-content>
                                                    <v-list-item-title>NPK</v-list-item-title>
                                                    <v-list-item-subtitle>{{ nutrient.npk }}</v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-content>
                                                    <v-list-item-title>Compost</v-list-item-title>
                                                    <v-list-item-subtitle>{{ nutrient.compost }}</v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                        
                                    </v-card-text>
                                    <!-- Edit/Remove Actions -->
                                    <v-card-actions>
                                        <v-btn color="primary" @click="nutrientsApplied.splice(nutrientIndex, 1)">Remove</v-btn>
                                        <v-btn color="secondary" @click="nutrientsApplied.splice(nutrientIndex, 1)">Edit</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>

                        <!-- Button to Add Another -->
                        <v-row>
                            <v-col>
                                <!-- "Add Another" button that pops up a modal with the correct form fields -->
                                <v-btn color="primary" @click="nutrientsApplied.push({
                                    date: '03-15-23',
                                    location: 'South Side',
                                    product: 'Scotts Turf Builder',
                                    rate: '100lb',
                                    npk: '10-10-10',
                                    compost: '50',
                                    bioStimulant: 'yes'
                                })">Add Another</v-btn>


                            </v-col>
                        </v-row>
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
            formData:{}, // this is what will be sent to the server
            nutrientsApplied: [
                {
                    date: '03-15-23',
                    location: 'South Side',
                    product: 'Scotts Turf Builder',
                    rate: '100lb',
                    npk: '10-10-10',
                    compost: '50',
                    bioStimulant: 'yes'
                },

                // Another one
                {
                    date: '03-15-23',
                    location: 'South Side',
                    product: 'Scotts Turf Builder',
                    rate: '100lb',
                    npk: '10-10-10',
                    compost: '50',
                    bioStimulant: 'yes'
                }
            ]
        }
    },

    async mounted() {
        const response = await fetch('./turfgrass-template.json');

        this.form = await response.json();

        this.formData = this.form.sections.map(section => {
            return section.questions.map(question => {
                return null;
            });
        });
    }
}
</script>

