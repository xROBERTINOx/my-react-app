import React,{useState} from 'react';
const Text = () => {
    const Text = () => {  
//        const array = ['test 1', 'test2', 'test3'];
        const [list, setList] = useState([])
        const [list2, setList2] = useState([])
        const handleClick = () =>{
          setList([...list, list.length])
        }
        const handleClick2 = () =>{
          setList2([...list2, list2.length])
        }
        const handleDelete = (index) => () => {
          setList(
            list.filter((value, idx) => idx !== index)
          )
        }
        const handleDelete2 = (index2) => () => {
          setList2(
            list2.filter((value, idx2) => idx2 !== index2)
          )
        }
        return(
          <div>
            {list.map((number, index) => (
              <h1 onClick={handleDelete(index)}>large task {number + 1}</h1>
            ))}      
            <h1 onClick={handleClick}>add big task</h1>
            {list2.map((value, index) => (
              <p onClick={handleDelete2(index)} key={index}>small task {value}</p>
            ))}
            <p onClick={handleClick2}>add small task</p>
          </div>
        );
      }
    return <Text />
  
  };
  
  export default Text;
  