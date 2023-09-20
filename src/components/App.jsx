import React, { useState, useEffect } from "react";
import Entry from "./Entry";
import fetchEmojiData from "../fetchEmojiData";

function App() {
    const [emojipedia, setEmojipedia] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchEmojiData()
            .then((data) => {
                setEmojipedia(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const filteredEmojipedia = emojipedia.filter((emojiData) =>
        emojiData.unicodeName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            <div className="search-box">
                <input
                    type="text"
                    className="input-search"
                    placeholder=" 🔍   Type to Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn-search">
                    <i className="fas fa-search"></i>
                </button>
            </div>

            <dl className="dictionary">
                {filteredEmojipedia.map((emojiData) => {
                    const emojiNameWithoutCodes = emojiData.unicodeName.replace(
                        /^E\d+\.\d+\s+/,
                        ""
                    );
                    return (
                        <Entry
                            key={emojiData.id}
                            emoji={emojiData.character}
                            name={emojiNameWithoutCodes}
                            meaning={emojiNameWithoutCodes}
                        />
                    );
                })}
            </dl>
        </div>
    );
}

export default App;
