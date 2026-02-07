import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const applicationData = Object.fromEntries(formData.entries());
    const application = {
      jobId,
      applicant: user.email,
      applicationData,
    };
    // console.log(application);

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your application has been saved successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-center mt-5">
        Job Apply for :<Link to={`/jobs/${jobId}`}>Details</Link>
      </h2>
      <form onSubmit={handleApply}>
        <fieldset className="fieldset bg-base-200 border-base-300 mx-auto my-10 rounded-box w-xs border p-4">
          <label className="label">Github</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="Github Link"
          />

          <label className="label">LinkedIn</label>
          <input
            type="url"
            name="linkedIn"
            className="input"
            placeholder="LinkedIn Link"
          />

          <label className="label">Resume</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Resume Link"
          />

          <button type="submit" className="btn btn-primary">
            Apply
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
