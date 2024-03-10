import React, { useEffect, useState } from 'react';

function Stock(){

    const [stockChartXvalues,setXvalues]=useState([])
    const [stockChartYvalues,setYvalues]=useState([])

    useEffect(()=>{
        fetchStock()
    })

   const  fetchStock=()=>{
                const API_KEY='AXMQTK13APVVI13B'
                const symbol = "AMZN"
                // const API_CALL=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`      //compact

                const API_CALL=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&outputsize=1year&apikey=${API_KEY}`

            fetch(API_CALL)
            .then(function (response){
                  return response.json()
            })
            .then(function(data){
                console.log(data)
            })

    }

    return(
            <div>
                <h1>STOCK MARKET</h1>
            </div>
    )
}

export default Stock;


