import React, { Component } from 'react'
import {shopData} from '../../shopData'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
import ItemCard from '../ItemCard/ItemCard'

export class HomePage extends Component {
    render() {
        return (
            <Container>
               <Row className='mt-5'>
                {shopData.map(({id,name,imageLink,pageLink})=><Col xs={12} sm={6} xl={3} key={id}><ItemCard imgname={imageLink} name={name} linkto={pageLink} /></Col>)}
            </Row> 
            </Container>
            
        )
    }
}

export default HomePage
