<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-full-name v-model="fullName"></app-full-name>
                    <div class="form-group">
                        <label for="mail">Mail:</label>
                        <input 
                            type="text"
                            class="form-control" 
                            id="mail" 
                            v-model="userData.mail">
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input 
                            type="password"
                            class="form-control" 
                            id="password" 
                            v-model="userData.password">
                    </div>
                    <div class="form-group">
                        <label for="storeData">Store in Database?
                            <label for="Yes">Yes
                            <input 
                                type="radio" 
                                id="storeData" 
                                value="Yes"
                                v-model="userData.storeData">
                            </label>

                            <label for="No">No
                            <input 
                                type="radio" 
                                id="storeData" 
                                value="No"
                                v-model="userData.storeData">
                            </label>
                        </label>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <button
                                    class="btn btn-primary" @click.prevent="submitData">Submit!
                            </button>
                        </div>
                    </div>
                    <div>

                    
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submittedData">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }} </p>
                        <p>Mail: {{ userData.mail }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ userData.storeData }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from './FullName.vue'

    export default {
        data: function(){
            return {
                userData: {
                    mail: '',
                    password: '',
                    storeData: 'Yes'
                },
                fullName: '',
                submittedData: false
            }
        },
        components: {
            appFullName: FullName
        },
        methods: {
            submitData: function(){
                this.submittedData = true;
            }
        }  
    }
</script>

<style>
</style>
