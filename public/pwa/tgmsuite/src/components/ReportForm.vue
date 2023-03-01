<template>
    <!-- Vuetify Inputs for Evaluator Name, Field Name/Location-->
    <v-container>
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-title>Report Information</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                    v-model="evaluatorName"
                                    label="Evaluator Name"
                                    outlined
                                    dense
                                />
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                    v-model="fieldName"
                                    label="Field Name/Location"
                                    outlined
                                    dense
                                />
                            </v-col>
                        </v-row>
                        <!-- Vuetify Inputs for Date, Time, and Weather -->
                        <v-row>
                            <v-col cols="12" sm="4">
                                <v-text-field
                                    v-model="date"
                                    label="Date"
                                    outlined
                                    dense
                                />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-title>Field Usage Information</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-combobox
                                label="Multiple Sport Usage?"
                                :items="['Yes', 'No']"
                                ></v-combobox>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <v-combobox
                                :items="['baseball', 'softball', 'rugby', 'soccer', 'football', 'field hockey', 'track & field', 'lacrosse', 'other']"
                                label="Sports Played on This Field"
                                multiple
                                chips
                                ></v-combobox>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-title>General Information</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-table>
                                    <thead>
                                    <tr>
                                        <th class="text-left">
                                        Turfgrass Species
                                        </th>
                                        <th class="text-left">
                                        %
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Kentucky Bluegrass</td>
                                            <td>
                                                <v-combobox
                                                :items="['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100']"
                                                density="compact"
                                                
                                                variant="underlined"
                                                ></v-combobox>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Tall Fescue</td>
                                            <td>
                                                <v-combobox
                                                :items="['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100']"
                                                
                                                density="compact"
                                                variant="underlined"
                                                ></v-combobox>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Perennial Ryegrass</td>
                                            <td>
                                                <v-combobox
                                                :items="['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100']"
                                                
                                                density="compact"
                                                variant="underlined"
                                                ></v-combobox>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Fine Leaf Fescue</td>
                                            <td>
                                                <v-combobox
                                                :items="['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100']"
                                                
                                                density="compact"
                                                variant="underlined"
                                                ></v-combobox>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Other</td>
                                            <td>
                                                <v-combobox
                                                :items="['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100']"
                                                
                                                density="compact"
                                                variant="underlined"
                                                ></v-combobox>
                                            </td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </v-col>

                            <v-col cols="12">
                              <v-table>
                                    <thead>
                                    <tr>
                                        <th class="text-left">
                                        Field Establishment
                                        </th>
                                        <th class="text-left">
                                        Value
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Age</td>
                                            <td>
                                                <v-text-field
                                                variant="underlined"
                                                density = "compact"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Sun</td>
                                            <td>
                                                <v-text-field
                                                variant="underlined"
                                                density = "compact"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Seed</td>
                                            <td>
                                                <v-text-field
                                                variant="underlined"
                                                density = "compact"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Shade</td>
                                            <td>
                                                <v-text-field
                                                variant="underlined"
                                                density = "compact"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Sod</td>
                                            <td>
                                                <v-text-field
                                                variant="underlined"
                                                density = "compact"
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </v-table>
                                <v-alert color="warning">Note: Please confirm the fields in the "Field Establishment" section!</v-alert>
                            </v-col>
                            <v-col cols="12">
                                <v-table>
                                    <thead>
                                    <tr>
                                        <th class="text-left">
                                        Renovation History
                                        </th>
                                        <th class="text-left">
                                        Value
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Percent Renovated</td>
                                            <td>
                                                <v-combobox
                                                :items="['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100']"
                                                chips
                                                density="compact"
                                                variant="underlined"
                                                ></v-combobox>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Date of Renovation</td>
                                            <td>
                                                <v-text-field
                                                    v-model="date"
                                                    label="Date"
                                                    density="compact"
                                                    variant="underlined"
                                                />

                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Renovation Type</td>
                                            <td>
                                                <v-text-field
                                                    
                                                    density="compact"
                                                    variant="underlined"
                                                />

                                            </td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-combobox
                                label="Thatch Accumulation"
                                :items="['< 1/2 inch', '1/2 - 1 inch', '1 - 2 inches', '> 2 inches']"
                                ></v-combobox>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <v-combobox
                                label="Color"
                                chips
                                clearable
                                :items="['dark green', 'medium green', 'med/light green', 'light green', 'yellow-green', 'turf dormant' ]"
                                ></v-combobox>
                            </v-col>

                            <v-col cols="12" sm="4">
                                <v-text-field
                                label="Texture"
                                variant="underlined"
                                density="compact"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="4">
                                <v-text-field
                                label="Depth"
                                variant="underlined"
                                density="compact"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="4">
                                <v-text-field
                                label="Condition"
                                variant="underlined"
                                density="compact"
                                ></v-text-field>
                            </v-col>

                        </v-row>
                    </v-container>
                </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-title>Quality Checklist</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-table>
                                        <thead>
                                        <tr>
                                            <th class="text-left">
                                            Turf Quality
                                            </th>
                                            <th class="text-left">
                                            Value
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Percent Turf Coverage</td>
                                                <td>
                                                    <v-combobox
                                                    :items="['1: 0-10', '2: 11-20', '3: 21-30', '4: 31-40', '5: 41-50', '6: 51-60', '7: 61-70', '8: 71-80', '9: 81-90', '10: 91-100']"
                                                    chips
                                                    density="compact"
                                                    variant="underlined"
                                                    ></v-combobox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Smoothness</td>
                                                <td>
                                                    <v-combobox
                                                    :items="[1, 2, 3 ,4, 5]"
                                                    chips
                                                    density="compact"
                                                    variant="underlined"
                                                
                                                    ></v-combobox>

                                                </td>
                                            </tr>
                                        </tbody>
                                </v-table>
                            </v-col>
                            <v-col cols="12"> 
                                <v-alert color="success">This is where the TURF RATING calculation will appear.</v-alert>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-table>
                                    <thead>
                                    <tr>
                                        <th class="text-left">
                                        Surface Rating Codes
                                        </th>
                                        <th class="text-left">
                                        Value
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Stones at Surface</td>
                                            <td>
                                                <v-combobox
                                                :items="['0: None', '1: Some', '2: Many']"
                                                chips
                                                density="compact"
                                                variant="underlined"
                                                ></v-combobox>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Percent of Weeds</td>
                                            <td>
                                                <v-combobox
                                                :items="['0: 0-10', '1: 11-20', '2: 21-30', '3: 31-40', '4: 41-100']"
                                                chips
                                                density="compact"
                                                variant="underlined"
                                               
                                                ></v-combobox>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Depressions</td>
                                            <td>
                                                <v-combobox
                                                :items="['0: None', '1: Few', '2: Moderate', '3: Many', '4: Extreme']"
                                                chips
                                                density="compact"
                                                variant="underlined"
                                                ></v-combobox>
                                            </td>
                                        </tr>
                                    </tbody>

                                </v-table>
                            </v-col>
                            <v-col cols="12"> 
                                <v-alert color="success">This is where the SURFACE RATING calculation will appear.</v-alert>
                            </v-col>

                            <v-col cols="12"> 
                                <h3> Overall Rating </h3>
                                <v-alert color="success">This is where the OVERALL RATING CODE calculation will appear.</v-alert>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <v-text-field
                                label="Wear Damage"
                                variant="underlined"
                                density="compact"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <v-text-field
                                label="Events Per Week"
                                variant="underlined"
                                density="compact"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                    </v-container>
                </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-title>Fertility/Nutrient Information</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-table>
                                        <thead>
                                        <tr>
                                            <th class="text-left">
                                            Turf Quality
                                            </th>
                                            <th class="text-left">
                                            Value
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Percent Turf Coverage</td>
                                                <td>
                                                    <v-combobox
                                                    :items="['1: 0-10', '2: 11-20', '3: 21-30', '4: 31-40', '5: 41-50', '6: 51-60', '7: 61-70', '8: 71-80', '9: 81-90', '10: 91-100']"
                                                    chips
                                                    density="compact"
                                                    variant="underlined"
                                                    ></v-combobox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Smoothness</td>
                                                <td>
                                                    <v-combobox
                                                    :items="[1, 2, 3 ,4, 5]"
                                                    chips
                                                    density="compact"
                                                    variant="underlined"
                                                
                                                    ></v-combobox>

                                                </td>
                                            </tr>
                                        </tbody>
                                </v-table>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-expansion-panel-text>
            </v-expansion-panel>

        </v-expansion-panels>




    </v-container>
</template>
<script>
    export default {
    data() {
        return {
            greeting: 'Hello World!'
        }
    }
}
</script>

<style scoped>
 td:nth-child(2) {
    width:400px;
 }
</style>