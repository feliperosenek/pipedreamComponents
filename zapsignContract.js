import fetch from "node-fetch"
var inputs = {}
var contract = {}
var dataRequest = []

export default {
    name: "Zapsign Contract",
    description: "Make Zapsign New Contract",
    key: "zapsign_contract",
    version: "1.3.1",
    type: "action",
    props: {  
      externalId: {
        type: "string",
        label: "Id do card no contrato",
      },
      zapsignToken:{
        type: "string",
        label: "Token do Zapsign",
      },
      templateId: {
        type: "string",
        label: "Zapsign Template ID",
        reloadProps: true,
      },
    },
    async additionalProps() {
       const props = {}
          
         await fetch("https://api.zapsign.com.br/api/v1/templates/"+this.templateId+"?api_token="+this.zapsignToken+"", {method: 'GET', redirect: 'follow'})
          .then(res => res.json())
          .then(json => {
              inputs = json.inputs
              return inputs
          })
          .catch(err => console.log(err)) 
     
        for (let i = 0; i < inputs.length; i++) {
            props["prop"+i] = {
                type: "string",
                label: inputs[i].variable,
                optional: true,
              };
        }

        return props
    },
    async run() {

          await fetch("https://api.zapsign.com.br/api/v1/templates/"+this.templateId+"?api_token="+this.zapsignToken, {method: 'GET', redirect: 'follow'})
          .then(res => res.json())
          .then(json => {
              inputs = json.inputs
              return inputs
          })
          .catch(err => console.log(err)) 

          for(var i=0;i<inputs.length;i++){
              dataRequest.push({"de": "" +inputs[i].variable,
              "para": "" + this['prop'+i]})
          }
  
        var optionsZap = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "sandbox": false,
                "template_id": this.templateId,
                "signer_name": "souCannabis",
                "send_automatic_email": true,
                "send_automatic_whatsapp": false,
                "lang": "pt-br",
                "external_id": this.externalId,
                "data": dataRequest
            })
        };

        console.log(dataRequest)

       await fetch('https://api.zapsign.com.br/api/v1/models/create-doc/async/?api_token='+this.zapsignToken, optionsZap)
                .then(console.log("Contrato criado com sucesso") )  
                 .catch(err => console.log(err));        

              
    },
  }
  