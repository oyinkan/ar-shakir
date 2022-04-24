import { useState } from 'react'
import { 
  Navbar, NavbarBrand, 
  NavbarToggler, Collapse, 
  Nav, NavItem, NavLink,
  UncontrolledDropdown, DropdownToggle, 
  DropdownItem, DropdownMenu 
} from 'reactstrap'
import PrimaryButton from './shared/PrimaryButton'


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return(
    <>
      <Navbar
        expand="lg"
        light
      >
        <NavbarBrand href="/">
          <img src="/images/logo.svg" alt="company's logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse navbar isOpen={isOpen}>
          <Nav
            className="mx-auto"
            navbar
          >
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Product
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Template
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Pricing</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar className="align-items-center">
            <NavItem className="pr-5">
              <NavLink href="/">Sign In</NavLink>
            </NavItem>
            <PrimaryButton text="Start Free" href="/" style={{}} />
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}
