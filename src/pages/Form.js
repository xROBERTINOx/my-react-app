import React,{useState} from 'react';
const Form = () => {
  const MyForm = () => {
    const [name, setName] = useState("");
  
    const handleSubmit_Name = (event) => {
      alert(`Your name is: ${name}`)
    }

    const [age, setAge] = useState("");

    const handleSubmit_Age = (event) =>{
      alert(`Your age is: ${age}`)
      
    }
        

    return (
      <div>
        <form onSubmit={handleSubmit_Name}>
          <label>Enter your name:
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>  
        <form onSubmit={handleSubmit_Age}>
          <label>Enter your age:
            <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)
            }
            />
          </label>
          <input type="submit" />
        </form>       
      </div>
    )
  }
  return <MyForm />  
  };
  
  export default Form;
  