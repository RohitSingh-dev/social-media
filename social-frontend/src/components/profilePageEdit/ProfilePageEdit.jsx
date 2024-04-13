import React, { useEffect, useState } from 'react';
import './profilePageEdit.css';
import {NavigationBar, WelcomeBar} from '../../components';
import { useNavigate } from 'react-router-dom';

const ProfilePageEdit = () => {
    const [user, setUser]= useState({});
    const [loading, setLoading]= useState(false);
    const [file, setFile]= useState("");
    const navigate = useNavigate();
    useEffect(() => {
      if(!loading){
        setLoading(true);
        fetch("/user/5",{
          method: "GET",
          headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb2hpdEBnbWFpbC5jb20iLCJleHAiOjE3MTMwNDIzMDIsImlhdCI6MTcxMzAyMDcwMn0.MDXJYZW8HPJpFyM8K5s_x19g6v-wzR_st_Ufiw2rTPM'},
        }).then(res => res.json()).then(json => setUser(json)).catch(err => {console.log(err); setLoading(false)});
      }
    }, []);

    let handleSubmit = async (e)=> {
        e.preventDefault();
        try{
          let res = await fetch("/user",{
            method: "PUT",
            body: JSON.stringify({
                name: user.name,
                emailId: user.emailId,
                phNum: user.phNum,
                bio: user.bio
            }),
            headers: {'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb2hpdEBnbWFpbC5jb20iLCJleHAiOjE3MTMwNDIzMDIsImlhdCI6MTcxMzAyMDcwMn0.MDXJYZW8HPJpFyM8K5s_x19g6v-wzR_st_Ufiw2rTPM'},
          });
          let resJSON = await res.text();
          if(res.status===200){
            console.log(resJSON);
            navigate("/Profile");
          }
          else{
            alert("Invalid Input");
          }
        }
        catch(err){
          console.log(err);
        }
      };

      let onPicChange=(e)=> {
        setFile(e.target.files[0]);
      };
      let onPicUpload = async (e)=> {
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        fetch("/user/5",{
          method: "PUT",
          headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb2hpdEBnbWFpbC5jb20iLCJleHAiOjE3MTMwNDIzMDIsImlhdCI6MTcxMzAyMDcwMn0.MDXJYZW8HPJpFyM8K5s_x19g6v-wzR_st_Ufiw2rTPM'},
      body: data,
      }).then(response=> {
          if(response.ok){
              alert("Pic Updated Successfully");
          }
          else{
              alert("Pic Upload Failed");
          }
      }).catch(err=> {console.err("Error Uploading Files: ", err)})
      };

    return (
      <div className='profilePageEdit'>
        <div className='profilePageEdit-top'><WelcomeBar /></div>
        <div className='profilePageEdit-bottom'>
          <div className='profilePageEdit-bottom-left'><NavigationBar /></div>
          <div className='profilePageEdit-bottom-right'>
            <div className='profilePageEdit-bottom-right-left'>
            <form>
            <div className='profilePageEdit-bottom-right-label'>
              <label>Name :</label>
              <input type='text' placeholder='Name' value={user.name} onChange={(e)=> setUser({...user,name:e.target.value})}></input>
            </div>
            <div className='profilePageEdit-bottom-right-label'>
              <label>Email :</label>
              <input type='email' placeholder='Email' value={user.emailId} onChange={(e)=> setUser({...user,emailId:e.target.value})}></input>
            </div>
            <div className='profilePageEdit-bottom-right-label'>
              <label>Phone :</label>
              <input type='number' placeholder='Phone' value={user.phNum} onChange={(e)=> setUser({...user,phNum:e.target.value})}></input>
            </div>
            <div className='profilePageEdit-bottom-right-label'>
              <label>Bio :</label>
              <input type='text' placeholder='Bio' value={user.bio} onChange={(e)=> setUser({...user,bio:e.target.value})}></input>
            </div>
            </form>
            </div>
            <div className='profilePageEdit-bottom-right-right'>
                <img src={`data:image/jpg;base64,${user.pic}`} alt='profilePic'></img>
                <div className='profilePageEdit-bottom-right-right-picUpdate'>
                    <input type='file' name='file' onChange={onPicChange}></input>
                    <button onClick={onPicUpload}>Update PIC</button>
                </div>
                <button className='profilePageEdit-bottom-right-right-update' onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProfilePageEdit