export default function Services({transfer}){
    // console.log(transfer)
    const obj = {name: 'shahidul islam', age:33}
    return (
        <div>
        <h1>I am from Services</h1>
        <button onClick={()=>transfer(obj)}>click from services</button>
        </div>
    )
}