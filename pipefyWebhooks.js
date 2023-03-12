const express = require('express');
const axios = require('axios')
const app = express();
var phaseId = []
var info = []
var api = []
var date = ""

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.post('/pipe-pedidos', async (req, res) => {

  date = new Date()

  info = req.body.data
  api.push(info)

  phaseId = req.body.data.to.id

  if(phaseId == "310523364"){ 
    
    console.log("[Pipe Pedidos]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)    
   
    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body.data,
    url: "https://eo4r0f2xwt5bfc4.m.pipedream.net"
    }

    await axios(options)

    res.status(200).end()
  }

  if(phaseId == "311232364"){ 
    
    console.log("[Pipe Pedidos]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
      
    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body.data,
    url: "https://eownrtbxf42g5iq.m.pipedream.net"
    }

    await axios(options)

    res.status(200).end()
  }

  return api

});

app.get('/api', async (req, res) => {
    res.send(api)
})

app.post('/pipe-associados', async (req, res) => {
  date = new Date()
  
  
  info = req.body.data
  api.push(info)
  
  phaseId = req.body.data.to.id

  if(phaseId == "316891688"){
    
    console.log("[Pipe Associados]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
    
    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body.data,
    url: "https://eot9ant5nl3yh5q.m.pipedream.net"
    }

    await axios(options)

    res.status(200).end()
  }

  return api

});

app.post('/pipe-servicos', async (req, res) => {
  date = new Date()

  info = req.body.data
  api.push(info)
  phaseId = req.body.data.to.id

  if(phaseId == "311283175"){
    
   console.log("[Pipe Serviços]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
    

    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body.data,
    url: "https://eokfrenqj4pqhcr.m.pipedream.net"
    }

    await axios(options)

    res.status(200).end()
  }

  return api

});

app.post('/pipe-liga', async (req, res) => {
  date = new Date()

  info = req.body.data
  api.push(info)
  
  phaseId = req.body.data.to.id

  if(phaseId == "315282518"){
    
   console.log("[Pipe Liga]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
    
    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body.data,
    url: "https://eov7j1f3uwn7i6w.m.pipedream.net"
    }

    await axios(options)

    res.status(200).end()
  }

  if(phaseId == "315282523"){ 
    
   console.log("[Pipe Liga]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
        
   console.log(info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)

    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body.data,
    url: "https://eoe8jc2i2i640d1.m.pipedream.net"
    }

    await axios(options)

    res.status(200).end()
  }

  if(phaseId == "315282527"){ 
    
   console.log("[Pipe Liga]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
    
    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body.data,
    url: "https://eo65mx1ja7g7la8.m.pipedream.net"
    }

    await axios(options)

    res.status(200).end()
  }

  return api

});

app.post('/pipe-juridico', async (req, res) => {
  date = new Date()  
  info = req.body.data
  var check = ''
   
  infos = {
    "pipe":"sou-juridico",
    "action":info.action,
    "cardTitle":info.card.title,
    "lastPhase":info.from.name,
    "phase":info.to.name,
    "moved":info.moved_by.name,
    "datetime":date
  }
  
  api.push(infos)
    
  phaseId = req.body.data.to.id
    
  optionsPipe = {
        method: 'POST',
        url : 'https://api.pipefy.com/graphql',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDE5OTU2ODEsImVtYWlsIjoiZmVsaXBlcm9zZW5la0BnbWFpbC5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMTQyMDIwfX0.JugAF92MqbUV_fLVKEcF5jUI3G4G2hlAmLeBJ-dEfsEIlX3gdKO1IfbQRUYvHvAk569vuD9K_zCrKylY6R6agw',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            query: '{card(id: '+req.body.data.card.id+') {fields{name value }}}'
        })
    };

    await axios(optionsPipe)
      .then(function (response) {
        data = response.data.data.card.fields
        return data
    })
    .catch(function (error) {
       console.log(error);
    })

    data.forEach(function(item){
    if(item.name == 'Enviar procuração farmácia de alto custo'){
      check = item.value
    return check
    }      
  })

  if(phaseId == "314055677" && check.length != 2){
     console.log("[Pipe Juridico] "+info.action+" ("+info.card.title+") de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
    
     const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body.data,
    url: "https://eousqutgxeqh0zm.m.pipedream.net"
    }  
    await axios(options)   
  }
  
  res.status(200).end()     
  return api
  
  });

  app.post('/pipe-comunicacao', async (req, res) => {
    date = new Date()  
    info = req.body.data
    var options = ''
       
    infos = {
      "pipe":"sou-comunicacao",
      "action":info.action,
      "cardTitle":info.card.title,
      "lastPhase":info.from.name,
      "phase":info.to.name,
      "moved":info.moved_by.name,
      "datetime":date
    }
    
    api.push(infos)
    
    phaseId = req.body.data.to.id
    
    if(phaseId == "318409148"){
      
    console.log("[Pipe Comunicação] "+info.action+" ("+info.card.title+") de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
          
      options = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      mode: "cors",
      data: req.body.data,
      url: "https://eo77qwdnypcffz8.m.pipedream.net"
      }
    
      await axios(options)   
    }
    
    console.log(req.body.data)
    
        
     if(phaseId == "318021433"){
             
    console.log("[Pipe Comunicação] "+info.action+" ("+info.card.title+") de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)

      options = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      mode: "cors",
      data: {body:req.body.data},
      url: "https://0574071a03a930af20271fa9e74f5062.m.pipedream.net"
      }
    
      await axios(options)   
    }
    
    res.status(200).end()
    
    return api
    
    });

app.post('/ass-associado', async (req, res) => {
  date = new Date()    
  
  if(req.body.name == "Termo de Adesão à Associação Terapêutica"){
    
    console.log("[Ass Associado] Contrato Assinado por: "+req.body.signers[0].name+" - "+date)
       
    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body,
    url: "https://eobu76uz85insuz.m.pipedream.net"
    }
  
    await axios(options)   
   
  res.status(200).end()
    
  }  
  });

app.post('/ass-comunicacao', async (req, res) => {
  date = new Date()   
 
  if(req.body.name == "Termo de concessão de uso de imagem"){
    
    console.log("[Ass Comunicação] Contrato Assinado por: "+req.body.signers[0].name+" - "+date)
       
    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body,
    url: "https://eo8g7v59cszwerv.m.pipedream.net"
    }
  
    await axios(options)   
   
  res.status(200).end()
    
  }  
  });

app.post('/ass-consentimento', async (req, res) => {
  date = new Date()  

  if(req.body.name == "Termo de Consentimento Livre e Esclarecido"){
    
    console.log("[Ass Consentimento] Contrato Assinado por: "+req.body.signers[0].name+" - "+date)
       
    const options = {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    mode: "cors",
    data: req.body,
    url: "https://eotfocfqrifr17d.m.pipedream.net"
    }
  
    await axios(options)   
   
  res.status(200).end()
    
  }  
  });

  //testee

  app.post('/ass-procuracao', async (req, res) => {
    date = new Date()  
  
    if(req.body.name == "Procuração Pontual"){
      
      console.log("[Ass Procuração] Procuração Assinada por: "+req.body.signers[0].name+" - "+date)
         
      const options = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      mode: "cors",
      data: req.body,
      url: "https://eo8d11dz3hnncjo.m.pipedream.net"
      }
    
      await axios(options)   
     
    res.status(200).end()
      
    }  
    });

app.listen(process.env.PORT || 3000, () => {
    console.log('Webhooks Pipefy API RUN!');
  });
  
