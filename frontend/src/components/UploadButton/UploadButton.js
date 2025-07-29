import './UploadButton.css';

export default function UploadButton( {onUploadError, onFileUpload} ) {  
    const handleClick = () => {
        document.getElementById('fileInput').click(); // triggers 'onChange' for fileInput
    };

    const handleChange = async (event) => {
        const file = event.target.files[0];

        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch("http://localhost:5050/image_upload", {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            onUploadError("");
            onFileUpload(data.text);
        } catch(err) {
            onUploadError("Upload failed.");
        }
    };

    return (
        <div>
            <input type="file" id="fileInput" style={{ display: "none" }} accept="image/*" onChange={handleChange}/>
            <button type="submit" className="upload-button" onClick={handleClick}>Upload</button>
        </div>
    )
};