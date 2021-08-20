import React, { useState } from 'react';
import Contact from './Contact';

interface IContact{
    name: string,
    email?: string
}
const Contacts = () => {
    // const [ contact, setContact ] = useState<IContact>({} as IContact);
    const [ contact, setContact ] = useState<IContact>({
        name:'',
        email:''
    });
    const [ contactList, setContactList ] = useState<IContact[]>([]);

    const onClick = () => {
        setContactList([...contactList, contact]);
        setContact({
            name:'',
            email:''
        })
    }
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setContact({...contact,[e.target.name]:e.target.value})
    }
    const handleRemove =(email:string) => {
        const newContactList = contactList.filter(c =>c.email !== email);
        setContactList(newContactList);
    }
    return (
        <div>
            <h1>Contact List</h1>
            <div className="form">
                <input onChange={onChange} value={contact.name} type="text" name="name" placeholder="Contact name" />
                <input onChange={onChange} value={contact.email} type="text" name="email" placeholder="Contact email" />
                <button onClick={onClick}>Add</button>
            </div>
            {
                contactList.map(con => <Contact handleRemove={handleRemove} key={con.name} name={con.name} email={con.email}></Contact>)
            }
           {/* <Contact name="Fozlol Hoq" email='fozlol001@gmail.com'></Contact> 
           <Contact name="Someone Hoq" email='someone@gmail.com'></Contact> 
           <Contact name="Someone2"></Contact>  */}
        </div>
    );
};

export default Contacts;