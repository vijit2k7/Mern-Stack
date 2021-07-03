/** @format */

import React, { useState } from "react";
//import Folders from './Folders/Folders';
import Mail from "./Mail/Mail";
import "./Mailfunction.css";
import TextContent from "./TextContent/TextContent";
// Bootstrap

import { Row, Container, Col } from "react-bootstrap";

function Mailfunction({ user }) {
	console.log("user in mail fuinction", user);
	const [id, setID] = useState("");
	function getID(id) {
		console.log("get id called", id);
		setID(id);
	}
	return (
		<Container className='root-wrapper '>
			<Row>
				<Col md={2} className='toggle-buttons-container'>
					{/* <section className="root-folders">
                <Folders></Folders>
            </section> */}
					<button className='toggle-buttons'>Home</button>
					<button className='toggle-buttons'>Stats</button>
				</Col>
				<Col md={9} className='mail-chat-container'>
					<Row className='mail-chat-container-heading'>
						<h1>Mailbox</h1>
					</Row>
					<Row>
						<Col xs={6} className='mails'>
							<Mail user={user} getID={getID}></Mail>
						</Col>
						<Col className='chat-box'>
							<TextContent user={user} id={id}></TextContent>
						</Col>
					</Row>
				</Col>
			</Row>

			{/* <div className='mail-chat-container'>
				<section className='root-maillist'></section>
				<section className='root-mailbody'></section>
			</div> */}
		</Container>
	);
}

export default Mailfunction;
