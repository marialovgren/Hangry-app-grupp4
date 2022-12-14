import { Container, Row, Col, Button } from "react-bootstrap"
/* import { useAuthContext } from "../contexts/AuthContext" // */
import RestaurantForm from '../components/RestraurantForm'
import useGetAllRestaurants from "../hooks/useGetAllRestaurants" //get all restaurants from collection "restuarnts"
import { useMemo, useState } from 'react'
import SortableTable from "../components/SortableTable" //sorts
import { Link } from "react-router-dom"

const RestaurantPage = () => {
    const { data: restaurants, error, isError, isLoading } = useGetAllRestaurants("restaurants") //gets all restaurants from collection

    /* const { showRestaurantForm, setShowRestaurantForm } = useAuthContext()  */

    const [showRestaurantForm, setShowRestaurantForm] = useState(false)


    const columns = useMemo(() => {
        return [
            {
                Header: 'Namn',
                accessor: 'restaurantName', 
            },
            //Links going to each restaurant
            {
                Header: 'Actions',
                Cell: ({row: {original: restaurant} }) =>
                <Button 
                    variant="primary" 
                    size="sm" 
                    as={Link} to={`/restaurants/${restaurant.id}`}
                  /*   onClick={ () =>
                        setShowRestaurantForm(false) 
                    } */
                    >
                    Show
                </Button>
            },
            {
                Header: 'Adress',
                accessor: 'restaurantAddress', 
            },
            {
                Header: 'Ort',
                accessor: 'restaurantCity', 
            },
            {
                Header: 'Telefon',
                accessor: 'restaurantTelephone', 
            },
            {
                Header: 'Description',
                accessor: 'restaurantDescription', 
            },
            {
                Header: 'Cuisine',
                accessor: 'restaurantCuisine', 
            },
            {
                Header: 'Type of place',
                accessor: 'restaurantType', 
            },
            {
                Header: 'Offers',
                accessor: 'restaurantOffer', 
            },
            {
                Header: 'Website',
                accessor: 'restaurantWebsite', 
            },
            {
                Header: 'Facebook',
                accessor: 'restaurantFacebook', 
            },
            {
                Header: 'Instagram',
                accessor: 'restaurantInstagram', 
            }
        ]
    }, [])

    console.log("restaurants: ", restaurants)

	return (
        <>
        

            <Container>
            <Container className="my-3">
				<h1>Alla restauranger:</h1>

				{isLoading && (<p>Loading....</p>)}

				{isError && (<p>{error.message}</p>)}

				{restaurants && <SortableTable columns={columns} data={restaurants} />}

			</Container>
                <Row className="d-flex justify-content-start p-3">
    
                    {/*Create Restaurant Button*/}
                    <Col> 
                        <Button 
                            className="mb-2" 
                            active 
                            variant="dark" 
                            onClick={ () =>
                                setShowRestaurantForm(!showRestaurantForm) 
                            }
                        >
                            Skapa ny restaurang
                        </Button>
                    </Col>
                </Row>
            </Container>
            
            {showRestaurantForm &&
                <RestaurantForm showRestaurantForm={showRestaurantForm} setShowRestaurantForm={setShowRestaurantForm}
            />}
		</>	
	)
}

export default RestaurantPage
