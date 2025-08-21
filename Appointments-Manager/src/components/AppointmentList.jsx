import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateAppointment, deleteAppointment, clearAppointments } from "../features/appointmentsSlice";

export default function AppointmentList() {
  const appointments = useSelector((state) => state.appointments);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const startEdit = (appt) => {
    setEditingId(appt.id);
    setEditForm(appt);
  };

  const handleChange = (e) => setEditForm({ ...editForm, [e.target.name]: e.target.value });

  const saveEdit = () => {
    dispatch(updateAppointment({ id: editingId, updated: editForm }));
    setEditingId(null);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5>Appointments</h5>
        <div>
          <button className="btn btn-sm btn-outline-danger me-2" onClick={() => dispatch(clearAppointments())}>Clear All</button>
          <span className="badge bg-secondary">{appointments.length}</span>
        </div>
      </div>

      {appointments.length == 0 ? (
        <div className="alert alert-info">No appointments yet</div>
      ) : (
        <div className="list-group">
          {appointments.map((e) => (
            <div key={e.id} className="list-group-item">
              {editingId == e.id ? (
                <div className="row g-2">
                  <div className="col-12 mb-1">
                    <input name="name" value={editForm.name} onChange={handleChange} className="form" />
                  </div>
                  <div className="col-6">
                    <input type="date" name="date" value={editForm.date} onChange={handleChange} className="form" />
                  </div>
                  <div className="col-6">
                    <input type="time" name="time" value={editForm.time} onChange={handleChange} className="form" />
                  </div>
                  <div className="col-12 mt-1">
                    <input name="reason" value={editForm.reason} onChange={handleChange} className="form" />
                  </div>
                  <div className="col-12 mt-2 d-flex gap-2">
                    <button className="btn btn-success btn-sm" onClick={saveEdit}>Save</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => setEditingId(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <strong>{e.name}</strong>
                    <div className="text-small text-muted">{e.date} • {e.time}</div>
                    {e.reason && <div className="mt-1">{e.reason}</div>}
                  </div>
                  <div className="btn-group">
                    <button className="btn btn-sm btn-outline-primary" onClick={() => startEdit(e)}>Edit</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => dispatch(deleteAppointment(e.id))}>Delete</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
