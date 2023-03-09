export const call = async () => {
  const res = await fetch("https://api.frankfurter.app/currencies");
  const data = await res.json();

  const array = [];

  for (const p in data) {
    array.push({ symbol: p, name: data[p] });
  }

  return array;
};

export const callConvert = async (data) => {
  const rest = await fetch(
    "https://api.frankfurter.app/latest?from=" + data.symbol
  );
  const data2 = await rest.json();

  const rates = [];

  for (const obj in data2.rates) {
    rates.push({ symbol: obj, change: data2.rates[obj] });
  }

  return { data: data2, rates };
};

export const conversion = async (amount,from,to)=>{

    const rest = await fetch("https://api.frankfurter.app/latest?amount="+amount+"&from="+from+"&to="+to)
    const data = await rest.json();

    // {
    //     "amount": 10.0,
    //     "base": "GBP",
    //     "date": "2023-03-03",
    //     "rates": {
    //       "USD": 11.9903
    //     }
    //   } ejemplo de respuesta

    return data
}

export const conversionAll = async (amount,from, array)=>{

    let to ="";

     array.forEach(e => {
         to = to+e.symbol+","
     });

     to=to.substring(0,to.length-1)



     const rest = await fetch("https://api.frankfurter.app/latest?amount="+amount+"&from="+from+"&to="+to)
     const data = await rest.json();
    
     const rates = [];

  for (const obj in data.rates) {
    rates.push({ symbol: obj, change: data.rates[obj] });
  }


    return rates

} 