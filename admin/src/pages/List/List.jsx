import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios";
import { toast } from 'react-toastify';

const List = ({url}) => {
 
  const [list,setList] = useState([]);

  const fetchList = async () => {

    const response = await axios.get(`${url}/api/food/food-list`)
    //console.log(response.data);
    if(response.data.success){
      setList(response.data.data);
    }else{
      toast.error("Error")
    }
  }
  const removeFood = async (foodId) => {
    //console.log(foodId);
    try {
      const response = await axios.delete(`${url}/api/food/delete-food/${foodId}`);
      //console.log(response);
      if (response.data.success) {
        toast.success('Food item deleted successfully');
        await fetchList();
      } else {
        toast.error('Failed to delete food item');
      }
    } catch (error) {
      toast.error('Error deleting food item');
      console.error("Delete error:", error);
    }



  }

  useEffect(()=>{
 fetchList()
  },[])
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Description</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/` + item.image} alt=""/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>

              </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default List
