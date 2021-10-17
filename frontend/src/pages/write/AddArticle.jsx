import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import "./addArticle.css";

const AddArticle = () => {
    const [title,setTitle]=useState("");
    const [con,setCon]=useState("");
    const [wb,setWb]=useState(""); 
    const [date,setDate]=useState("");
    const [img,setImg]=useState("");

    const HandleClick=async(e)=>{
        
        const send=async()=>{
           //console.log("imagsdsd",img);
            const res=await axios.post("/posts",{
                "title":title,
                "content":con,
                "writtenBy":wb,
                "dateAdded":date,
                "img":img
            });
            console.log("response",res);
        }
        send();
        alert("your article is added ");
        e.preventDefault();
    }
   
    const cImg=(im)=>{
        let bs64='';
        getBase64(im,(result)=>{
            bs64=result;
        })
       
    }
    function getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
            setImg(reader.result);
            //console.log("reader result",reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
   
    // const changeImg =()=>{
    //     const c = document.createElement('canvas');
    //     const img = document.getElementById('img');
    //     const height = img.naturalHeight;
    //     const width = img.naturalWidth;
    //     const ctx = c.getContext('2d');
    //     ctx.drawImage(img, 0, 0, width, height);
    //     const base64String = c.toDataURL();
    //     console.log(base64String);
    //     setImg(base64String);
    // }


    return (
        <>
        <div className="form ">
           <form onSubmit={HandleClick}>
            <div className="input-group mb-3 title">
                <label htmlFor="">title:</label>
                <textarea className="form-control" type="text" onChange={event=> setTitle(event.target.value) } />
            </div>

            <div className="input-group content">
                <label htmlFor="">article content:</label>
                <textarea className="form-control" type="text" name="content" id="" onChange={event=> setCon(event.target.value) }   />
            </div>

            <div className="input-group wb">
                <label htmlFor="wb">written by:</label>
                <input className="form-control" type="text" name="wb"  onChange={event=> setWb(event.target.value) } />
            </div>

            <div className="input-group date">
                <label htmlFor="date">date:</label>
                <input className="form-control" type="text" name="date"  onChange={event=> setDate(event.target.value) } />
            </div>
        
            <div className="input-group date">
                <label htmlFor="img">image name:</label>
                <input className="form-control" type="file" name="img" id="img" onChange={e=>cImg(e.target.files[0]) } />
            </div>

            <button className="btn btn-lg btn-primary" type="submit">submit</button>
               
            </form>
        </div>
        </>
    )
}

export default AddArticle; 
