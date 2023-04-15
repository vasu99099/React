import { useState } from "react";

const Parent_info_form = (props) => {
    let form_title = props.form_name;

    const [parent, setForm_title] = useState({
        f_name: '',
        m_name: '',
        l_name: '',
        email: '',
        Qualification: '',
        Profession: '',
        Designation: '',
        contact: ''
    });
    const setForm_data = (e) => {
        setForm_title({ ...parent, [e.target.name]: e.target.value });
    }

const submitParent=(event)=>{
    event.preventDefault();
    props.form_set_data([form_title,parent]);
};



    return (
        <div className="border">
            <h5 className="text-center text-md-start bg-info p-3 " >{form_title} Information</h5>
            <form id="student_form" style={{ backgroundColor: '#C0DDE7' }} onSubmit={submitParent}>
                <div className="accordion-body text-start">
                    <div className="row g-3">
                        <div className="col-12 col-md-4">
                            <input type="text" className="form-control" name="f_name" value={parent.f_name} placeholder="First Name" onChange={setForm_data} required />
                        </div>
                        <div className="col-12 col-md-4">
                            <input type="text" className="form-control" name="m_name" value={parent.m_name} placeholder="Middle Name" onChange={setForm_data} required />
                        </div>
                        <div className="col-12 col-md-4">
                            <input type="text" className="form-control" name="l_name" value={parent.l_name} placeholder="Last Name" onChange={setForm_data} required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div class=" col-12 col-md-7">
                            <label class="form-label">Email :</label>
                            <input type="email" class="form-control" name="email"
                                value={parent.email} placeholder="Email" onChange={setForm_data} required />
                        </div>
                        <div className="col-12 col-md-5 mt-3 mt-md-0">
                            <label class="form-label">Qualification :</label>
                            <input type="text" className="form-control" name="Qualification" placeholder="Education Qualification" value={parent.Qualification} onChange={setForm_data} required />
                        </div>

                    </div>
                    <div className="row mt-3">
                        <div class=" col-12 col-md-7">
                            <label className class="form-label">Profession :</label>
                            <input type="text" class="form-control" name="Profession" placeholder="Profession" value={parent.Profession} onChange={setForm_data} required/>
                        </div>
                        <div className=" col-12 col-md-5 mt-3 mt-md-0">
                            <label className class="form-label">Designation :</label>
                            <input type="text" className="form-control" name="Designation" placeholder="Designation" value={parent.Designation} onChange={setForm_data} required/>
                        </div>

                    </div>

                    <div className="mt-3">
                        <label className class="form-label">Contact :</label>
                        <input type="tel" className="form-control" maxLength="10" minLength="10"  name="contact" value={parent.contact} onChange={setForm_data} placeholder="99099-5xx90" pattern="[0-9]{10}" required/>

                    </div>
                    <div className="my-5 my-md-3">
                        <button type="submit" class="btn btn-success px-3">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Parent_info_form;