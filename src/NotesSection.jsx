import React, { useState } from "react";
import { MessageSquare, Plus, Trash2, Edit2, Check, X } from "lucide-react";

function NotesSection({
  hazardId,
  notes,
  onAddNote,
  onDeleteNote,
  onEditNote,
  t,
}) {
  const [isAdding, setIsAdding] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [author, setAuthor] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddNote = () => {
    if (newNote.trim() === "") return;
    const noteData = {
      id: Date.now(), // Unique ID based on timestamp
      text: newNote,
      author: author.trim() || "Anonymous",
      date: new Date().toISOString(),
    };
    onAddNote(hazardId, noteData);
    setNewNote("");
    setAuthor("");
    setIsAdding(false);
  };

  const handleEdit = (note) => {
    setEditingId(note.id);
    setEditText(note.text);
  };

  const handleSaveEdit = (noteId) => {
    if (editText.trim() === "") return;
    onEditNote(hazardId, noteId, editText);
    setEditingId(null);
    setEditText("");
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return (
      date.toLocaleDateString() +
      " " +
      date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  return (
    <div
      style={{
        padding: "1.5rem",
        background: "rgb(249 250 251)",
        borderTop: "2px solid rgb(229 231 235)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <MessageSquare
            style={{
              width: "1.25rem",
              height: "1.25rem",
              color: "rgb(30 58 138)",
            }}
          />
          <h3
            style={{
              margin: 0,
              fontSize: "1.125rem",
              fontWeight: "600",
              color: "rgb(31 41 55)",
            }}
          >
            {t.notes} ({notes.length})
          </h3>
        </div>

        {!isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              background: "rgb(30 58 138)",
              color: "white",
              border: "none",
              borderRadius: "0.375rem",
              fontSize: "0.875rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgb(30 64 175)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgb(30 58 138)")
            }
          >
            <Plus style={{ width: "1rem", height: "1rem" }} />
            {t.addNote}
          </button>
        )}
      </div>

      {/* Add Note Form */}
      {isAdding && (
        <div
          style={{
            background: "white",
            padding: "1rem",
            borderRadius: "0.5rem",
            marginBottom: "1rem",
            border: "2px solid rgb(30 58 138)",
          }}
        >
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder={t.notePlaceholder}
            style={{
              width: "100%",
              minHeight: "100px",
              padding: "0.75rem",
              border: "1px solid rgb(229 231 235)",
              borderRadius: "0.375rem",
              fontSize: "0.875rem",
              fontFamily: "inherit",
              resize: "vertical",
              outline: "none",
            }}
            onFocus={(e) => (e.target.style.borderColor = "rgb(30 64 175)")}
            onBlur={(e) => (e.target.style.borderColor = "rgb(229 231 235)")}
          />

          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder={`${t.author} (${t.optional})`}
            style={{
              width: "100%",
              marginTop: "0.5rem",
              padding: "0.5rem 0.75rem",
              border: "1px solid rgb(229 231 235)",
              borderRadius: "0.375rem",
              fontSize: "0.875rem",
              outline: "none",
            }}
            onFocus={(e) => (e.target.style.borderColor = "rgb(30 64 175)")}
            onBlur={(e) => (e.target.style.borderColor = "rgb(229 231 235)")}
          />

          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
            <button
              onClick={handleAddNote}
              style={{
                flex: 1,
                padding: "0.5rem",
                background: "rgb(34 197 94)",
                color: "white",
                border: "none",
                borderRadius: "0.375rem",
                fontWeight: "600",
                fontSize: "0.875rem",
                cursor: "pointer",
              }}
            >
              {t.save}
            </button>
            <button
              onClick={() => {
                setIsAdding(false);
                setNewNote("");
                setAuthor("");
              }}
              style={{
                flex: 1,
                padding: "0.5rem",
                background: "rgb(239 68 68)",
                color: "white",
                border: "none",
                borderRadius: "0.375rem",
                fontWeight: "600",
                fontSize: "0.875rem",
                cursor: "pointer",
              }}
            >
              {t.cancel}
            </button>
          </div>
        </div>
      )}

      {/* Notes List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {notes.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              color: "rgb(107 114 128)",
              fontSize: "0.875rem",
              padding: "2rem",
            }}
          >
            {t.noNotes}
          </p>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              style={{
                background: "white",
                padding: "1rem",
                borderRadius: "0.5rem",
                border: "1px solid rgb(229 231 235)",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
              }}
            >
              {editingId === note.id ? (
                <div>
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    style={{
                      width: "100%",
                      minHeight: "80px",
                      padding: "0.75rem",
                      border: "1px solid rgb(229 231 235)",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                      fontFamily: "inherit",
                      resize: "vertical",
                      outline: "none",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    <button
                      onClick={() => handleSaveEdit(note.id)}
                      style={{
                        padding: "0.25rem 0.75rem",
                        background: "rgb(34 197 94)",
                        color: "white",
                        border: "none",
                        borderRadius: "0.25rem",
                        fontSize: "0.75rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                      }}
                    >
                      <Check
                        style={{ width: "0.875rem", height: "0.875rem" }}
                      />
                      {t.save}
                    </button>
                    <button
                      onClick={() => {
                        setEditingId(null);
                        setEditText("");
                      }}
                      style={{
                        padding: "0.25rem 0.75rem",
                        background: "rgb(156 163 175)",
                        color: "white",
                        border: "none",
                        borderRadius: "0.25rem",
                        fontSize: "0.75rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                      }}
                    >
                      <X style={{ width: "0.875rem", height: "0.875rem" }} />
                      {t.cancel}
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "rgb(107 114 128)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        <strong style={{ color: "rgb(30 58 138)" }}>
                          {note.author}
                        </strong>{" "}
                        {t.noteAdded} {formatDate(note.date)}
                      </div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.875rem",
                          color: "rgb(31 41 55)",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {note.text}
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        marginLeft: "1rem",
                      }}
                    >
                      <button
                        onClick={() => handleEdit(note)}
                        style={{
                          padding: "0.25rem",
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          color: "rgb(30 58 138)",
                        }}
                        title={t.edit}
                      >
                        <Edit2 style={{ width: "1rem", height: "1rem" }} />
                      </button>
                      <button
                        onClick={() => onDeleteNote(hazardId, note.id)}
                        style={{
                          padding: "0.25rem",
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          color: "rgb(239 68 68)",
                        }}
                        title={t.delete}
                      >
                        <Trash2 style={{ width: "1rem", height: "1rem" }} />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NotesSection;
