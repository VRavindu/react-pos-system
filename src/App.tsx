import './App.css'
import {useState} from "react";
import {Customer} from "./model.Customer.ts";
function App() {

    const [customers, setCustomers] = useState<Customer[]>([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    function addCustomer(){
        const newCustomer = new Customer(name,email,phone,address);
        setCustomers((customers) => [...customers, newCustomer])
    }
    function deleteCustomer(email : string){
        setCustomers((customers) => customers.filter((customer) => customer.email !== email))
    }
    function updateCustomer(){
        setCustomers((customers) => customers.map((customer) => customer.email === email ? new Customer(name,email,phone,address) : customer))
    }

    function viewCustomer(index: number) {
        const customer = customers[index]
        setName(customer.name)
        setAddress(customer.address)
        setEmail(customer.email)
        setPhone(customer.phone)
    }

    function clear(){
        setName('')
        setEmail('')
        setPhone('')
        setAddress('')
    }

    return (
        <>
            <form>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)}/>
                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)}/>
            </form>
            <div className="btn-container">
                <button onClick={addCustomer}>Add Customer</button>
                <button onClick={updateCustomer}>Update Customer</button>
                <button onClick={clear}>Clear</button>
            </div>

            <br/>

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer, index) => (
                    <tr key={index} >
                        <td>{customer.name}</td>
                        <td>{customer.address}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>
                            <button onClick={() => deleteCustomer(customer.email)}>Delete</button>
                            <button onClick={() => viewCustomer(index)}>View</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default App
