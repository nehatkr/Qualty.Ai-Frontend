import { io } from "socket.io-client";
import {BASE_URL} from "./constants"

 export const createSocketConnection = ()=>{

   if(location.hostname==="localhost"){

      return io(BASE_URL)
   }

   return io("https://qualty.ai",{
      path:"/socket.io",
      transports:["websocket","polling"],
      withCredentials:true
   })

 }
