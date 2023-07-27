import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import {
	Box,
	Button,
	List,
	ListItem,
	ListItemText,
	Toolbar,
} from '@mui/material'

export default function Footer() {
	return (
		<div className='mt-sm bg-primary-main f-pure-white'>
			<div className='page-section'>
				<Box component='footer'>
					<Container className='mt-md mb-md'>
						<Grid
							container
							spacing={2}
							columns={18}
							className='hide-for-small-only'
						>
							<Grid item xs={2}>
								<div className='f-capitalize f-400 h5 f-primary'>logo</div>
							</Grid>
							<Grid item xs={14} className='ta-c'>
								<Grid container columns={6} className='list'>
									<Grid
										item
										xs={1}
										className='f-capitalize f-400 h5 f-primary list-menu-item'
										color='inherit'
									>
										Home Page
									</Grid>
									<Grid
										item
										xs={1}
										className='f-capitalize f-400 h5 f-primary list-menu-item'
										color='inherit'
									>
										About us
									</Grid>
									<Grid
										item
										xs={1}
										className='f-capitalize f-400 h5 f-primary list-menu-item'
										color='inherit'
									>
										Book audit
									</Grid>
									<Grid
										item
										xs={1}
										className='f-capitalize f-400 h5 f-primary list-menu-item'
										color='inherit'
									>
										our services
									</Grid>
									<Grid
										item
										xs={1}
										className='f-capitalize f-400 h5 f-primary list-menu-item'
										color='inherit'
									>
										Contact us
									</Grid>
									<Grid
										item
										xs={1}
										className='f-capitalize f-400 h5 f-primary list-menu-item'
										color='inherit'
									>
										Blogs
									</Grid>
								</Grid>
							</Grid>

							<Grid item xs={2} className='display-item ta-c'>
								<Link href='https://www.facebook.com/' color='inherit'>
									<Facebook />
								</Link>

								<Link
									href='https://www.instagram.com/'
									color='inherit'
									sx={{ pl: 1, pr: 1 }}
								>
									<Instagram />
								</Link>

								<Link href='https://www.twitter.com/' color='inherit'>
									<Twitter />
								</Link>
							</Grid>
						</Grid>
						<Box className='show-for-small-only'>
							<div
								className='f-capitalize f-400 h5 f-primary list-menu-item'
								color='inherit'
							>
								Logo
							</div>
							<Grid container columns={16} className='mt-sm'>
								<Grid item xs={8}>
									<div
										className='f-capitalize f-400 h5 f-primary list-menu-item'
										color='inherit'
									>
										Home Page
									</div>
									<div
										className='f-capitalize f-400 h5 f-primary list-menu-item'
										color='inherit'
									>
										About us
									</div>
									<div
										className='f-capitalize f-400 h5 f-primary list-menu-item'
										color='inherit'
									>
										Book audit
									</div>
								</Grid>
								<Grid item xs={8}>
									<div
										className='f-capitalize f-400 h5 f-primary list-menu-item'
										color='inherit'
									>
										our services
									</div>
									<div
										className='f-capitalize f-400 h5 f-primary list-menu-item'
										color='inherit'
									>
										Contact us
									</div>
									<div
										className='f-capitalize f-400 h5 f-primary list-menu-item'
										color='inherit'
									>
										Blogs
									</div>
								</Grid>
							</Grid>

							<Grid container columns={3} className='mb-sm'>
								<Grid item xs={3} className='display-item-sm ta-c mt-sm'>
									<Link href='https://www.facebook.com/' color='inherit'>
										<Facebook />
									</Link>

									<Link
										href='https://www.instagram.com/'
										color='inherit'
										sx={{ pl: 1, pr: 1 }}
									>
										<Instagram />
									</Link>

									<Link href='https://www.twitter.com/' color='inherit'>
										<Twitter />
									</Link>
								</Grid>
							</Grid>
						</Box>
						<Box>
							<Typography variant='body2' align='center' className='h6'>
								Copyright ©{new Date().getFullYear()}
							</Typography>
						</Box>
					</Container>
				</Box>
			</div>
		</div>
	)
}
