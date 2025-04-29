import SidebarNoteItem from './SidebarNoteItem';

export default async function NoteList({ notes }: { notes: Record<string, string> }) {
  const arr = Object.entries(notes);

  if (arr.length == 0) {
    return <div className="notes-empty">
      {'No notes created yet!'}
    </div>
  }

  return <ul className="notes-list">
    {arr.map(([noteId, note]) => {
      return <SidebarNoteItem key={noteId} noteId={noteId} note={JSON.parse(note)}/>
    })}
  </ul>
}
