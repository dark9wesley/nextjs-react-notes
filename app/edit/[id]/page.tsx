import NoteEditor from '@/components/NoteEditor'
import {getNote} from '@/lib/redis';
import { Sleep } from '@/lib/utilds';

export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: noteId } = await params;
  const note = await getNote(noteId)

  await Sleep(5000);

  if (note === null) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">
          Click a note on the left to view something! 🥺
        </span>
      </div>
    )
  }

  return <NoteEditor noteId={noteId} initialTitle={note.title} initialBody={note.content} />
}
