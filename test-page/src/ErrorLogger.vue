<template>
    <div class="error-logger-component">
        <div class="wrapper">
            <b-card class="square-border text-center" header-tag="header" footer-tag="footer">
                <b-container>
                    <b-row>
                        <b-col lg="10" offset-lg="2">
                            <b-alert v-if="errorLog.length" show variant="danger">
                                <p v-for="error in errorLog" :key="error.id">
                                    {{ error.content }}
                                </p>
                            </b-alert>

                            <pre v-if="!errorLog.length">
                                <p class="sm-text"> No errors </p>
                            </pre>
                        </b-col>
                    </b-row>
                </b-container>
            </b-card>
        </div>
    </div>
</template>

<script>
import {Card} from 'bootstrap-vue/es/components'

export default {
  name: 'error-logger',
  props: ['client'],
  created() {
    const comp = this
    comp.client.on('error', (error, event, topic) => {
        
        comp.$data.errorLog.push({
            id: comp.$data.errorLog.length + 1, 
            content: JSON.stringify({error, event, topic}) 
        })
    })
  },
  data: function() {
    return {
        errorLog: []
    }
  }
}
</script>

<style scoped>
</style>
