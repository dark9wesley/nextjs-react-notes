import React from 'react'
import Link from 'next/link'
import { getAllNotes } from '@/lib/redis'
import Image from 'next/image'
import SidebarNoteList from './SidebarNoteList'
import LOGO from '@/public/logo.svg'

export default async function Sidebar() {
  const notes = await getAllNotes()

  return (
    <>
      <section className="col sidebar">
        <Link href={'/'} className="link--unstyled">
          <section className="sidebar-header">
            <Image
              className="logo"
              src={LOGO}
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className="sidebar-menu" role="menubar">
            {/* SideSearchField */}
        </section>
        <nav>
          <SidebarNoteList notes={notes} />
        </nav>
      </section>
    </>
  )
}
