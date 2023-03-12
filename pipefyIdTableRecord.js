import fetch from "node-fetch"
const url = 'https://api.pipefy.com/graphql';
var options = ""
var data = ""
var phaseH = []

export default {
    name: "Pipefy Get ID Record Table",
    description: "Get id from record table",
    key: "pipefy_id_record_table",
    version: "0.0.1",
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
                query: '{card(id: ' + this.cardId + '){phases_history{ phase { name } lastTimeOut  }}}'
            })
        }
     
        await fetch(url, options)
                .then(res => res.json())
                .then(json => {
                    data = json                
                    return data
                })
                .catch(err => console.log(err))    
                               
                phaseH = data.data.card.phases_history
                var fields = {}

                for(var item of phaseH){
                  console.log(item)
                  fields[item.phase.name] = item.lastTimeOut             
                }
                
                return fields
    },
  }
  