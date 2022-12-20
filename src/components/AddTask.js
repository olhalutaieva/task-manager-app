import { useState } from 'react';
import Swal from "sweetalert2"

const AddTask = ({onSave}) => {
  const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const onSubmit = (e) => {
    e.preventDefault();
    if (!text && !day) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your title and task or close the form!'
        })
    } else if (!text && day) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your title!'
        })
    } else if (text && !day) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill in your task!'
        })
    } else {
        onSave({ text, day });
    }
    setText('');
    setDay('');
}
  return (
      <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
              <label>Title</label>
              <input type="text" placeholder="Title" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div className="form-control">
              <label>Task</label>
              <input type="text" placeholder="Task" value={day} onChange={(e) => setDay(e.target.value)} />
          </div>
          <input type="submit" className="btn btn-block" value="Save Task" />
      </form>
    )
}
export default AddTask