import React, {useState} from 'react';

const BoxGenerator = () => {

    const [formInfo, setFormInfo] = useState({
        boxColor:"",
        height:"",
        width:""
    })

    const [listOfBoxs, setlistOfBoxs] = useState([])

    const changeHandler = (e)=>{
        console.log("sup", e.target.name, e.target.value)

        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const addColor = (e)=>{
        e.preventDefault()
        console.log("you almost there")
        console.log(formInfo)

        setlistOfBoxs([...listOfBoxs,formInfo])
        setFormInfo({
            boxColor:"",
            height:"",
            width:""
        })
    }

    const deleteColor = (e,i)=>{
        console.log("you deleted this color foo",i)

        let newListOfBoxs = listOfBoxs.filter((box,ei)=>{
            return ei != i
        })
        console.log(newListOfBoxs)
        setlistOfBoxs(newListOfBoxs)
    }

    return (
        <div>
            <form onSubmit={addColor}>
                <label htmlFor="">Color:</label>
                <input onChange={(e)=>changeHandler(e)} type="text" name="boxColor" value={formInfo.boxColor} />
                <label htmlFor="">Height:</label>
                <input onChange={(e)=>changeHandler(e)} type="text" name="height" value={formInfo.height} />
                <input type="submit" value="Add"/>
            </form>
            <hr />
            {
                listOfBoxs.map((box,i) =>{
                    return <div key = {i} style = {{backgroundColor: box.boxColor,height:box.height,width:box.height, display: 'inline-block',marginRight:20}}>{box.boxColor}<button onClick={(e)=>deleteColor(e,i)}>Delete Color</button></div>
                })
            }
        </div>
    );
};



export default BoxGenerator;