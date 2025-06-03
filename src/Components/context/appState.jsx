import React from 'react'
import AppContext from './appContext'
import { useEffect, useState,useRef } from 'react'
import useLocalStorage from '../hooks/uselocalstorage'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const AppState = (props) => {

    const history = useHistory()

const [userData, setUserData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  cnic: "",
  address: "",
  loanStatus: "Pending", // default
  loanAmount: "",
  paymentScreenshot: "", // will be filled after upload
});
    const world = "helloworldhowareyou"
useEffect(() => {
  console.log("paymentScreenshot updated:", userData.paymentScreenshot);
}, [userData.paymentScreenshot]);
  
    const [adminToken, setAdminToken] = useLocalStorage('adminToken', null)
    const [admin, setAdmin] = useState(false)
    const [imgUrl, setImgUrl]= useState("")

     const handleFileUpdate = async (event)=>{
const file = event.target.files[0];
if(!file) return
const data = new FormData()
data.append("file", file)
data.append("upload_preset", "Screen_shot")
data.append("cloud_name", "dmss0by2k")

const res = await fetch("https://api.cloudinary.com/v1_1/dmss0by2k/image/upload",{
  method:'POST',
  body:data
})
const uploadImgUrl = await res.json()
setUserData((prev) => ({
  ...prev,
  paymentScreenshot: uploadImgUrl.url,
}));
  }
  console.log(imgUrl)



    const signIn = async (username, password) => {

        // settheProductLoader(true)
        

        const url = "http://localhost:5000/api/auth/login"
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "*",
            },

            body: JSON.stringify({ username, password }), // body data type must match "Content-Type" header
        });
        const data = await response.json(); // parses JSON response into native JavaScript objects
        if (username=="vipadmin@akhuwatfoundation36") {
            setAdminToken(data.authtoken)
            history.push('/admin-dashboard')
            setAdmin(true)
        }
        console.log(data);
        
        
        
        // console.log(data.map((e)=>{return e.id}))
    }
    

    console.log(adminToken);

    
    const [siteData, setSiteData] = useState(null)
    
    const getAppData = async () => {
            const responseThree = await fetch("http://localhost:5000/api/number/all-numbers", {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "*",
            },

            // body: JSON.stringify({ username, password }), // body data type must match "Content-Type" header
        });
        
        const siteData = await responseThree.json(); // parses JSON response into native JavaScript objects
        setSiteData({ id:siteData.id , loanfee:siteData.loanfee, phone:siteData.phone ,description:siteData.description, easypaisa:siteData.easypaisa, jazzcash:siteData.jazzcash })
        
        // setCoverImages(data.assets)
        // console.log(data.assets);
        console.log(siteData);

        
    }

    const [editLoader, setEditLoader] = useState(false)

    const editSiteInfo = async () => {
        setEditLoader(true)
        const { loanfee, description,phone, easypaisa, jazzcash } = siteData
        const responseThree = await fetch(`http://localhost:5000/api/number/edit-number`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "*",
                "auth-token": adminToken
            },

            body: JSON.stringify({ loanfee, phone ,description, easypaisa, jazzcash }), // body data type must match "Content-Type" header
        });
        const resData = await responseThree.json(); // parses JSON response into native JavaScript objects
        setSiteData({id:siteData.id , loanfee:siteData.loanfee, phone:siteData.phone ,description:siteData.description, easypaisa:siteData.easypaisa, jazzcash:siteData.jazzcash})
        setEditLoader(false)
        
    }

const loanStatusUpdation = async () => {
        
        const { loanStatus } = siteData; 
        const token = adminToken
        const response = await fetch(`http://localhost:5000/api/user/update-loan-status/${siteData.id}`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "*",
                "auth-token": token
            },

            body: JSON.stringify({ loanStatus }), // body data type must match "Content-Type" header
        });
        const resData = await response.json(); // parses JSON response into native JavaScript objects
        setSiteData({
      ...siteData,
      loanStatus: resData.loanStatus
    });
    }



console.log(userData)

const createUser = async () => {
    const payload = {
    ...userData,
    
  };

  try {
    const res = await fetch("http://localhost:5000/api/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || "Failed to create user");
    }

    console.log("User created:", result.user);
    alert("User created successfully!");
  } catch (err) {
    console.error("Error:", err.message);
    alert(`Error: ${err.message}`);
  }
};

const [users, setUsers] = useState([]);
const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/user/get-users',
            { method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Accept": "*",
                "auth-token": adminToken
            },
        }); // Update your route
        const data = await res.json();
        console.log(data)

        if (!res.ok) {
          throw new Error(data.error || 'Failed to fetch users');
        }

        setUsers(data); // Assuming the response is an array of users
        
      } catch (err) {
        console.error('Error fetching users:', err.message);
        
      }
    };


const fetchUserByCnic = async (cnic) => {
  try {
    const response = await fetch(`http://localhost:5000/api/user/user-by-cnic/${cnic}`);
    if (!response.ok) throw new Error("User not found");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch user by CNIC:", error);
    return null;
  }
};

    useEffect(() => {
        getAppData()
    }, [])

    


    // 


    //   console.clear()
    return (
        <AppContext.Provider value={{fetchUserByCnic,users, fetchUsers, userData , setUserData,siteData, createUser,signIn, adminToken, admin, setAdminToken, editSiteInfo, setSiteData,editLoader, setEditLoader, loanStatusUpdation, handleFileUpdate }}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppState