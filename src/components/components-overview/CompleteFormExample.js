import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormFeedback,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button
} from "shards-react";


const CompleteFormExample = () => (
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
          <FormGroup>
              <label htmlFor="feInputAddress">Your Name</label>
              <FormInput   
              required
             onChange={() => {}}
             id="feInputAddress" placeholder="Enter your Name" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="feInputAddress">Name of the person for whom this mass is offered</label>
              <FormInput  
                required
               onChange={() => {}} 
               id="feInputAddress" placeholder="For whom offerred this mass" />
            </FormGroup>
            <FormGroup>
                <label htmlFor="feInputState">Select Mass Intention</label>
                <FormSelect id="feInputState">
                  <option>choose...</option>
                  <option>...</option>
                </FormSelect>
              </FormGroup>
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="Date">Date</label>
                <FormInput
                  id="date"
                  type="date"
                  placeholder="date"
                />
              </Col>
              <Col md="6">
                <label htmlFor="time">Mass Time</label>
                <FormInput
                  id="time"
                  type="time"
                  placeholder="time"
                />
              </Col>
            </Row>
            <FormGroup>
              <label htmlFor="number">Repeat this mass for number of days</label>
              <FormInput type="number" id="number" placeholder="Number of days" />
            </FormGroup>
            
            <Row form>
            <Col md="6">
                <label htmlFor="mobile number">Mobile Number</label>
                <FormInput
                  id="number"
                  type="mobile number"
                  placeholder="number"
                />
              </Col>
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">Email</label>
                <FormInput
                  required type="email"
                  id="feEmailAddress"
                  placeholder="Email"
                />
              </Col>
            </Row>
            <Row form>
            <Col md="6">
                <label htmlFor="fePassword">Place</label>
                <FormInput
                  id="place"
                  type="place"
                  placeholder="place"
                />
              </Col>
              <Col md="6" className="form-group">
                <label htmlFor="parish or bcc">Parish or BCC</label>
                <FormInput
                  id="parish"
                  type="text"
                  placeholder="parish or bcc"
                />
              </Col>
            </Row>

            <Row form>
              <Col md="12" className="form-group">
                <FormCheckbox>
                  {/* eslint-disable-next-line */}I agree with your{" "}
                  <a href="#">Privacy Policy</a>.
                </FormCheckbox>
              </Col>
            </Row>
            <Button type="submit">Save</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
   );


export default CompleteFormExample;
