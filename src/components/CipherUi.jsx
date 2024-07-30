import React, { useState } from "react";
import { caesarCipher } from "../function/CaesarCipher";

const CipherUi = () => {
  const [text, setText] = useState("");
  const [shift, setShift] = useState();
  const [result, setResult] = useState("");
  const [mode, setMode] = useState("encode");

  const handleEncrypt = () => {
    const shiftValue = parseInt(shift, 10);
    const encodedText = caesarCipher(text, shiftValue, mode === "encode");
    setResult(encodedText);
  };

  return (
    <div className="px-10 py-3 ">
        <div className=" mt-5">
          <div className="w-full max-w-md p-5 bg-white rounded-lg font-inter">
            <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-3">
            EncodeX
            </h2>
            <label
              className="block text-gray-700 text-sm font-semibold mb-1"
              htmlFor="unique-input"
            >
              Message:
            </label>
            <textarea
              className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transform  focus:outline-blue-300  hover:border-blue-300 bg-gray-100"
              placeholder="Enter text to encode or decode"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <label
              className="block text-gray-700 text-sm font-semibold mt-3 mb-1"
             htmlFor="unique-input"
            >
              Shift:
            </label>
            <input
              className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-blue-300  hover:border-blue-300 bg-gray-100"
              placeholder="Enter Shift here"
              type="number"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
            />

            <label
              className="block text-gray-700 text-sm font-semibold mt-3 mb-1"
              htmlFor="unique-input"
            >
              Mode:
            </label>
            <select
              className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm  focus:outline-blue-300 hover:border-blue-300 bg-gray-100"
              placeholder="Select Operation"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option className="bg-blue" value="encode">Encode</option>
              <option value="decode">Decode</option>
            </select>
            <div className="text-center">
            <button
              onClick={handleEncrypt}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md mt-4 "
            >
              Submit
            </button>

                 <div className="mt-6  w-full max-w-md">
              <h2 className="text-xl font-bold mb-2 text-blue-600 ">Result:</h2>
                <p className="p-4 border border-gray-300 rounded-md break-words bg-gray-100 h-[60px] ">{result}</p>
            </div>
            </div>
         
          </div>
        </div>
    </div>
  );
};

export default CipherUi;
