import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import asmith from './asmith.jpg';
import thill from './thill.jpg';
import dadams from './dadams.jpg';
import Image from 'react-bootstrap/Image';

function MyTrainer() {
    return (
        <div className="Trainers">
            <Container fluid className="block-example border rounded border-dark" >
                <h1 style = {{padding: '10px'}}>Our Trainers</h1>
                <h5 style = {{padding: '10px'}}>Our Trainers are available from Monday to Friday from 10am to 10pm for Gold Members ONLY! They are all listed below.</h5>
                <div  style = {{padding: "10px"}}>
                    <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Biography</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr style={{textAlignVertical: 'center'}}>
                            <td><Image className="rounded mb-0 fluid" alt="100x100" src={asmith} style={{width:'200px', height:'200px'}}/></td>
                            <td>Alex Smith</td>
                            <td>Alexander Douglas Smith is a former American football quarterback who played in the National Football League for 16 seasons. 
                                He played college football at Utah, where he received first-team All-American honors and won the 2005 Fiesta Bowl.</td>
                        </tr>
                        <tr>
                            <td><Image className="rounded mb-0 fluid" alt="100x100" src={thill} style={{width:'200px', height:'200px'}}/></td>
                            <td>Tyreek Hill</td>
                            <td> Nicknamed 'cheetah', Tyreek Hill is a wide receiver who used to play for the NFL team Kansas City Chiefs. Hill was traded to the Miami Dolphins on March 24, 2022. 
                                He is the fastest player in the NFL and transitioned from a return specialist into a wide receiver.</td>
                        </tr>
                        <tr>
                            <td><Image className="rounded mb-0 fluid" alt="100x100" src={dadams} style={{width:'200px', height:'200px'}}/></td>
                            <td>Davante Adams</td>
                            <td>Davante Lavell Adams is an American football wide receiver for the Las Vegas Raiders of the National Football League. 
                                He played college football at Fresno State, and was selected by the Green Bay Packers in the second round of the 2014 NFL Draft.</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
}

export default MyTrainer;