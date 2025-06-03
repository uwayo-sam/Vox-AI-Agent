"use client";

import Card from "@/components/Card";
import { FaPhone,FaMicrophone,FaRecordVinyl,FaAudible ,FaMicrophoneAltSlash,FaPhoneSlash} from "react-icons/fa";
import { useState, useEffect } from "react";
import { vapi } from "@/lib/vapi";

export default function Home() {

//define states
const [transcription,setTranscription] = useState('call vox doctor...');
const [callStarted,setCallStarted] = useState("false");
const [error,setError]= useState();
const [Muted,setMuted] = useState(true);
const [isRecording,setIsRecording] = useState(false);





//functions
  const call = async() =>{
    setCallStarted("true");
    await vapi.start('5136bb3f-4b22-4ef0-8b08-ba3f00051d17');
  }


  const stopCall = () =>{
    setCallStarted("false")
    vapi.stop();
  }
  


  const mute = () =>setMuted(!Muted);


const taggleRecord = () =>{};





  //useeffects

  useEffect(()=>{
    vapi.on('error',(error)=>setError(error));
    vapi.on('call-start',()=>setCallStarted('true'));
    vapi.on('call-end',()=>setCallStarted('false'));
     
    vapi.on('message', (message) => {
        if (message.type === 'transcript' && message.transcriptType === 'final') {
          setTranscription(message.transcript);
        }
});
  },[])







  return (
    <div>
    <div className="px-10 py-5 flex flex-col gap-5 items-center justify-between h-full">
      <div className="flex gap-20 items-center justify-center w-full">
        <Card isuser="false" />
        <Card isuser="true" className='max-sm:hidden'/>
      </div>


      <div className="flex items-center overflow-hidden justify-center backdrop-blur-sm w-[50%] max-md:w-full border-2 py-3 px-6 rounded-lg border-red-600">
        <p className="text-xl font-bold text-white capitalize">
          
          {transcription}
        </p>
      </div>

        <div className="flex items-center gap-9">
      

          {isRecording?
          (<button
            onClick={taggleRecord}
            className="backdrop-blur-sm border-2 text-red-600 border-red-600 px-4 py-2 flex items-center justify-center rounded-full w-[60px] h-[60px] font-bold  hover:cursor-pointer transition-all duration-300"
          >
            <FaAudible className="text-2xl" />
          </button>)
          :
          (<button
            onClick={taggleRecord}
            className="backdrop-blur-sm border-2 text-red-600 border-red-600 px-4 py-2 flex items-center justify-center rounded-full w-[60px] h-[60px] font-bold  hover:cursor-pointer transition-all duration-300"
          >
            <FaRecordVinyl className="text-2xl" />
          </button>)}

        {callStarted == "true" ? (
          <button
            onClick={stopCall}
            className="backdrop-blur-sm border-2 text-red-600 border-red-600 px-4 py-2 flex items-center justify-center rounded-full w-[80px] h-[80px] font-bold  hover:cursor-pointer transition-all duration-300"
          >
            <FaPhoneSlash className="text-2xl" />
          </button>
        ) : (
          <button
            onClick={call}
            className="backdrop-blur-sm border-2 border-green-600 px-4 py-2 flex items-center justify-center rounded-full w-[80px] h-[80px] text-green-600 font-bold  hover:cursor-pointer transition-all duration-300"
          >
            <FaPhone className="text-2xl" />
          </button>
        )}

         {Muted?
         (<button
            onClick={mute}
            className="backdrop-blur-sm border-2 text-red-600 border-red-600 px-4 py-2 flex items-center justify-center rounded-full w-[60px] h-[60px] font-bold  hover:cursor-pointer transition-all duration-300"
          >
            <FaMicrophone className="text-2xl" />
          </button>):
         (<button
            onClick={mute}
            className="backdrop-blur-sm border-2 text-red-600 border-red-600 px-4 py-2 flex items-center justify-center rounded-full w-[60px] h-[60px] font-bold  hover:cursor-pointer transition-all duration-300"
          >
            <FaMicrophoneAltSlash className="text-2xl" />
          </button>)
        }
          
      </div>
      </div>
      </div>
  );
}
