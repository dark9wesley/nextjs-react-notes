'use client'

import { useState } from 'react'
import NotePreview from '@/components/NotePreview'
import { useFormStatus } from 'react-dom'
import Image from 'next/Image'

export default function NoteEditor({
  noteId,
  initialTitle,
  initialBody
}: {
  noteId: string | null
  initialTitle: string
  initialBody: string
}) {

  const { pending } = useFormStatus()
  const [title, setTitle] = useState(initialTitle)
  const [body, setBody] = useState(initialBody)
  const isDraft = !noteId

  return (
    <div className="note-editor">
      <form className="note-editor-form" autoComplete="off">
        <label className="offscreen" htmlFor="note-title-input">
          Enter a title for your note
        </label>
        <input
          id="note-title-input"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <label className="offscreen" htmlFor="note-body-input">
          Enter the body for your note
        </label>
        <textarea
          value={body}
          id="note-body-input"
          onChange={(e) => setBody(e.target.value)}
        />
      </form>
      <div className="note-editor-preview">
        <form className="note-editor-menu" role="menubar">
          <button
            className="note-editor-done"
            disabled={pending}
            type="submit"
            role="menuitem"
          >
            <Image
              src="/checkmark.svg"
              width={14}
              height={10}
              alt=""
              role="presentation"
            />
            Done
          </button>
          {!isDraft && (
            <button
              className="note-editor-delete"
              disabled={pending}
              role="menuitem"
            >
              <Image
                src="/cross.svg"
                width={10}
                height={10}
                alt=""
                role="presentation"
              />
              Delete
            </button>
          )}
        </form>
        <div className="label label--preview" role="status">
          Preview
        </div>
        <h1 className="note-title">{title}</h1>
        <NotePreview>{body}</NotePreview>
      </div>
    </div>
  )
}
