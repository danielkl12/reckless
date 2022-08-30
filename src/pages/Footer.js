import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/6c800840-27b4-11ed-9d54-c9f9d2b00e7b"; // TODO - fill on the later step

const Footer = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div id="footer">

<div className="six columns main-col">
                        <h2 style={{color: "white", fontSize:"50px", fontFamily:"squealer"}}>Contact</h2>
                        <div style={{color:"white", marginLeft:"50px", marginRight:"50px"}}> 
                            
                        </div>
                        </div>
      
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0" style={{height:"50px"}}> 
        <input id="inputID" style={{width:"200px"}}
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0" style={{height:"50px"}}>
        <input id="inputID"  style={{width:"200px"}}
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea id="inputID"  style={{width:"400px", height:"200px"}}
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button 
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    </div>
    
  );
};

export default Footer;