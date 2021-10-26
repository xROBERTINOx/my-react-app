import React,{useState} from 'react';
const TextArea = () => {
  function TextArea() {
    const [textarea, setTextarea] = useState(
      "The content of a textarea goes in the value attribute"
    );
  
    const handleChange = (event) => {
      setTextarea(event.target.value)
    }
    
    return (
      <form>
        <textarea 
          rows={10}
          value={textarea}
          onChange={handleChange} />
      </form>
    )
  }
  return <TextArea />  
  };
  
  export default TextArea;
  