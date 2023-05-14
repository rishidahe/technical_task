import { Nav } from "react-bootstrap"
export function ConfFooter(){
    return(
        <div className="footer--pin">
            <Nav className="footer--pin">
                <Nav.Link href="StandardPage" className="mr-2">Std.Feature</Nav.Link>
                <Nav.Link href="Interior" className="mr-2">Interior</Nav.Link>
                <Nav.Link href="Exterior" className="mr-2">Exterior</Nav.Link>
                <Nav.Link href="DefaultConfPage" className="mr-2">Cancel</Nav.Link>
                <Nav.Link href="InvoicePage" className="mr-2">Confirm Order</Nav.Link>
            </Nav>
            {/* <a href="StandardPage">Std.Feature</a>
            <a href="Interior">Interior</a>
            <a href="Exterior">Exterior</a>
            <a href="#">Confirm Order</a> */}
        </div>
    )
}