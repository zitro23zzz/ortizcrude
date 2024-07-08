import React, {useState} from 'react';
import axios from 'axios';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

const App = () => {
  const [currentItem, setCurrentItem] = useState(null);
  const [refresh, setRefreshItem] = useState(false);

  const handleEdit = (item) =>{
    setCurrentItem(item);
  };
  const handleDelete = async (id) =>{
    try {
      await
      axios.delete(`http://localhost:8000/api/items/${id}`);
      setRefreshItem(!refresh)
    } catch (error){
      console.error('There was an error deleting the item!', error);
    }
  };
  
  const handleSuccess = () => {
    setCurrentItem(null);
    setRefreshItem(!refresh);
  };
  return (
   <div className='App'>
     <ItemForm item={currentItem} onSuccess={handleSuccess}
     />
     <ItemList key={refresh} onEdit={handleEdit} onDelete={handleDelete}/>
   </div>
  );

};

export default App;