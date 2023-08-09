import React, {useEffect, useState} from "react";
import axios from "axios";
import SheetCard from "./SheetCard/SheetCard";
import From from "./Form/Form";

export default function Main() {
    const [Sheets, setSheets] = useState([])

    useEffect(() => {
        getSheets();
    },[])

    async function getSheets(){
        let API = "http://localhost:9000/sheets";
        const result = await axios.get(API);
        console.log(result.data);
        setSheets(result.data)
    }
    
    const handleAddSheet = async newSheetFromData => {
        const res = await axios.post("http://localhost:9000/sheet", newSheetFormData);
        setSheets([...sheets, res.data])
    }

    const handleDelete = async (id) => {
        console.log("clicked")
        const res = await axios.delete(`http://localhost:9000/sheets/${id}`)
        console.log(res)
        getSheets()
    }

    const handleUpdateSheet = async (sheet) => {
        await axios.put(`http://localhost:9000/sheets/${sheet._id}`, sheet)
        getSheets();
    }

    return (
        <div>
        <Form onSubmitFunc={handleAddSheet}/>
        <h3>This a Sheet I guess, I don't even know anymore???</h3>
        <SheetCard sheet={sheet} handleDelete={handleDelete} handleUpdateSheet={handleUpdateSheet}/>
        </div>
    )
}