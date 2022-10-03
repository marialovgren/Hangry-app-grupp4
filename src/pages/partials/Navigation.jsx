import { Button, Form, ButtonGroup, DropdownButton, Dropdown, InputGroup, Col, Image, Row, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { useAuthContext } from "../../contexts/AuthContext"
import TipsForm from "../../components/TipsForm"

const Navigation = () => {
    const { currentUser, userName, userEmail, userPhotoUrl, showTipsForm, setShowTipsForm } = useAuthContext()

	return (
        <>
        <Navbar bg="dark" className="p-2" expand="md">  
            <Container>
            <Navbar.Brand as={Link} to="/">
                Hangry App
            </Navbar.Brand>
                    
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto align-items-center" >
                    
                    <DropdownButton as={ButtonGroup} size="sm" title="Typ" variant="light" className="m-2">
                        <Dropdown.Item href="#">Lunch</Dropdown.Item>
                        <Dropdown.Item href="#">Middag</Dropdown.Item>
                        <Dropdown.Item href="#">Snabbmat</Dropdown.Item>
                        <Dropdown.Item href="#">Foodtruck</Dropdown.Item>
                        <Dropdown.Item href="#">After Work</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton as={ButtonGroup} size="sm" title="Utbud" variant="light" className="m-2">
                        <Dropdown.Item href="#">Lunch</Dropdown.Item>
                        <Dropdown.Item href="#">Middag</Dropdown.Item>
                        <Dropdown.Item href="#">After Work</Dropdown.Item>
                    </DropdownButton>

                    <Button 
                        size="sm"                      
                        variant="light"
                        className="m-2 d-flex flex-row"
                        onClick={ () => 
                            setShowTipsForm(true)
                        }
                    >
                        Tipsa oss
                    </Button>
                    {
                        currentUser ? (
                            <>
                                <NavDropdown title={
                                    userPhotoUrl
                                        ? <Image
                                            src={userPhotoUrl}
                                            height={30}
                                            width={30}
                                            fluid
                                            roundedCircle
                                        />
                                        : userName || userEmail
                                }>
                                <NavLink to="/admin-page" className="dropdown-item">Admin</NavLink>
                                <NavDropdown.Divider />
                                <NavLink to="/logout" className="dropdown-item">Logga ut</NavLink>
                                </NavDropdown>
                            </>
                            ) : (
                            <>
                                {/* No user is logged in */}
                                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                                <Nav.Link as={NavLink} to="/signup">Signup</Nav.Link>
                            </>
                        )
                    }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

        {showTipsForm && 
				<TipsForm showTipsForm={showTipsForm} setShowTipsForm={setShowTipsForm} 
			/>} 
        </>
    )
}

export default Navigation
