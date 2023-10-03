import Link from 'next/link'
import ProjectCard from './components/ProjectCard'
import NavBar from './components/NavBar'
import ProfilePicture from './components/ProfilePicture'

export default function Home() {
  return (
    <>
      <div className="navbar-container">
        <NavBar />
      </div>
      <main className="pt-14">
        <ProfilePicture />
        <Link href='/projects'>
          <div className="hover:underline">Projects</div>
        </Link>
        <ProjectCard />
      </main>
    </>
  )
}
