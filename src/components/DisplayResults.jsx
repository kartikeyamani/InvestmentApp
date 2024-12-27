import {calculateInvestmentResults} from '../util/investment.js'

export default function DisplayResults({formData}){
    
        let calculatedResults=calculateInvestmentResults(formData)
        //console.log(calculatedResults)
    return(
        
        <table id="result">
            <thead>
            <tr>
               <th >Year</th>
               <th >Interest</th>
               <th >Value End of Year</th>
               <th >Annual Investment</th>
            </tr>
            </thead>
            <tbody>
                {calculatedResults.map((obj,index)=>(
                    <tr key={index}>
                        <td>{obj.year}</td>
                        <td>{obj.interest.toFixed(2)}</td>
                        <td>{obj.valueEndOfYear.toFixed(2)}</td>
                        <td>{obj.annualInvestment.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        
    )
}