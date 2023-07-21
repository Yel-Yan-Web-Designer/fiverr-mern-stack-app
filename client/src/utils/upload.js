import axios from "axios";

//upload image file to cloudinary
export default async function upload (file) {
    const formData = new FormData();

    formData.append("file" , file);
    formData.append("upload_preset", "fiverrapp");

    try {
        const {data} = await axios.post("https://api.cloudinary.com/v1_1/dwcdewzvu/image/upload", formData);
        
        const {url} = data;
        return url;

    } catch (error) {
        console.log(error)
    }
}   