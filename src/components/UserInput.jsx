

export default function UserInput({handleChange,value}){
    
    return(
          <section id="user-input">
           <div className="input-group">
            <p>
            <label htmlFor="input1">Initial Investment</label>
            <input
          type="number" // Use text to handle decimals properly
          id="input1"
          name="initialInvestment"
          required
          value={value["initialInvestment"]}
          onChange={handleChange}
        />
        </p>
        <p>
            <label htmlFor="input1">Annual Investment</label>
            <input
          type="number" // Use text to handle decimals properly
          id="input2"
          name="annualInvestment"
          required
          value={value["annualInvestment"]}
          onChange={handleChange}
        />
        </p>
        </div>
        <div className="input-group">
        <p>
            <label htmlFor="input1">Expected Return</label>
            <input
          type="number" // Use text to handle decimals properly
          id="input3"
          name="expectedReturn"
          required
          value={value["expectedReturn"]}
          onChange={handleChange}
        />
        </p>
        <p>
            <label htmlFor="input1">Duration</label>
            <input
          type="number" // Use text to handle decimals properly
          id="input4"
          name="duration"
          required
          value={value["duration"]}
          onChange={handleChange}
        />
        </p>
        </div>
        </section>
        
    )
}