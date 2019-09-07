const lastIntent = {
    "modelurl": "http://virt-asst-content-stable.api.247-inc.net/v1/virtualagents/clients/247marketing/applications/shope/models/20190626T1155/root_intent",
    "lastInput": "day _class_date ^date=^month=^year=^special_date=",
    "intents": [
      {
        "className": "representative-request",
        "score": 0.020207911666711202
      },
      {
        "className": "greet-hello",
        "score": 0.013005033048092559
      },
      {
        "className": "no-give",
        "score": 0.006403122796162294
      },
      {
        "className": "yes-give",
        "score": 0.005809553250071418
      },
      {
        "className": "product_search-inventory_price",
        "score": 0.00378870596853066
      }
    ],
    "entities": [
      {
        "name": "date",
        "value": "friday"
      }
    ]
  };

  const getEntity = lasteIntent => {
      if(lasteIntent.entities){
          console.log(lasteIntent.entities[0].name)
          let day = lasteIntent.entities[0].value;
          switch(day){
            case 'monday': return 1;
            case 'tuesday': return 2;
            case 'wednesday': return 3;
            case 'thursday': return 4;
            case 'friday': return 5;
            default: return 6;
          }
      }
  }

  console.log(getEntity(lastIntent));

  let q="hour=1^minute=00^am_pm=pm";

  if(q.includes('hour') && q.includes('am_pm') && q.includes('minute')){
    console.log(q.split('^')[0]);
    let splitTime = q.split('^');
    let time = splitTime[0].split('=')[1] + splitTime[2].split('=')[1]
    console.log(time);
  }