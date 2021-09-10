import React, {useState} from 'react';

const ToDoList = () => {

    const [formInfo, setFormInfo] = useState({
        errand:""
    })

    const [listOfErrands, setlistOfErrands] = useState([])

    const changeHandler = (e)=>{
        console.log("keep going...", e.target.value)

        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const addErrand = (e)=>{
        e.preventDefault()
        console.log("you almost there foo")
        console.log(formInfo)

        setlistOfErrands([...listOfErrands,formInfo])
        setFormInfo({
            errand:""
        })
    }
    const deleteErrand = (e,i)=>{
        console.log("you deleted this errand foo")

        let newListOfErrands = listOfErrands.filter((errand,ei)=>{
            return ei != i
        })
        console.log(newListOfErrands)
        setlistOfErrands(newListOfErrands)
    }

    

    return (
        <div>
            <form onSubmit={addErrand}>
                <label htmlFor="">Errand:</label>
                <input onChange={(e)=>changeHandler(e)} type="text" name="errand" value={formInfo.errand} />
                <input type="submit" />
            </form>
            <hr />
            {
                listOfErrands.map((errand,i)=>{
                    return <div key={i}>{errand.errand}<button onClick={(e)=>deleteErrand(e,i)} >Delete</button></div>
                })
            }
        </div>
    );
};


export default ToDoList;