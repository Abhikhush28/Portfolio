import React from 'react'

const Contact = () => {

    const[name , setName] = React.useState("");
    const[email , setEmail] = React.useState("");
    const[message , setMessage] = React.useState("");


    function encode(data) {
        return Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method:"POST",
            headers:{"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({"form-name": "test", name, email, message }),
        }).then(() => alert("Message sent !")).catch((err) => alert(err));
        
    }


  return (
    <section id='contact' className='relative'>
        <div className="container px-5 pt-10 pb-2 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 flex items-end justify-start relative'>
                <iframe 
                width="100%"
                height="100%"
                title='map'
                className='absolute inset-0'
                style={{ filter: "opacity(0.7)" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13655.796984179578!2d85.38663555079307!3d25.814733537094273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed6f043a8bd0e1%3A0xefda0551f92b3cfa!2sMahua%2C%20Bihar%20844122!5e1!3m2!1sen!2sin!4v1706178767344!5m2!1sen!2sin"/>
                <div className='bg-gray-900 relative flex flex-wrap p-6 rounded shadow-md text-gray-700'>
                    <div className='lg:w-1/2 px-6'>
                        <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                            ADDRESS
                        </h2>
                        <p className='mt-1'>
                            MAHUA KADILPUR <br />
                            BIHAR
                        </p>
                    </div>

                    <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                        <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                            EMAIL
                        </h2>
                        <a 
                        className='text-indigo-400 leading-relaxed'
                        href="#!">
                            sahuabhikhush@gmail.com
                        </a>    

                        <h2 className='title-font font-semibold text-white -tracking-widest text-xs mt-4'>
                            PHONE
                        </h2>
                        <p className='leading-relaxed'>7635042960</p>
                    </div>
                </div>
            </div>


            <form
            onSubmit={handleSubmit}
            className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md-mt-0'>
                <div className='mx-auto inline-block w-10 mb-4 ml-25'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 pr-5">
                        <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
                        <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                    </svg>

                </div>

                <h2 className='text-white sm:text-4xl text-3xl mb-8 font-medium title-font text-center'>
                    Hire Me
                </h2>
                <p className='leading-relaxed mb-5'>
                    If you want to do some work with me fill in your details below.
                </p>
                <div className='relative mb-4'>
                    <label 
                    className='leading-7 text-sm text-gray-400'
                    htmlFor="name">
                        Name
                    </label>
                    <input 
                    onChange={(e) => setName(e.target.value)}
                    className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' 
                    name='name'
                    id='name'
                    type="text"/>
                </div>

                <div className='relative mb-4'>
                    <label htmlFor="email" className='leading-7 text-sm text-gray-400'>
                        Email
                    </label>
                    <input 
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    name='email'
                    id='email'
                    type="email" />
                </div>

                <div className='relative mb-4'>
                    <label 
                    className='leading-7 text-sm text-gray-400'
                    htmlFor="message">
                        Message
                    </label>
                    <textarea 
                    onChange={(e) => setMessage(e.target.value)}
                    className='w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-6 resize-none transition-colors duration-200 ease-in-out'
                    name="message" 
                    id="message" />

                </div>

                <button 
                className='text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'
                type='submit'>
                    Submit
                </button>
                
            </form>
        </div>
      
    </section>
  )
}

export default Contact;
