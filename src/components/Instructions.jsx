// src/Instructions.js
import React from 'react';

const Instructions = () => {
    return (
        <div className='flex justify-end'>
        <div className="bg-white p-6 rounded-md shadow-md max-w-md mx-auto mt-8 ">
            <h2 className="text-2xl font-bold mb-4">How to Use CaesarCipher</h2>
            <p className="mb-4">
                The Caesar Cipher is a simple encryption technique where each letter in the plaintext is shifted a certain number of places down or up the alphabet.
            </p>
            <ol className="list-decimal list-inside mb-4">
                <li className="mb-2">
                    <strong>Enter the Text:</strong> Type the text you want to encode or decode.
                </li>
                <li className="mb-2">
                    <strong>Set the Shift Value:</strong> Enter the number of positions to shift each letter. Use negative numbers to shift in the opposite direction.
                </li>
                <li className="mb-2">
                    <strong>Choose the Mode:</strong> Select "Encode" to encrypt or "Decode" to decrypt.
                </li>
                <li className="mb-2">
                    <strong>Submit:</strong> Click the "Submit" button to see the result.
                </li>
                <li>
                    <strong>View the Result:</strong> The encoded or decoded text will be displayed. You can copy this text as needed.
                </li>
            </ol>
            {/* <p>
                <strong>Example:</strong><br />
                <em>Original Text:</em> "HELLO"<br />
                <em>Shift Value:</em> 3<br />
                <em>Encoded Text:</em> "KHOOR"
            </p> */}
        </div>
        </div>
    );
};

export default Instructions;
