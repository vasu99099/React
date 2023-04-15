import { useState } from "react";

const Student_info = (props) => {


  const checkblankvalid = (event) => {
    if (event.target.value.trim() === "") {
      event.target.value = "";
    }
  }

  const [f_name, setF_name] = useState('');
  const [m_name, setM_name] = useState('');
  const [l_name, setL_name] = useState('');
  const [dob, setDOB] = useState('2002-01-25');
  const [birth_place, setB_place] = useState('');
  const [first_lang, setF_lang] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  const changeF_name = (e) => {
    setF_name(e.target.value)
  }
  const changeM_name = (e) => {
    setM_name(e.target.value)
  }
  const changeL_name = (e) => {
    setL_name(e.target.value)
  }

  const changeDOB = (e) => {
    setDOB(e.target.value)
  }

  const changeBirth_place = (e) => {
    setB_place(e.target.value)
  }

  const changeF_lang = (e) => {
    setF_lang(e.target.value)
  }

  const changeCountry = (e) => {
    setCountry(e.target.value)
  }

  const changeState = (e) => {
    setState(e.target.value)
  }
  const changeCity = (e) => {
    setCity(e.target.value)
  }
  const changeZip = (e) => {
    setZip(e.target.value)
  }

  const submitStudent = (event) => {

    event.preventDefault();
    let student_data = {
      'f_name': f_name,
      'm_name': m_name,
      'l_name': l_name,
      "dob": dob,
      "birth_place": birth_place,
      "first_lang": first_lang,
      "country": country,
      "state": state,
      "city": city,
      "zipcode": zip

    };
    props.form_set_data(["student",student_data]);
    // setF_name('');
    // setM_name('');
    // setL_name('');
    // setDOB('2002-01-25');
    // setB_place('')
    // setF_lang('');
    // setCountry('');
    // setState('');
    // setCity('');
    // setZip('');

  };


  return (
    <div className="border">
      <h5 className="text-center text-md-start bg-info p-3">Student Information</h5>
      <form id="student_form" style={{ backgroundColor: '#C0DDE7' }} onSubmit={submitStudent}>
        <div className="accordion-body text-start">
          <div className="row g-3">
            <div className="col-12 col-lg-4">
              <input type="text" className="form-control" value={f_name} placeholder="First Name" onKeyUp={checkblankvalid} onChange={changeF_name} required />
            </div>
            <div className="col-12 col-lg-4">
              <input type="text" className="form-control" value={m_name} placeholder="Middle Name" onKeyUp={checkblankvalid} onChange={changeM_name} required />
            </div>
            <div className="col-12 col-lg-4">
              <input type="text" className="form-control" value={l_name} placeholder="Last Name" onKeyUp={checkblankvalid} onChange={changeL_name} required />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-lg-6 ">
              <label className="text-start form-label">Date of Birth :</label>
              <input type="date" className="form-control" value={dob} placeholder="Date of Birth" onChange={changeDOB} required />
            </div>
            <div className="col-12 col-lg-6 mt-3 mt-lg-0">
              <label className="text-start form-label">Birth Place :</label>
              <input type="text" className="form-control" value={birth_place} placeholder="Birth Place" onKeyUp={checkblankvalid} onChange={changeBirth_place} required />
            </div>

          </div>

          <div className="row mt-4">
            <div className="col">
              <input type="text" className="form-control" placeholder="First language" value={first_lang} onKeyUp={checkblankvalid} onChange={changeF_lang} required />
            </div>
          </div>

          <div className="row mt-3">

            <div className="col-12  col-md-6 ">
              <label className="form-label">Country :</label>
              <select className="form-select" value={country} onChange={changeCountry} required>
                <option >Choose...</option>
                <option>India</option>
                <option>USA</option>
                <option>Chaina</option>
              </select>
            </div>
            <div className=" col-12 col-md-6 mt-3 mt-md-0">
              <label className="form-label">State :</label>
              <select className="form-select" value={state} onChange={changeState} required>
                <option >Choose...</option>
                <option>Gujarat</option>
                <option>Maharastra</option>
                <option>Up</option>
              </select>
            </div>
          </div>
          <div className="row mt-3">
            <div className=" col-6 col-md-6">
              <label className="form-label">City :</label>
              <select className="form-select" value={city} onChange={changeCity} required>
                <option >Choose...</option>
                <option>Junagadh</option>
                <option>Ahmedabad</option>
                <option>Rajkot</option>
              </select>
            </div>
            <div className="col-6 col-md-6">
              <label className="form-label">Zip :</label>
              <input type="number" className="form-control" value={zip} onChange={changeZip} required />
            </div>
          </div>

          <div className="my-4 my-md-3 ">
            <button type="submit" className="btn btn-success px-3">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Student_info;

