import Note from "@/components/Note";
import { getNote } from "@/lib/redis";
import { Sleep } from "@/lib/utilds";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const note = await getNote(id);
  await Sleep(2000);
  if (!note) {
    return notFound();
  }

  return <Note note={note} noteId={id} />;
}
