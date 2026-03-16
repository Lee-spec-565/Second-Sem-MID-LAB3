import { useState, useRef, FormEvent, ChangeEvent } from "react";
import "./App.css";
interface FeedbackData {
  Student_name: string;
  StudentID: string;
  Book_Title: string;
  Book_Author: string;
  Reason_for_Request: string;
}
function App() {
  // Controlled Form State
  const [Student_name, setStudent_Name] = useState<string>("");
  const [StudentID, setStudentID] = useState<string>("");
  const [Book_Title, setBook_Title] = useState<string>("");
  const [Book_Author, setBook_Author] = useState<string>("");
  const [Reason_for_Request, setReason_for_Request] = useState<string>("");
  const [submittedData, setSubmittedData] = useState<FeedbackData | null>(null);
  // Uncontrolled Form Refs
  const Student_nameRef = useRef<HTMLInputElement>(null);
  const StudentIDRef = useRef<HTMLInputElement>(null);
  const Book_TitleRef = useRef<HTMLTextAreaElement>(null);
  const Book_AuthorRef = useRef<HTMLTextAreaElement>(null);
  const Reason_for_RequestRef = useRef<HTMLTextAreaElement>(null);
  // Controlled Submit
  const handleControlledSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: FeedbackData = {
      Student_name,
      StudentID,
      Book_Title,
      Book_Author,
      Reason_for_Request
    };
    setSubmittedData(data);
    setStudent_Name("");
    setStudentID("");
    setBook_Title("");
    setBook_Author("");
    setReason_for_Request("");
  };
  // Uncontrolled Submit
  const handleUncontrolledSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Student_nameRef.current && StudentIDRef.current && Book_TitleRef.current && Book_AuthorRef.current && Reason_for_RequestRef.current) {
      const data: FeedbackData = {
        Student_name: Student_nameRef.current.value,
        StudentID: StudentIDRef.current.value,
        Book_Title: Book_TitleRef.current.value,
        Book_Author: Book_AuthorRef.current.value,
        Reason_for_Request: Reason_for_RequestRef.current.value
      };
      console.log("Uncontrolled Form Data:", data);
      alert("Check the console for submitted data.");
    }
  };
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Student Feedback Exercise</h1>
      {/* Controlled Form */}
      <h2>Controlled Form</h2>
      <form onSubmit={handleControlledSubmit}>
        <div>
          <label>Student Name:</label><br />
          <input
            type="text"
            value={Student_name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setStudent_Name(e.target.value)
            }
          />
        </div>
        <br />
        <div>
          <label>Student ID:</label><br />
          <input
            type="number"
            value={StudentID}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setStudentID(e.target.value)
            }
          />
        </div>
        <br />
        <div>
          <label>Book Title:</label><br />
          <textarea
            value={Book_Title}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setBook_Title(e.target.value)
            }
          />
        </div>

        <br />
        <div>
          <label>Book Author:</label><br />
          <textarea
            value={Book_Author}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setBook_Author(e.target.value)
            }
          />
        </div>

        <br />
        <div>
          <label>Reason for Request:</label><br />
          <textarea
            value={Reason_for_Request}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setReason_for_Request(e.target.value)
            }
          />
        </div>

        <br />
        <button type="submit">
          Submit Controlled Form
        </button>
      </form>
      {/* Display Controlled Data */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Feedback</h3>
          <p><strong>Student Name:</strong> {submittedData.Student_name}</p>
          <p><strong>Student ID:</strong> {submittedData.StudentID}</p>
          <p><strong>Book Title:</strong> {submittedData.Book_Title}</p>
          <p><strong>Book Author:</strong> {submittedData.Book_Author}</p>
          <p><strong>Reason for Request:</strong> {submittedData.Reason_for_Request}</p>
        </div>
      )}
      <hr style={{ margin: "40px 0" }} />
      {/* Uncontrolled Form */}
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleUncontrolledSubmit}>
        <div>
          <label>Student Name:</label><br />
          <input type="text" ref={Student_nameRef} />
        </div>
        <br />
        <div>
          <label>Student ID:</label><br />
          <input type="number" ref={StudentIDRef} />
        </div>
        <br />
        <div>
          <label>Book Title:</label><br />
          <textarea ref={Book_TitleRef} />
        </div>
        <br />
        <div>
          <label>Book Author:</label><br />
          <textarea ref={Book_AuthorRef} />
        </div>
        <br />
        <div>
          <label>Reason for Request:</label><br />
          <textarea ref={Reason_for_RequestRef} />
        </div>
        <br />
        <button type="submit">
          Submit Uncontrolled Form
        </button>
      </form>
    </div>
  );
}
export default App;