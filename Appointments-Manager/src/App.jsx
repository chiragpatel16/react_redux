import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";

export default function App() {
  return (
    <div className="container">
      <div className="py-4 ">
        <h1 className="h3"> Appointment Manager</h1>
     
      </div>

      <div className="row">
        <div className="col-md-5">
          <AppointmentForm />
        </div>
        <div className="col-md-7">
          <AppointmentList />
        </div>
      </div>
    </div>
  );
}
