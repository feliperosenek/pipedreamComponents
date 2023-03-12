import fetch from "node-fetch"
const url = 'https://api.pipefy.com/graphql';
var options = ""
var data = ""
var field = []

export default {
    name: "Pipefy Card Info",
    description: "Get info card on Pipefy",
    key: "pipefy_card_info",
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
      }

    },
    async run() {

        options = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Authorization': "Bearer " + this.pipefyAuth.$auth.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: '{card(id: ' + this.cardId + ') {fields{field{id}, name value}}}'
            })
        };
     
        await fetch(url, options)
                .then(res => res.json())
                .then(json => {
                    data = json
                    return data
                })
                .catch(err => console.log(err))           

                field = data.data.card.fields
                var fields = {}

                for(var item of field){
                  fields[item.field.id] = item.value             
                }

                return fields
    },
  }
  