import React, { useEffect ,useState} from 'react'
import axios from "axios"
import ageman from "./../assets/growing-up-man.svg"
import agewoman from "./../assets/growing-up-woman.svg"
import Mail from "./../assets/mail.svg"
import man from "./../assets/man.svg"
import woman from "./../assets/woman.svg"
import map from "./../assets/map.svg"
import padlock from "./../assets/padlock.svg"
import Phone from "./../assets/phone (1).svg"
import Table from "./Table"
const Card = () => {
    const [open, setOpen] = useState("My Name Is")
    const [user, setUser] = useState([])
    const [info, setİnfo] = useState()
    const [addUser, setAddUser] = useState([])
    

    const handleClickNewUser=()=>{
        getData();
    }
    const handleClickAddUser=()=>{
        addUser.includes(user) ? alert("bu kullanıcı var"):
        setAddUser([...addUser,user])
    }

    useEffect(() => {
    getData();
    

}, [])

    const getData=async()=>{
        const datas = await axios("https://randomuser.me/api/")
        .then((res)=>res.data.results[0])
        .catch((err)=>console.log(err) );

        const{
            name:{title,first,last},
            email,
            gender,
            phone,
            location:{city,country},
            login:{password},
            picture:{medium},
            dob:{age}
        }=datas
        setUser({title,
                first,
                last,
                email,
                gender,
                phone,
                city,
                country,
                password,
                medium,
                age
        })
        setİnfo(title+" "+first+" "+last)
    }
    
    const{title,
                first,
                last,
                email,
                gender,
                phone,
                city,
                country,
                password,
                medium,
                age

        }=user
    return (
        <div className="container">
            <div className="info">

                <div className="img">
                    <img src={medium} alt="picture" />
                </div>
                <div className="open">
                    <p>{open}</p>
                    <p>{info}</p>
                </div>
            </div>  
            <div className="icons">
                <div className="icon" 
                onMouseOver={()=>{setOpen("My Name Is")
                setİnfo(title+" "+first+" "+last)
                }}>
                    <img src={gender==="male" ? man : woman} alt="" />
                </div>
                <div className="icon"
                 onMouseOver={()=>{setOpen("My Email Is")
                setİnfo(email)
                }}>
                    <img src={Mail} alt="" />
                </div>
                 <div className="icon"
                  onMouseOver={()=>{setOpen("My Age Is")
                setİnfo(age)
                }}>
                    <img src={gender==="male" ? ageman : agewoman} alt="" />
                </div>
                 <div className="icon"
                  onMouseOver={()=>{setOpen("My Location Is")
                setİnfo(city+" "+country)
                }}>
                    <img src={map} alt="" />
                </div>
                <div className="icon"
                 onMouseOver={()=>{setOpen("My Phone Number Is")
                setİnfo(phone)
                }}>
                    <img src={Phone} alt="" />
                </div>
                <div className="icon"
                 onMouseOver={()=>{setOpen("My Password Is")
                setİnfo(password)
                }}>
                    <img src={padlock} alt="" />
                </div>
            </div>
            <div className="button">
                <button onClick={handleClickNewUser}>NEW USER</button>
                <button onClick={handleClickAddUser}>ADD USER</button>
            </div>
            <Table addUser={addUser}/>
        </div>
    )
}

export default Card
