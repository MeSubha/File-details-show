import React, { useState } from "react";
import BasicTable from "./TableAGgrid";
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount ,decrement} from "./counter/counterSlice";
import { addItem,removeItem } from "./counter/arrayStore";

const FileUpload = () => {
    const count = useSelector((state) => state.counter.value);
    const selectedFiles = useSelector((state) => state.array.items);
    const dispatch = useDispatch();
    const [newFiles, setnewFiles] = useState([]);
    const [showTable, setShowTable] = useState(false);

    // Handle file selection
    const handleFileChange = (event) => {
        const filesArray = Array.from(event.target.files); // Ensure this is always an array
        setnewFiles(filesArray);
    };

    // Handle file upload
    const handleUpload = () => {
        const len=newFiles.length;
        if ( len > 0) {
            dispatch(addItem(newFiles))
            setShowTable(true); // Show the table after files are uploaded
            dispatch(incrementByAmount(len));  
            setnewFiles([]);
                 
        } else {
            console.log('No files selected');
        }
    };
    const deleteFile = (fileName) =>{
        dispatch(removeItem(fileName));
        dispatch(decrement());
    };

    return (
        <>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload}>Save</button>
            {/* <button onClick={handleUpload}>Add File</button> */}

            {/* Conditionally render BasicTable and pass props */}
            {showTable && selectedFiles.length > 0 && (
                <BasicTable files={selectedFiles} onDelete={deleteFile} />
            )}
        </>
    );
};

export default FileUpload;
