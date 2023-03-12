import fetch from "node-fetch"

export default {
    name: "Pipefy Update Database",
    description: "Update records in database",
    key: "pipefy_update_records",
    version: "0.0.1",
    type: "action",
    props: {
        pipefyAuth: {
            type: "app",
            app: "pipefy",
        },
        recordId: {
            type: "string",
            label: "Table Record ID",
        },
        fieldId: {
            type: "string",
            label: "Id do campo",
        },        
        fieldValue: {
            type: "string",
            label: "Valor do campo",
        },


    },
    async run() {

        await fetch('https://api.pipefy.com/graphql', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Authorization': "Bearer " + this.pipefyAuth.$auth.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: 'mutation { setTableRecordFieldValue(input: { table_record_id: '+this.recordId+', field_id: "'+this.fieldId+'", value: "'+this.fieldValue+'"}) { table_record { id title } table_record_field { date_value datetime_value filled_at float_value indexName name native_value report_value required updated_at value } } }'
                })
            })
            .catch(err => console.log(err))

            
    },
}