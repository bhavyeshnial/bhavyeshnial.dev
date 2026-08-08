import { useState } from "react";
import "./StartProject.css";
 
export default function StartProject() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    service: "Web Development",
    details: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Details Submitted:", formData);
    alert("Thanks! Your project details have been sent.");
  };

  return (
    <div style={{ padding: "80px 20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Start a Project</h1>
      <p>Tell me about your project and let's build something awesome together!</p>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
        <input 
          type="text" 
          placeholder="Your Name" 
          required 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          required 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <select 
          value={formData.service} 
          onChange={(e) => setFormData({...formData, service: e.target.value})}
        >
          <option value="Web Development">Web Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="App Development">App Development</option>
        </select>
        <textarea 
          placeholder="Project Details" 
          rows="5"
          value={formData.details}
          onChange={(e) => setFormData({...formData, details: e.target.value})}
        ></textarea>
        <button type="submit">Submit Proposal</button>
      </form>
    </div>
  );
}