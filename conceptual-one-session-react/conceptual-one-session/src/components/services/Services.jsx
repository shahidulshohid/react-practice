export default function Services({transfer}){
    // console.log(transfer)
    return (
        <div>
        <h1>I am from Services</h1>
        <button onClick={()=>transfer('data dilam ami services theke')}>click from services</button>
        </div>
    )
}