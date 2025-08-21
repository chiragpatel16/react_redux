import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAppointment } from "../features/appointmentsSlice";

export default function AppointmentForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    reason: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.date || !form.time) {
      alert("Please fill required fields");
      return;
    }
    dispatch(addAppointment(form));
    setForm({ name: "", email: "", date: "", time: "", reason: "" });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Add Appointment</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="form-control" required />
          </div>
          <div className="mb-2">
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="form-control" />
          </div>
          <div className="row g-2 mb-2">
            <div className="col">
              <input type="date" name="date" value={form.date} onChange={handleChange} className="form-control" required />
            </div>
            <div className="col">
              <input type="time" name="time" value={form.time} onChange={handleChange} className="form-control" required />
            </div>
          </div>
          <div className="mb-2">
            <textarea name="reason" value={form.reason} onChange={handleChange} placeholder="Reason" className="form-control" rows="2" />
          </div>
          <button className="btn btn-primary w-100" type="submit">➕ Add Appointment</button>
        </form>
      </div>
    </div>
  );
}
