import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';

export default function Footer() {
	return (
		<footer className='flex w-full justify-between'>
			<a href='https://github.com/mobai-dev' target='_blank'>
				<p>Made by Mohamed Atabay</p>
				<span className='flex gap-2 items-center'>
					<GitHubIcon fontSize='large'>GitHubIcon</GitHubIcon>
					/mobai-dev
				</span>
			</a>
			<Button>What is this website even about?</Button>
		</footer>
	)
}