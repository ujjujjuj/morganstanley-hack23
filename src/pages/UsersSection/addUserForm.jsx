import { React,useState }from "react";
import { useNavigate } from "react-router-dom";

export default function UserForm() {

    const [name,setName]=useState("");
    const [pwd,setPwd]=useState("");
    
    const [gender,setGender]=useState("");
    
    const [Community,setCommunity]=useState("");
    const [PhoneNumber,setPhoneNumber]=useState(0);
    // duration details 

    const navigate=useNavigate();
    const postData = async ({name,pwd,PhoneNumber,gender,Community}) => {
      
        try {
            const body = {
                pwd: pwd,
                basicDetails: {
                  PhoneNumber:PhoneNumber,
                  name:name,
                  gender:gender,
                  Community:Community
                }
              };
          const response = await fetch('http://localhost:3000/user/register/byAdmin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          });
      
          if (!response.ok) {
            throw new Error('Request failed');
          }
      
          const responseData = await response.json();
          console.log(responseData);
        } catch (error) {
          console.error(error);
         
        }
      };


    async function handleSubmit(e){
        e.preventDefault();
        await postData({
            name,pwd,PhoneNumber,gender,Community
        });
        // just navigate !! 
        navigate("/users/allUsers");
    }
    function handleCancel(){
      navigate("/users/allUsers");
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 mx-12 md:mx-24 lg:mx-40">

        <div className="my-2 border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Add User Details</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Add the details Carefully !</p>

          {/* name  */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  onChange={(event)=>{setName(event.target.value)}}
                  type="text"
                  name="first-name"
                  value={name}
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2">
                <input
                  onChange={(event)=>{setGender(event.target.value)}}
                  type="text"
                  name="first-name"
                  value={gender}
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Community
              </label>
              <div className="mt-2">
                <input
                  onChange={(event)=>{setCommunity(event.target.value)}}
                  type="text"
                  name="first-name"
                  value={Community}
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          {/* pwd */}
          <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  onChange={(event)=>{setPwd(event.target.value)}}
                  type="text"
                  name="first-name"
                  value={pwd}
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          {/* Phone Number */}
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  onChange={(event)=>{setPhoneNumber(event.target.value)}}
                  type="number"
                  name="first-name"
                  value={PhoneNumber}
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>
        
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button onClick={handleCancel} type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>

      </div>

    </form>
  )
}
