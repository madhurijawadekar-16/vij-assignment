import React, { useState } from 'react'
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const Navbar: React.FC = () => {
	const [isDrawerOpen, setDrawerOpen] = useState(false)

	const handleDrawerOpen = () => {
		setDrawerOpen(true)
	}

	const handleDrawerClose = () => {
		setDrawerOpen(false)
	}

	const renderNavItems = () => (
		<List
			style={{ width: 250, height: '100%' }}
			className='bg-primary-main f-pure-white'
		>
			<ListItem onClick={handleDrawerClose} className='f-500 h5 f-primary'>
				<ListItemText primary='Services' />
			</ListItem>
			<ListItem onClick={handleDrawerClose} className='f-500 h5 f-primary'>
				<ListItemText primary='About us' />
			</ListItem>
			<ListItem onClick={handleDrawerClose} className='f-500 h5 f-primary'>
				<ListItemText primary='Blogs' />
			</ListItem>
			<ListItem onClick={handleDrawerClose} className='f-500 h5 f-primary'>
				<ListItemText primary='Contact us' />
			</ListItem>
			<ListItem onClick={handleDrawerClose} className='f-500 h5 f-primary'>
				<Button className='f-uppercase f-500 f-base btn-md bg-secondary-main f-pure-white f-spaced-md'>
					Book an free marketing audit
				</Button>
			</ListItem>
		</List>
	)

	return (
		<div style={{ flexGrow: 1 }} className='header'>
			<AppBar
				position='static'
				className='header-navbar f-light-primary-text f-400 h5 f-primary'
			>
				<Toolbar>
					<Typography variant='h6' style={{ flexGrow: 1 }}>
						<div className='header-rectangle bg-primary-main'></div>
					</Typography>
					<Button
						className='f-capitalize f-400 h5 f-primary btn-navbar'
						color='inherit'
					>
						Contact
					</Button>
					<Button
						className='f-capitalize f-400 h5 f-primary btn-navbar'
						color='inherit'
					>
						Work
					</Button>
					<IconButton
						edge='start'
						color='inherit'
						aria-label='menu'
						onClick={handleDrawerOpen}
						className='hamburger bg-primary-lighter br-lg'
					>
						<MenuIcon />
					</IconButton>
					<Drawer
						anchor='right'
						open={isDrawerOpen}
						onClose={handleDrawerClose}
					>
						{renderNavItems()}
					</Drawer>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Navbar
