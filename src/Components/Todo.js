import { Button, Modal } from "react-bootstrap"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {DONE, EDIT} from "../Redux/Actions/action-types"

export const Todo = ({item, index}) => {
    const selector = useSelector(state=>state.reducer.todos)
    const dispatch = useDispatch()
    const [desc,setDesc] = useState(item.description);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleClick(){
        dispatch({type: DONE, payload: item.id})
    }
    function editDesc(e){
        setDesc(e.target.value);
    }
    function handleEdit(){
      dispatch({type: EDIT, payload: {id: item.id, description: desc}})
      setShow(false)
    }
    return <div className="todo" style={{background: item.isDone?"lightgreen":"lightgrey"}}>
        <h4>Todo: {index+1}</h4>
        <p>Description: {item.description}</p>
        <Button onClick={handleClick} variant={item.isDone?"success":"primary"}>{item.isDone?"Undo":"Done"}</Button>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><input value={desc} onChange={editDesc}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
}