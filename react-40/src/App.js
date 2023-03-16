import {Myinfo} from './MYserver'

function App() {


  return (
      <>
        <h1>Barev</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci officia quidem? Ab dolor enim exercitationem id, laboriosam molestiae, molestias nostrum odit quod ratione repellat, repellendus sed voluptate! Delectus, dicta!</p>
        <ul>
          {
            Myinfo.map((res,index)=> (
                  <li key={index}>{res}</li>

                  ))
          }
        </ul>


      </>
      )
}

export default App;
