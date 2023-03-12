import fetch from "node-fetch"

export default {
    name: "Pipefy Update Card",
    description: "Pipefy Update Card Info",
    key: "pipefy_update_card",
    version: "1.0.0",
    type: "action",
    props: {
        pipefyAuth: {
            type: "app",
            app: "pipefy",
        },
        cardId: {
            type: "string",
            label: "Card ID",
        },
        fildId: {
            type: "string",
            label: "Field ID",
        },
        value: {
            type: "string",
            label: "Valor",
        }

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
                    query: 'mutation {updateCardField(input:{card_id:'+this.cardId+',field_id:"'+this.fildId+'",new_value:"'+this.value+'"}) { clientMutationId success }}'                   
                })
            })
            .catch(err => console.log(err))
    },
}