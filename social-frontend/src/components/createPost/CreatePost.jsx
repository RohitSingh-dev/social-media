import React, { useState } from 'react';
import './createPost.css';

const CreatePost = (props) => {
  const [file, setFile]= useState("");
  let onPicChange=(e)=> {
    setFile(e.target.files[0]);
  };
  let onPicUpload = async (e)=> {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    fetch("/post/1",{
      method: "POST",
      headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaGlyYWpAZ21haWwuY29tIiwiZXhwIjoxNzEzMzMzNzEyLCJpYXQiOjE3MTMyNDczMTJ9.VWzdawy3n24GrlEZLTWH_At6vxc_yAnr3KOSEJdtUFw'},
  body: data,
  }).then(response=> {
      if(response.status===201){
          alert("Post Uploaded");
      }
      else{
          alert("Post Upload Failed");
      }
  }).catch(err=> {console.err("Error Uploading Files: ", err)})
  };

  return (
    <div className='createPost'>
        <div className='createPost-background'>
            <div className='createPost-body'>
              <div className='createPost-top' onClick={props.toggle}>&times;</div>
              <div className='createPost-bottom'>
                <input type='file' name='file' onChange={onPicChange}></input>
                <button onClick={onPicUpload}>Create Post</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost