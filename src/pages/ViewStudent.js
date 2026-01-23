import axios from "axios";
import { useEffect, useState } from "react";

const API = "http://localhost:3000/students"
function ViewStudent(){
const[students, setSudents] = useState([]);

const fetchStudents = async()=>{
    const res = await axios.get(API);
    setSudents(res.data);
};

useEffect(()=>{
    fetchStudents();
}, []);

return(
    <>
    <h3>View Students</h3>
    <table className="table table-border">
        <thead>
            <tr>
                <th>Id</th><th>Name</th><th>Email</th><th>Age</th><th>Course</th>
            </tr>
        </thead>
        <tbody>
            {students.map(stu =>(
                <tr key={stu.id}>
                    <td>{stu.id}</td>
                    <td>{stu.name}</td>
                    <td>{stu.email}</td>
                    <td>{stu.age}</td>
                    <td>{stu.course}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
)

}
export default  ViewStudent;