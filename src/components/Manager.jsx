// import React from 'react'
// import { useRef, useState, useEffect } from 'react'

// const Manager = () => {
//     const ref = useRef()
//     const [form, setform] = useState({site: "", username: "", password : ""}) //below value we are using

//     // using useEffect, when we load websites in that see passwords in locals storage
//     // to see password is there or not , if is there means make passwrod to parse which is given below.
//     useEffect(() =>{
//         let passwords = localStorage.getItem("passwords");
//         if(passwords){
//             setPasswordArray(JSON.parse(passwords))
//         }
//     }, [])

//     const showPassword = () =>{ //These func for onlcick which is given below
//         alert('Show Password')

//         // These is used to change the current the icon
//         // ref.current.src = "icons/hidden.png" //hidden or eyecross
        
//         console.log(ref.current.src)
//         if(ref.current.src.includes("icons/hidden.png")){ //if it is hidden, by clicking it will unhide or show
//             ref.current.src = "icons/eye.png"
//         }
//         else{
//             ref.current.src = "icons/hidden.png" //if it show eye means it show hidden
//         }
//     }
//     // These is used to save password
//     const savePassword = () => {
//       console.log(form) //These will show in console which is typed

//     //   pushing the password to the local stroge and saving
//         setPasswordArray([...passwordArray, form]) //spreading password array and saving form
//         localStorage.setItem("passwords", JSON.stringify([...passwordArray])) //saving passwords to local storage.
//         console.log([...passwordArray, form])
//     }

//     const handleChange = (e) => {
//       setform({...form, [e.target.name] : [e.target.value]}) //we are targeting name and value.
//     //   ...form is used to spread (form ko spread karo)
//     }
    

//   return (
      
//     <>

//     {/* These is bg-color */}
//     <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

//     {/* Making manager component */}
//     <div className="mycontainer">

//         <h1 className='text-4xl text font-bold text-center'>
//             <span className='text-green-500'> &lt; </span>
//             <span>Pass</span><span className='text-green-500'>OP/&gt; </span>
//         </h1>
//         <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

//         <div className="flex flex-col p-4 text-black gap-8 items-center">

//             <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className=' rounded-full border border-green-500 w-full p-4 py-1' type="text" name="site" id="" />
//             {/* form.site is used to setting value and giving above actions to perform  and handle change will change */}

//             <div className="flex w-full justify-between gap-8">
//                 {/* form.username is used to setting value and giving above actions to perform  */}
//                 <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="username" id="" />

//                 <div className=" relative">
//                     {/* form.password is used to setting value and giving above actions to perform  */}
//                     <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="password" id="" />
//                     <span className=' absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
//                         {/* for on click we make up one function */}

//                         {/* for changing src icon we are using use ref */}
//                         <img ref={ref} className=' p-1' width={26} src="icons/eye.png" alt="eye" />
//                     </span>
//                 </div>

//             </div>
//             <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-400 hover:bg-gray-300 rounded-full px-8 py-2 w-fit border border-green-900' > 
//                 <lord-icon
//                     src="https://cdn.lordicon.com/jgnvfzqg.json"
//                     trigger="hover">
//                 </lord-icon>
//                 Add Password</button>
//         </div>

//         {/* for passwords table */}
//         <div className="passwords">
//             <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
//             {/* if there is not passwords we are showing these */}

//             {passwordArray.length === 0 && <div>No passwords to show</div>}
            
//             {passwordArray.length !== 0 &&
            

//                 <table className="table-auto w-full  rounded-md overflow-hidden">
//                         {/* by keeping overflow  hidden means it applies border radius */}
//                     <thead className=' bg-green-800 text-white'>
//                         <tr>
//                         <th className='py-2'>Song</th>
//                         <th className='py-2'>Artist</th>
//                         <th className='py-2'>Year</th>
//                         </tr>
//                     </thead>
//                     <tbody className=' bg-green-100'>
//                         <tr>
//                         <td className=' py-2 border border-white text-center w-32'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
//                         <td className=' py-2 border border-white text-center w-32'>Malcolm Lockyer</td>
//                         <td className=' py-2 border border-white text-center w-32'>1961</td>
//                         </tr>
//                         <tr>
//                         <td className=' py-2 border border-white text-center w-32'>Witchy Woman</td>
//                         <td className=' py-2 border border-white text-center w-32'>The Eagles</td>
//                         <td className=' py-2 border border-white text-center w-32'>1972</td>
//                         </tr>
//                         <tr>
//                         <td className=' py-2 border border-white text-center w-32'>Shining Star</td>
//                         <td className=' py-2 border border-white text-center w-32'>Earth, Wind, and Fire</td>
//                         <td className=' py-2 border border-white text-center w-32'>1975</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             }

