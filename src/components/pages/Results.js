import React, { useState } from "react";
import useFilterResults from "../../hooks/useFilterResults";
import ResultsPageSearch from '../searchbars/ResultsPageSearch'

import SearchLocation from "../searchbars/SearchLocation";
import ProgramsList from "../programsList";

import { Container, Row, Col, Badge, Button, ListGroup} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh } from "@fortawesome/free-solid-svg-icons";

const Results = ({ allPrograms, homeFilterArr }) => {
	const [value, setValue] = useState({});

  let homeFilterChoice = JSON.parse(sessionStorage.getItem('userSelects2'));
	const filteredResults = useFilterResults(allPrograms, value);

  // console.log(('results',filteredResults||'home:',homeFilterChoice))

  return (
		<>
			{/* <Button variant='primary'>
				Profile <Badge variant='light'>9</Badge>
				<span className='sr-only'>unread messages</span>
			</Button> */}
			{
				  <SearchLocation prgArr={allPrograms} getVal={setValue}/>
			}
			<Container fluid className="p-5 bg-info text-light mb-4">
				<Container>
					<ResultsPageSearch />
				</Container>

				<Container>
					<ListGroup horizontal>
						<ListGroup.Item className="border-0 p-0 mr-1"><Button variant="outline-dark">
						Sports <Badge variant="light">x</Badge>
						</Button></ListGroup.Item>
						<ListGroup.Item className="border-0 p-0 mr-1"><Button variant="outline-dark">
						Education <Badge variant="light">x</Badge>
						</Button></ListGroup.Item>
					</ListGroup>
				</Container>
			</Container>

			<Container>
			<Row className="justify-content-between align-items-center">
				<Col>
					# of Results
				</Col>
				<Col className="text-right">
					<Button variant="outline-info">
							<FontAwesomeIcon icon={faList} className="m-0" />
					</Button>
					&nbsp;
					<Button variant="outline-info">
						<FontAwesomeIcon icon={faTh} className="m-0" />
					</Button>
				</Col>
			</Row>
			</Container>

      {/* /////////////////////////////////////// */}
			<ProgramsList
				prgArr={allPrograms}
				filteredPrograms={filteredResults || homeFilterChoice}
			/>
		</>
	);
};

export default Results;
