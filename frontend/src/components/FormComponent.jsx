import React, { useState } from "react";

function FormComponent() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  const handleMouseMove = (e) => {
    if (showCustomCursor) {
      setCursorPosition({ x: e.clientX + 30, y: e.clientY + 30 });
    }
  };

  const handleMouseEnter = () => {
    setShowCustomCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCustomCursor(false);
  };

  const handleOtherRadioClick = (e) => {
    e.preventDefault();
  };
  const [file, selectfile] = useState("Choose File");

  function showSelectedFile(e) {
    selectfile(e.target.files[0].name);
  }

  return (
    <div className="flex items-center justify-center border-1 bg-[#212121] text-white outline-none h-auto w-90 min-h-72 rounded p-2 mt-20">
      <form className=" p-5" onMouseMove={handleMouseMove}>
        <h1 className="text-2xl font-medium text-center mb-3">
          React Based Form
        </h1>
        <div>
          <h3 className="font-semibold text-xl mb-1">First Name</h3>
          <input
            id="fname"
            className="mt-1 border-1 rounded px-3 py-2 border-indigo outline-none w-72"
            type="text"
          />
        </div>

        <div className="mt-3">
          <h3 className="font-semibold text-xl mb-1">Last Name</h3>
          <input
            id="lname"
            className="mt-1 border-1 rounded px-3 py-2 border-indigo outline-none w-72"
            type="text"
          />
        </div>

        <div className="mt-3">
          <h3 className="font-semibold text-xl mb-1">Email</h3>
          <input
            id="email"
            className="mt-1 border-1 rounded px-3 py-2 border-indigo outline-none w-72"
            type="email"
          />
        </div>

        <div className="mt-3">
          <h3 className="font-semibold text-xl mb-1">Contact</h3>
          <input
            id="contact"
            className="mt-1 border-1 rounded px-3 py-2 border-indigo outline-none w-72"
            type="text"
          />
        </div>

        <div className="mt-3">
          <h3 className="font-semibold text-xl mb-1">Gender</h3>
          <div className="flex justify-center m-2">
            <input className="mr-1" type="radio" name="gender" id="male" />
            <span className="mr-2">Male</span>
            <input className="mr-1" type="radio" name="gender" id="female" />
            <span className="mr-2">Female</span>
            <input
              onClick={handleOtherRadioClick} // Prevent selecting "Other"
              onMouseEnter={handleMouseEnter} // Show custom cursor on hover
              onMouseLeave={handleMouseLeave} // Hide custom cursor when mouse leaves
              className="mr-1"
              type="radio"
              name="gender"
              id="other"
              style={{ cursor: "none" }} // Hide the default cursor
            />
            <span className="mr-2">Other</span>
          </div>
        </div>

        <div className="mt-3">
          <h3 className="font-semibold text-xl mb-1">Your Best Subject</h3>
          <div className="flex justify-center m-2">
            <input className="mr-1" type="checkbox" name="" id="" />
            <span className="mr-2">English</span>
            <input className="mr-1" type="checkbox" name="" id="" />
            <span className="mr-2">Maths</span>
            <input className="mr-1" type="checkbox" name="" id="" />
            <span className="mr-2">Physics</span>
          </div>
        </div>

        <div className="mt-3">
          <div>
            <h3 className="font-semibold text-xl mb-3">Resume</h3>
            <label
              className="p-2 bg-white font-semibold rounded text-black"
              htmlFor="resume"
            >
              Upload Resume
            </label>
            <input
              onChange={(e) => showSelectedFile(e)}
              id="resume"
              type="file"
              className="hidden text-white"
            />
          </div>

          <div className="p-2 mt-3  max-w-72 bg-white font-semibold rounded text-black overflow-hidden truncate">
            <span>{file}</span>
          </div>
        </div>

        <div className="mt-3">
          <h3 className="font-semibold text-xl mb-1">Portfolio Url</h3>
          <input
            id="contact"
            className="mt-1 border-1 rounded px-3 py-2 border-indigo outline-none w-72"
            type="url"
          />
        </div>

        <div className="mt-3">
          <h3 className="font-semibold text-xl mb-1">Choose Stack</h3>
          <select
            name=""
            id="stack"
            className="w-72 text-black px-4 py-2 font-medium bg-white outline-none"
            defaultValue="Backend"
          >
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="FullStack">FullStack</option>
          </select>
        </div>

        <div className="mt-3">
          <h3 className="font-semibold text-xl mb-1">About</h3>
          <textarea
            name=""
            id=""
            placeholder="describe about yourself........"
            className="w-72 border-1 outline-none border-white rounded min-h-38 text-white p-1"
          >
            {" "}
          </textarea>
        </div>

        <div className="mt-3 flex justify-between">
          <input
            className="px-4 py-1 outline-none bg-green-400 font-bold rounded cursor-pointer"
            type="reset"
            value="Reset"
          />
          <input
            className="px-4 py-1 outline-none bg-green-400 font-bold rounded cursor-pointer"
            type="submit"
            value="Submit"
          />
        </div>
      </form>

      {showCustomCursor && (
        <div
          style={{
            position: "absolute",
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`,
            width: "10px",
            height: "10px",
            backgroundColor: "red",
            cursor: "pointer",
            borderRadius: "50%",
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      )}
    </div>
  );
}

export default FormComponent;
