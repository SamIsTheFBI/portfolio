import './index.css';
import { useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

function App() {

	const [dark, setDark] = useState(false);

	return (
		<main className={dark ? "dark bg-neutral-800" : "bg-slate-100"}>
			<section id="about-me" className="px-5 py-0 dark:text-white">
				<header>
					<nav id="navbar" className="py-5 flex justify-between">
						<a href="#navbar"><h1 className="text-xl font-bold">SamIsTheFBI</h1></a>
						<ul className="flex items-center space-x-5">
							<li><FaMoon onClick={() => setDark(!dark)} className="cursor-pointer text-xl" /></li>
							<li><a href="https://github.com/SamIsTheFBI?tab=repositories" className="bg-gradient-to-r from-orange-600 to-orange-500 font-bold text-white py-2 px-4 rounded-md shadow-gray-200 shadow-md dark:shadow-stone-900">Projects</a></li>
						</ul>
					</nav>
				</header>

				<div className="pt-10 text-center overflow-hidden mx-auto max-w-lg">
					<h2 className="text-5xl py-2 font-bold text-orange-600">Shivam Shekhar Soy</h2>
					<h3 className="sub-heading dark:text-white">About Me</h3>
					<p className="text-md py-8 leading-8 text-gray-900 dark:text-white">
						Hi, I am SamIsTheFBI and my real name is the big one that you see above. I am a 20 year old CS student from India, passionate about computers and software. Currently, I am in the process of learning full stack web development so that I can create robust web designs.
					</p>
					<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
						<a href="https://twitter.com/SamIsTheFBI"><AiFillTwitterCircle className="hover:text-orange-600" /></a>
						<a href="https://linkedin.com/in/samisthefbi" ><AiFillLinkedin className="hover:text-orange-600" /></a>
						<a href="https://github.com/SamIsTheFBI" ><AiFillGithub className="hover:text-orange-600" /></a>
					</div>
				</div>
			</section>
		</main>
	)
}

export default App
