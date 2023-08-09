import React, {useEffect, useState} from "react";
import axios from "axios";
import SheetCard from "./SheetCard/SheetCard";
import From from "./Form/Form";

export default function Main() {
    const [Sheet, setSheet] = useState([])

    useEffect(() => {
        getSheet();
    },[])

    async function getSheet(){
        let API = "http://localhost:9000/sheet";
        const result = await axios.get(API);
        console.log(result.data);
        setSheet(result.data)
    }
    
    const handleAddSheet = async newSheetFromData => {
        const res = await axios.post("http://localhost:9000/sheet", newSheetFormData);
        setSheet([...sheet, res.data])
    }

    const handleDelete = async (id) => {
        console.log("clicked")
        const res = await axios.delete(`http://localhost:9000/sheet/${id}`)
        console.log(res)
        getSheet()
    }

    const handleUpdateSheet = async (sheet) => {
        await axios.put(`http://localhost:9000/sheet/${sheet._id}`, sheet)
        getSheet();
    }

    return (
        <div>
        <Form onSubmitFunc={handleAddSheet}/>
        <h3>This a Sheet I guess, I don't even know anymore???</h3>
        <SheetCard sheet={sheet} handleDelete={handleDelete} handleUpdateSheet={handleUpdateSheet}/>
        </div>
    )
}