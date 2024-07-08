import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemForm = ({item, onSuccess}) =>{
    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [place_of_birth, setPlaceOfBirthday] = useState('');
    const [birthday, setBirthday] = useState('');
    const [sex, setSex] = useState('');
    const [civil_status, setCivilStatus] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [religion, setReligion] = useState('');
    const [province, setProvince] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [blood_type, setBloodType] = useState('');
    const [elementary, setElementary] = useState('');
    const [secondary, setSecondary] = useState('');
    const [vocational, setVocational] = useState('');
    const [college, setCollege] = useState('');
    const [graduate_studies, setGraduateStudies] = useState('');
    const [mother_first_name, setMotherFirstName] = useState('');
    const [mother_middle_name, setMotherMiddleName] = useState('');
    const [mother_last_name, setMotherLastName] = useState('');
    const [mother_occupation, setMotherOccupation] = useState('');
    const [father_first_name, setFatherFirstName] = useState('');
    const [father_middle_name, setFatherMiddleName] = useState('');
    const [father_last_name, setFatherLastName] = useState('');
    const [father_occupation, setFatherOccupation] = useState('');

    
    

    useEffect(() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setPhone(item.phone);
            setTelephone(item.telephone);
            setEmail(item.email);
            setPlaceOfBirthday(item.place_of_birth);
            setBirthday(item.birthday);
            setSex(item.sex);
            setCivilStatus(item.civil_status);
            setAddress(item.address);
            setZip(item.zip);
            setCitizenship(item.citizenship);
            setReligion(item.religion);
            setProvince(item.province);
            setHeight(item.height);
            setWeight(item.weight);
            setBloodType(item.blood_type);
            setElementary(item.elementary);
            setSecondary(item.secondary);
            setVocational(item.vocational);
            setCollege(item.college);
            setGraduateStudies(item.graduate_studies);
            setMotherFirstName(item.mother_first_name);
            setMotherMiddleName(item.mother_middle_name);
            setMotherLastName(item.mother_last_name);
            setMotherOccupation(item.mother_occupation);
            setFatherFirstName(item.father_first_name);
            setFatherMiddleName(item.father_middle_name);
            setFatherLastName(item.father_last_name);
            setFatherOccupation(item.father_occupation);


        }
    }, [item]);
    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = {first_name, middle_name, last_name, phone, telephone, email, place_of_birth, birthday, sex, civil_status, address, zip, citizenship, religion, province, height, weight, blood_type, elementary, secondary, vocational, college, graduate_studies, mother_first_name, mother_middle_name, mother_last_name, mother_occupation, father_first_name, father_middle_name, father_last_name, father_occupation };
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
             <div class="container">
            <div class="form-group">
                <label>First Name:</label>
                <input type='text' value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Middle Name:</label>
                <input type='text' value={middle_name} onChange={(e) => setMiddleName(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Last Name:</label>
                <input type='text' value={last_name} onChange={(e) => setLastName(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Phone:</label>
                <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
            </div>
            
            <div class="container">
            <div class="form-group">
                <label>Telephone:</label>
                <input type='text' value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Email:</label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Place of Birth:</label>
                <input type='text' value={place_of_birth} onChange={(e) => setPlaceOfBirthday(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Birthday</label>
                <input type='text' value={birthday} onChange={(e) => setBirthday(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Sex:</label>
                <input type='text' value={sex} onChange={(e) => setSex(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Civil Status:</label>
                <input type='text' value={civil_status} onChange={(e) => setCivilStatus(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Address:</label>
                <input type='text' value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Zip:</label>
                <input type='text' value={zip} onChange={(e) => setZip(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Citizenship:</label>
                <input type='text' value={citizenship} onChange={(e) => setCitizenship(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Religion:</label>
                <input type='text' value={religion} onChange={(e) => setReligion(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Province:</label>
                <input type='text' value={province} onChange={(e) => setProvince(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Height:</label>
                <input type='text' value={height} onChange={(e) => setHeight(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Weight:</label>
                <input type='text' value={weight} onChange={(e) => setWeight(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Blood Type:</label>
                <input type='text' value={blood_type} onChange={(e) => setBloodType(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Elementary:</label>
                <input type='text' value={elementary} onChange={(e) => setElementary(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Secondary:</label>
                <input type='text' value={secondary} onChange={(e) => setSecondary(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Vocational:</label>
                <input type='text' value={vocational} onChange={(e) => setVocational(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>College:</label>
                <input type='text' value={college} onChange={(e) => setCollege(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Graduates Studies:</label>
                <input type='text' value={graduate_studies} onChange={(e) => setGraduateStudies(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Mother's First Name:</label>
                <input type='text' value={mother_first_name} onChange={(e) => setMotherFirstName(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Mother's Middle Name:</label>
                <input type='text' value={mother_middle_name} onChange={(e) => setMotherMiddleName(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Mother's Last Name:</label>
                <input type='text' value={mother_last_name} onChange={(e) => setMotherLastName(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Occupation:</label>
                <input type='text' value={mother_occupation} onChange={(e) => setMotherOccupation(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Father's First Name:</label>
                <input type='text' value={father_first_name} onChange={(e) => setFatherFirstName(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Father's Middle Name:</label>
                <input type='text' value={father_middle_name} onChange={(e) => setFatherMiddleName(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Father's Last Name:</label>
                <input type='text' value={father_last_name} onChange={(e) => setFatherLastName(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
                <label>Occupation:</label>
                <input type='text' value={father_occupation} onChange={(e) => setFatherOccupation(e.target.value)}/>
            </div>
            </div>

            <div class="container">
            <div class="form-group">
            <button type='submit'>Submit</button>
            </div>
            </div>
        </form>
    );
};

export default ItemForm;