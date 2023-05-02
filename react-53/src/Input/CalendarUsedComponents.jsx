import {useEffect, useRef, useState} from "react";
import FloatingActionButtons from "../component/FloatingActionButtons";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from '@mui/icons-material/Cancel';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export default function CalendarUsedComponents() {
    const Calendar=[
        {
            id:1,
            title:"lorem ipus1",
            date:'2023-04-27',
            startTime:"11:00",
            endTime:null,
            done:false,
        },
        {
            id:2,
            title:"lorem ipus2",
            date:'2023-04-27',
            startTime:"13:00",
            endTime:"13:30",
            done:false,
        },
        {
            id:3,
            title:"lorem ipus3",
            date:'2023-04-27',
            startTime:"14:00",
            endTime:"14:40",
            done:true,
        },
        {
            id:4,
            title:"lorem ipus4",
            date:'2023-04-26',
            startTime:"12:00",
            endTime:"14:00",
            done:false,
        },
    ]


    let [datetime,setdate]=useState(new Date().toISOString().slice(0, 10))
    let [datetimeInfo,setdateInfo]=useState([])

    useEffect(()=>{
        console.log(datetime)

        let CalendarAll=Calendar.filter(res=>res.date===datetime)
        setdateInfo(CalendarAll)

    },[datetime])










    return (
      <>
          <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
              <Alert
                  action={
                      <Button color="inherit" size="small">
                          UNDO
                      </Button>
                  }
              >
                  This is a success alert — check it out!
              </Alert>
          </Stack>
          <input type="date" value={datetime}
                 onChange={(e)=>(
              setdate(e.target.value)
          )}/>

          {datetime &&(<div>

              <Fab color="primary" aria-label="add">
                  <AddIcon/>
              </Fab>
                  <table>
                      <thead>
                      <tr>
                          <th>id</th>
                          <th>title</th>
                          <th>date</th>
                          <th>start</th>
                          <th>end</th>
                          <th>congig</th>
                      </tr>
                      </thead>
                      <tbody>
                      {
                          datetimeInfo.map(result=>(
                              <tr key={result.id}>
                                  <td>{result.id}</td>
                                  <td>{result.title}</td>
                                  <td>{result.date}</td>
                                  <td>{result.startTime}</td>
                                  <td>{result.endTime??'-'}</td>
                                  <td>
                                      <Fab color="secondary" aria-label="edit"  size="large" >
                                          <EditIcon  sx={{ fontSize: "20px" }} />
                                      </Fab>
                                      <Fab color="secondary" aria-label="edit"  size="large" >
                                          <CancelIcon  sx={{ fontSize: "20px" }} />
                                      </Fab>
                                      <Fab color="secondary" aria-label="edit"  size="large" >
                                          {
                                              result.done?<DoneAllIcon  sx={{ fontSize: "20px" }} />
                                              :<EventAvailableIcon  sx={{ fontSize: "20px" }} />
                                          }
                                      </Fab>

                                  </td>
                              </tr>
                          ))
                      }

                      </tbody>
                  </table>
          </div>
          )
          }


      </>
    );
}