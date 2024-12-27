import DisplayResults from "./components/DisplayResults";
import UserInput from "./components/UserInput"
import {useState} from 'react'


function App() {
  const [formData, setFormData] = useState({
    initialInvestment: 15000,
    annualInvestment: 1500,
    expectedReturn: 5.5,
    duration: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate to allow only numbers and decimals
    if (/^\d*\.?\d*$/.test(value)) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: +value, // Update only the field being changed
        }));
      }
    };
    const inputisValid=formData.duration>0
    
  return (
    <>
      <UserInput handleChange={handleChange} value={formData}/>
      {!inputisValid&&<p className="center">Please enter a duration greater than zero</p>}
      {inputisValid&&<DisplayResults formData={formData}/>}

    </>
  )
}

export default App
