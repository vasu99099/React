import Parent_info_form from "./Parent_info_form";
import Student_info from './Student_info';
import React, { useState } from 'react';
import State_city_zipCode from './State_city_zipCode';




const All_form_binding = () => {

    const [form_obj, setForm_obj] = useState({ student: '', father: '', mother: '' });

    const [btn_color, setbtnColor] = useState(
        {
            student: 'btn btn-dark p-2 border-dark px-3',
            father: 'btn btn-dark p-2 border-dark px-3',
            mother: 'btn btn-dark p-2 border-dark px-3',
        }
    )


    const student_form_data = (data) => {
        console.log(data[1]);
        setForm_obj({ ...form_obj, student: {name:"asdfas"} });
        setbtnColor({ ...btn_color, [data[0]]: "btn btn-success p-2 border-dark px-3" });
        console.log(form_obj);

    };
    const [form, setform] = useState(<Student_info form_set_data={student_form_data} />)
    const getForm = (event) => {

        if (event.target.value === 'Father') {
            setform(<Parent_info_form form_name="father" form_set_data={student_form_data} />);
        } else if (event.target.value === "Mother") {
            setform(<Parent_info_form form_name="mother" form_set_data={student_form_data} />);
        }
        else {
            setform(<Student_info />);
        }
    }




    return (

        <div className="w-75 mx-auto">
            <div className="bg-dark">
                <h3 className="mt-3 text-danger py-1 px-5">Student Admission From</h3>
            </div>
            <div className="row mt-5  border" style={{ "minHeight": 700 + 'px' }}>

                <div className="col-12 col-md-3 border pt-5 py-5 py-md-0 " style={{ backgroundColor: '#C0E7E2' }}>
                    <div className="mt-3 pt-5">
                        <button className={btn_color.student} value="Student Information" onClick={getForm}> Student Information</button>
                    </div>
                    <div className="mt-3">
                        <button className={btn_color.father} value="Father" onClick={getForm}> Father Information</button>
                    </div>
                    <div className="mt-3">
                        <button className={btn_color.mother} value="Mother" onClick={getForm}> Mother Information</button>
                    </div>

                </div>
                <div className="col-12 p-0 mt-4 mt-md-0 col-md-9 p-md-5" >
                    {form}
                </div>
            </div>
        </div>
    );
}
export default All_form_binding