import { Button } from "@mui/material"

export default function Header() {
	return (
		<header className="flex items-center justify-between w-full">
			<div className="">
				<Button>Login</Button>
				<Button>Register</Button>
			</div>
			<h1>ALODstuff</h1>
			<div>
				<Button>Language</Button>
				<Button>Theme</Button>
			</div>
		</header>
	)
}