//         </div>

//     </div>

//     </>
//   )
// }

// export default Manager





import React, { useRef, useState, useEffect } from 'react';

// these imported used for toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// imporiting uuid for unque ids
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef(); //below we have declared for these

    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([]); // Initialize passwordArray state

    const getPasswords = async () => { //creating one func , we are using all wher there is local host.
      let req = await fetch("http://localhost:3000/") //fetching api

        //   we are using here because we can use func
        let passwords = await req.json()
        // here we do not need if , we can get pass words

        console.log(passwords)
        setPasswordArray(passwords); //not need to use parse it is alreday in backend.
    }

    useEffect(() => {

        getPasswords() //used backend

        // let passwords = localStorage.getItem("passwords");
        // if (passwords) {
        //     setPasswordArray(JSON.parse(passwords));

        //     // 1st -> declaring the password and getting item to password.
        //     // 2nd -> checking cond , passwords  and parsing or changing to password .
        // }
    }, []);

    const copyText = (text)=>{
        // These is toast emmiter below

            toast(' copied to clip board', { //it is used to toast means it shows when we copy the data it says popup and says copy to clipboard.
                                             //for customization it shows in web as we need
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light", // as your wish you can keep theme , dark or light or ...
                }); // these toast we taken from web site.

        alert("copied to clipboard" + text)
        navigator.clipboard.writeText(text) //it is used to navigate below given

        // 1st -> it shows toast like a popup by cliking copy 
        // 2nd -> alert is optional
        // 3rd -> it navigate the text and copy data to clipboard by cliking the icon and where we paste there it will paste.
    }

    const showPassword = () => {
        // alert('Show Password');
        passwordRef.current.type = "text" //these is used to change or visble
        if (ref.current.src.includes("icons/hidden.png")) {
            ref.current.src = "icons/eye.png";
            passwordRef.current.type = "password" //if current type is text turn password or password to text type
        } else {
            ref.current.src = "icons/hidden.png";
            passwordRef.current.type = "text"
        }

        // 1st -> password in text
        // 2nd -> checks the condition and first it changes the icon and if it showing means it changing icon and it hide.
        // 3rd -> if data which we entered it hide means by clicking it shows otherwise hide the data.
    }

    const savePassword = async () => {
        if(form.site.length > 3 && form.username.length > 3 && form.password.length > 3){

            // if any such id exits in the database, delete it, 
            // these new first delete old id and update or save the new id.
            await fetch("http://localhost:3000/", {method: "DELETE", headers: {"Content-Type": "application/json "}, body: JSON.stringify({id : form.id}) }) //it used to delete when there no in fom


            console.log(form);
            setPasswordArray([...passwordArray, {...form, id: uuidv4()}]); // we are keeping id. first password check and form checks and id checks and save

            // using api for password
            await fetch("http://localhost:3000/", {method: "POST", headers: {"Content-Type": "application/json "}, body: JSON.stringify({...form, id: uuidv4()}) }) // These like process we are doing. uuid it generate unquie for every post.

            // localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]));
            setForm({site: "", username: "", password: ""}) //it is used to clear the forms
            
            toast(' Password saved!', { // by clicking save it will popup
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            
        }
        else{
            // we can also use like these toast
            toast('Error : Password not saved!')
        }
        // first line -> it print in the console
        // second line -> it saves password with id
        // third line ->it saves in the local storage too.
        // whole process is first it print in the console and next it saves with unqiue id and next it saves to local storage.
    }

    const deletePassword = async (id) => { // by using id we are deleting
        console.log("Deleting password with id ", id)
        let c = confirm("Do you really want to delete this passwords? ") //it asking yes or no like alert
        
        if(c){ //it  checks above ask to confirm delete or not

            
            setPasswordArray(passwordArray.filter(item => item.id !== id)) //filtering id and deleting the row of the table. 
            // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id))) //delete in local storage if item has not equla to these id.

            // here also we using api , for this we don't need uuid here because it want to delete with same id.
            let res = await fetch("http://localhost:3000/", {method: "DELETE", headers: {"Content-Type": "application/json "}, body: JSON.stringify({ id}) })

            toast(' Password Deleted', { //by clicking it will popup
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
        }
                                                                                                 // after refreshing also it deletes the data from the table.
                                                                                                //  it delete from delete local storage also.
        
        // first line -> it print in console
        // second line -> it ask confirm
        // third line -> implement condition when we delete asking want to delete or not.
        // fourth line -> it delete the row of the table
        // fiveth line -> it delete in the local
        //  whole process is first print in console and next it will delete by clicking and next it also delete in the local storage to.
    }

    const editPassword = (id) => { // by using id we are deleting


        console.log("Editing password with id ", id)
        // setForm(passwordArray.filter(i => i.id === id) [0]) //it is used to reflect the data which we click on edit and shows in the line up

        // these form is setting those id which we want to edit
        setForm({...passwordArray.filter(i => i.id === id) [0], id: id})  //when we delete , by taking these id we are delete

        setPasswordArray(passwordArray.filter(item => item.id !== id)) //it used to delete that row by clicking edit button and above will reflect the data to the upward and after clicking save it will print the data in to table.

        // as we given above delete button by clicking delete it will delete the data

        //in edit we have, first line -> it print in the console while cliking on the edit,
        //                 second line -> by cliking it will reflect same data which is in the table , the data will show on the above
        //                 third line -> by cliking it delete the row 
        //     whole process is, first it shows in console and next it will reflect the data to the  up and next it delete the row.
        //  like these it will perform the data.
    }


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value }); // Fixing the typo here
    }

    return (
        <>
        {/* we can keep tost container anywhere. These is toast container */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition= "Bounce"  //make these line to = and copied code from there web
                />
                {/* Same as */}
            <ToastContainer />

            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
            </div>
            <div className="p-3 md:mycontainer min-h-[80vh]">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-500'> &lt; </span>
                    <span>Pass</span><span className='text-green-500'>OP/&gt; </span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>
                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="site" id="site" />
                    <div className="flex flex-col md:flex-row w-full justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="username" id="username" />
                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="password" name="password" id="password" />
                            <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-400 hover:bg-gray-300 rounded-full px-8 py-2 w-fit border border-green-900'>
                        <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover"></lord-icon>
                        Save 
                    </button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length !== 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden mb-10"> {/* Fixing the typo here */}
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th className='py-2'>Website</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {/* Now we are mapping a array of passwords */}
                                {passwordArray.map((item, index)=>
                               
                                    <tr key={index}>                        
                                        <td className='py-2 border border-white text-center '> 
                                            <div className='flex items-center justify-center'>

                                                <a href={item.site} target='_blank'> {item.site} </a> 

                                                <div className=' lordiconcopy size-7 cursor-pointer' onClick={()=>{copyText(item.site)}}> 
                                                                                                         {/* these onclick func used making copy */}
                                                    <lord-icon
                                                    style = {{"width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px"}}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover"></lord-icon>
                                                </div>

                                            </div>
                                        </td>
                                        <td className=' py-2 border border-white text-center '> 
                                            <div className='flex items-center justify-center'>

                                                <span> {item.username} </span>

                                                <div className=' lordiconcopy size-7 cursor-pointer' onClick={()=>{copyText(item.username)}}> 
                                                                                                         {/* these onclick func used making copy */}
                                                    <lord-icon
                                                    style = {{"width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px"}}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover"></lord-icon>
                                                </div>

                                            </div>
                                        </td>
                                        <td className='  py-2 border border-white text-center '> 

                                            <div className='flex items-center justify-center'>

                                                <span> {"*".repeat(item.password.length)} </span> 
                                                {/* Instead of star. we can keep anything like #, $, a, b..... */}
                                                {/* It shows only form of star but if we copy means it copy text data which we entered n */}

                                                <div className=' lordiconcopy size-7 cursor-pointer' onClick={()=>{copyText(item.password)}}> 
                                                                                                         {/* these onclick func used making copy */}
                                                    <lord-icon
                                                    style = {{"width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px"}}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover"></lord-icon>
                                                </div>

                                            </div>

                                        </td>


                                        <td className='  py-2 border border-white text-center '> 

                                            <span className=' cursor-pointer mx-1' onClick={() => {editPassword(item.id)}}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                style={{"width": "25px", "height":"25px"}}>
                                            </lord-icon>
                                            </span>
                                            <span className=' cursor-pointer mx-1' onClick={() => {deletePassword(item.id)}}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{"width": "25px", "height":"25px"}}>
                                            </lord-icon>
                                            </span>

                                        </td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>
    );
}

export default Manager;


// react tostify website is used for making toasts.
// tostify is library
// we need to import upper

// next we are using uuid for generating unqiue id
// after installing we are importing
