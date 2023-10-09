import React, { useEffect, useState } from 'react';
import './App.css';

//////Votes calculation
// interface Code {
//   [key: string]: string | undefined
// }

// const Codes: Code = {
//   "C" : "Conservative Party",
//   "L" : "Labour Party",
//   "UKIP" : "UKIP",
//   "LD" : "Liberal Democrats",
//   "G" : "Green Party",
//   "Ind" : "Independent",
//   "SNP" : "SNP"
// }

function App() {

  ////Votes calculation
  // let totalVotes:number = 0;
  // const [htmlOutput, setHtmlOutput] = useState<any>([]);

  // useEffect(() => {
  //   ParseDataRow();
  // }, []);
  
  // const result = "Cardiff West, 11014, C, 17803, L, 4923, UKIP, 2069, LD|Islington South & Finsbury, 22547, L, 9389, C, 4829, LD, 3375, UKIP, 3371, G, 309, Ind";

  // const calculateVotes = (vote: number) => {
  //   return (vote / totalVotes) * 100;
  // }

  // const ParseDataRow = (): string => {
  //   const html: Array<any> = [];
  //   const rows = result.split('|');
  //   rows.forEach((row)=> {
  //     const datas = (row as string).split(', ');
  //     datas.forEach((data) => {
  //       console.log(typeof data);
  //       const vote = parseInt(data);
  //       if (vote) {
  //         totalVotes += vote;
  //         html.push(<div className='number'>{data}</div>);
  //         html.push(<div className='number'>{calculateVotes(vote)}%</div>);
  //       } else if ((Object).keys(Codes).includes(data)) {
  //         html.push(<div className='code'>{Codes[data]}</div>);
  //       } else {
  //         html.push(<div className='title'>{data}</div>);
  //       }
  //     })
  //   })

  //   setHtmlOutput(html);

  //   return '';
  // }


  //Split the treasure
  let total = 0
  let peopleMoney:any = [];


  const SplitMoney = (treasure: Array<number>, peopleAmount: number) => {
    const sortedTreasure = treasure.sort(function(a, b){return b - a});
    total = sortedTreasure.reduce(function (a, b) {return a + b;}, 0);

    if(total < sortedTreasure[0] * peopleAmount) {
      console.log("Nope");
    } else{
      const personRequiredMoney = total / peopleAmount;

      for(let person = 0; person< peopleAmount; person++){
        let currentNumber = sortedTreasure[0];
        let numbersAdded = [];
        if (currentNumber === personRequiredMoney) {
          numbersAdded.push(currentNumber);
        } else {
          numbersAdded.push(currentNumber);
          let totalAmount = currentNumber;
          for(let i = 1; i < sortedTreasure.length; i++) {
            if(personRequiredMoney >= sortedTreasure[i] + totalAmount) {
              numbersAdded.push(sortedTreasure[i]);
              totalAmount += sortedTreasure[i]
            }
          }
        }

        peopleMoney.push(numbersAdded);
        for(let i = 0; i < numbersAdded.length; i++) {
          const index = sortedTreasure.indexOf(numbersAdded[i]);
          if (index > -1) { // only splice array when item is found
            sortedTreasure.splice(index, 1); // 2nd parameter means remove one item only
          }
        }
      }
    }

    console.log(peopleMoney);
    return ''
  }

  return (
    <div className="App">
      {/* {htmlOutput} */}
      {SplitMoney([3,3,3,3,2,2,2,2,2,2,2,2], 4)}
    </div>
  );
}

export default App;
