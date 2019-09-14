var transactions = [
    { id: 4534, date: "2019–01–08", product: 112, price: 21, quantity: 2, taxes: 1.12, declined: false },
    { id: 4535, date: "2019–01–08", product: 232, price: 32, quantity: 3, taxes: 2.19, declined: false },
    { id: 4536, date: "2019–01–08", product: 554, price: 7, quantity: 100, taxes: 10.55, declined: true },
    { id: 4537, date: "2019–01–08", product: 433, price: 21, quantity: 2, taxes: 1.12, declined: false },
    { id: 4538, date: "2019–01–08", product: 112, price: 21, quantity: 4, taxes: 2.24, declined: false }
    ];

    let result = transactions.filter(product => product.product === 433);

    //console.log(result);

    let total = transactions.map(item => {
        return {
            productId: item.id,
            totalPrice: (item.price * item.quantity) + item.taxes
        }
    })

    //console.log(total[0]);

    /*let final = transactions.reduce((accum,item)=>{
        return {
            total: accum.total + item.price* item.quantity + item.taxes,
            count: accum.count + 1
        }
    },{total:0,count:0});*/

    let final = transactions.reduce((accum,item)=>{
        return accum + item.price* item.quantity + item.taxes;
    },0);

    //console.log("Final:",final);

    let totalPrice = transactions.filter(item=>!item.declined).map(item=>{
        return {
            productPrice: item.price * item.quantity + item.taxes
        }
    }).reduce((accum,item)=>{
        return accum + item.productPrice
    },0);

    console.log("totalPrice:",totalPrice)